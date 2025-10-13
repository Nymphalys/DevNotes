
# Markdown Cheat Sheet: Purpose, Usage & Examples

---

### Sample Markdown Content

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold Text**

_Italic Text_

- List item 1  
- List item 2

[Link Text](https://example.com)

`inline code`

```bash
echo "code block"
```

> Blockquote

| Table Header | Header 2  |
|--------------|-----------|
| Cell 1       | Cell 2    |

---


## Purpose

Markdown is a lightweight markup language used to format text with simple syntax, creating headings, lists, links, code blocks, and more. It is widely used for README files, documentation, blogs, and writing content that can be converted to HTML.

---

## 1. Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

**Output:**

# Heading 1  
## Heading 2  
### Heading 3  

---

## 2. Text Formatting

**Bold:**

```markdown
**Bold Text**
```

*Italic:*

```markdown
*Italic Text*
```

**Output:**

**Bold Text**  
*Italic Text*  

---

## 3. Lists

**Unordered list:**

```markdown
- Item 1
- Item 2
```

**Ordered list:**

```markdown
1. First
2. Second
```

**Output:**

- Item 1  
- Item 2

1. First  
2. Second  

---

## 4. Links and Images

**Link:**

```markdown
[Example Link](https://example.com)
```

**Output:**

[Example Link](https://example.com)

**Image:**

```markdown
![Alt text](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png "GitHub Logo")
```

**Renders as:**

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

---

## 5. Code

**Inline code:**

```markdown
`inline code`
```

**Output:**

`inline code`

**Code block:**

```markdown
```bash
echo "code block"
```
```

**Output:**

```bash
echo "code block"
```

---

## 6. Blockquotes

```markdown
> This is a quote.
```

**Output:**

> This is a quote.

---

## 7. Tables

```markdown
| Header 1    | Header 2  |
|-------------|-----------|
| Cell 1      | Cell 2    |
| Cell 3      | Cell 4    |
```

**Output:**

| Header 1    | Header 2  |
|-------------|-----------|
| Cell 1      | Cell 2    |
| Cell 3      | Cell 4    |

---

## 8. Horizontal Rule

```markdown
---
```

**Output:**

---

## 9. Extended Syntax (Support May Vary)

| Element           | Markdown Syntax                                         | Description                                   |
|-------------------|---------------------------------------------------------|-----------------------------------------------|
| Table             | `| Header | Title |` and rows with `| Cell | Cell |`   | Create tables                                 |
| Fenced Code Block  | <pre>```json <br>{ "key": "value" } <br>```</pre>     | JSON or other code blocks                      |
| Footnote          | `Here is a footnote.[^1]` and `[^1]: Footnote text.`    | Add footnotes                                 |
| Heading ID        | `### My Heading {#id}`                                  | Custom HTML IDs for headings                   |
| Definition List   | `Term : Definition`                                     | Create definition lists                         |
| Strikethrough     | `~~struck text~~`                                       | Strike out text                                |
| Task List         | `- [ ] item` / `- [x] done item`                        | Todo checklists                               |
| Emoji             | `:smile:`                                              | Emoji codes (varies by Markdown processor)    |
| Highlight         | `==highlight==`                                        | Yellow highlight (GFM)                         |
| Subscript         | `H~2~O`                                                | Subscript (GFM extensions)                    |
| Superscript       | `X^2^`                                                 | Superscript (GFM extensions)                  |

---

## 10. Videos in Markdown

### Method 1: Link to YouTube video

```markdown
[Watch demo video on YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

**Output:**

[Watch demo video on YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

---

### Method 2: Embed HTML5 video (works only in some Markdown renderers, NOT standard GitHub README)

```html
<video width="480" controls>
  <source src="videos/sample-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

---

## Resources

- [Markdown Guide & Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [CommonMark Spec](https://commonmark.org/)

---

## General Notes

- Use empty lines between elements for proper rendering.  
- Use backticks for inline and block code.  
- Markdown is sensitive to spacing and indentation; preview before publishing.

---

This cheat sheet covers fundamental and extended Markdown syntax for creating clean, effective documentation and content.
