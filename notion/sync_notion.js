require('dotenv').config({ path: '../.env' });
const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');
const fs = require('fs');
const path = require('path');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

function getPageTitle(page) {
    const titleProp = Object.values(page.properties).find(p => p.type === 'title');
    return titleProp?.title?.[0]?.plain_text || 'Untitled Page';
}

async function processPage(pageId, parentFolder, childPages = []) {
    try {
        const page = await notion.pages.retrieve({ page_id: pageId });

        const mdBlocks = await n2m.pageToMarkdown(pageId);
        let finalMarkdown = n2m.toMarkdownString(mdBlocks)?.parent || '';

        let title = getPageTitle(page);

        if ((title === "Untitled Page" || !title) && mdBlocks.length > 0) {
            const firstBlock = mdBlocks.find(b => {
                const text = b.plain_text || (b[b.type]?.text?.map(t => t.plain_text).join("") || "");
                return text && text.trim() !== "";
            });
            if (firstBlock) {
                title = firstBlock.plain_text || (firstBlock[firstBlock.type]?.text?.map(t => t.plain_text).join("") || "");
            }
        }

        if (!title) title = "Untitled Page";
        if (!finalMarkdown || finalMarkdown.trim() === "") {
            finalMarkdown = "*This page has no content*";
        }

        const safeTitle = title.replace(/[/\\?%*:|"<>]/g, "-");

        const pageFolder = path.join(parentFolder, safeTitle);
        if (fs.existsSync(pageFolder)) {
            fs.rmSync(pageFolder, { recursive: true, force: true });
        }
        fs.mkdirSync(pageFolder, { recursive: true });

        const children = await notion.blocks.children.list({ block_id: pageId });
        const childPageBlocks = [];
        
        for (const block of children.results) {
            if (block.type === "child_page") {
                childPageBlocks.push(block);
            }
        }

        const processedChildren = [];
        for (const block of childPageBlocks) {
            const childTitle = block.child_page?.title || "Untitled";
            const childSafeTitle = childTitle.replace(/[/\\?%*:|"<>]/g, "-");
            processedChildren.push({ id: block.id, title: childTitle, safeTitle: childSafeTitle });
            await processPage(block.id, pageFolder);
        }

        const fileUrlPattern = /\[file\]\(https:\/\/prod-files-secure\.s3[^)]+\)/g;
        let matchIndex = 0;
        finalMarkdown = finalMarkdown.replace(fileUrlPattern, () => {
            if (matchIndex < processedChildren.length) {
                const child = processedChildren[matchIndex];
                matchIndex++;
                return `[${child.title}](./${child.safeTitle}/${child.safeTitle}.md)`;
            }
            return '[file]()';
        });

        fs.writeFileSync(path.join(pageFolder, `${safeTitle}.md`), finalMarkdown, "utf8");
    } catch (err) {
        console.error(`Error processing page ${pageId}:`, err.message);
    }
}

async function main() {
    try {
        const pageIds = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages.json'), 'utf8'));
        
        if (!pageIds || pageIds.length === 0) {
            console.error('No page IDs found in pages.json');
            process.exit(1);
        }

        const outputDir = path.join(__dirname, '..', 'notes');
        
        for (const pageId of pageIds) {
            console.log(`Processing page: ${pageId}`);
            await processPage(pageId, outputDir);
        }

        console.log('✅ Notion sync completed successfully');
    } catch (err) {
        console.error('❌ Sync failed:', err.message);
        process.exit(1);
    }
}

main();
