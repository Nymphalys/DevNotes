
# GitHub Markdown Cheat Sheet: Purpose, Usage & Examples
---

### Sample Markdown Content

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold Text**
*Italic Text*
_Italic Text_

- List item 1  
- List item 2

[Link Text](https://example.com)

`inline code`

```c++
// your code here
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
_Italic Text_
```

~~Strikethrough:~~

```markdown
~~Strikethrough Text~~

```
**Output:**

**Bold Text**  
*Italic Text*  
~~Strikethrough Text~~

---

## 3. Lists

**Unordered list:**

```markdown
- Item 1
- Item 2
```
**Check list:**

```markdown
- [x] Item 1 // - needed for checklist
- [space] Item 2 // space needed for not done task
```

**Ordered list:**

```markdown
1. First
2. Second
3. Third
```
or

```markdown
1. First
1. Second
1. Third
```

**Output:**

- Item 1  
- Item 2

- [x] Item 1
- [ ] Item 2

1. First  
2. Second  
3. Third  

---

## 4. Links and Images

**Link:**

```markdown
[Example Link Text](https://example.com)
```

**Output:**

[Example Link Text](https://example.com)

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

```language
// your code here
// end with ```
```
**Output:**

```c++
// your code here
```

**Code Diff block:**


```markdown

// ```diff
+ your changed part code here
- your removed part code here
// ```
```
**Output:**

```diff
+ your changed part code here
- your removed part code here
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
|-------------|-----------| or |-|-| 
| Cell 1      | Cell 2    |
| Cell 3      | Cell 4    |
```

**Output:**

| Header 1    | Header 2  |
|-------------|-----------|
| Cell 1      | Cell 2    |
| Cell 3      | Cell 4    |

> |:- | for left alignment ,|-:| for right alignment, ,|:-:| for centre alignment 
---

## 8. Horizontal Rule

```markdown
---
```

**Output:**

---

## 9. Emoji

 Emoji   `:smile: `             
**Output:**
😄
---

## 10. Videos in Markdown

### Method 1: Link to YouTube video

```markdown
[Watch demo video on YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

**Output:**

[Watch demo video on YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

---


## Resources

- [Markdown Guide & Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [CommonMark Spec](https://commonmark.org/)

---

## General Notes
- Github Markdown supports HTML 
   - Tags, like `<br>` ,`<p>Para</p>`, `<sup>text</sup> ` , `<sub>text</sub>` , `<mark>text</mark>` , `<small>text</small>`
   - Don not support some HTML Tags like `<video>`, `<iframe>`, `<script>`
   - Html tags use in markdown offer more option in styling
- Use empty lines between elements for proper rendering.  
- Use backticks for inline and block code.  
- Markdown is sensitive to spacing and indentation; preview before publishing.

---
## 11. Alignment in Markdown

**Input:**

```markdown
<p align="center">Centered text</p>
<div align="center">
  <b>Center everything</b>
</div>
```

**Output:**
<p align="center">Centered text</p>
<div align="center">
  <b>Center everything</b>
</div>

---
## 12. Images using HTML

```markdown
<img src="https://..." width="200" />

<img src="https://..." width="40" height="40" />
</div>
```

---

## 13. Links in Markdown using HTML

**Input:**

```markdown
<a href="https://github.com">GitHub</a>
</div>
```

**Output:**
<a href="https://github.com">GitHub</a>

### Opens in new tab
**Input:**

```markdown
<a href="https://github.com" target="_blank">GitHub</a>
</div>
```

**Output:**
<a href="https://github.com" target="_blank">GitHub</a>

---
## 14. Collapsible sections in Markdown using HTML

**Input:**

```markdown
<details>
  <summary>Click to expand</summary>

  Hidden content here  
  Code blocks  
  Images  

</details>

```

**Output:**
<details>
  <summary>Click to expand</summary>

  Hidden content here  
  Code blocks  
  Images  

</details>

---
## 15. Keyboard Shortcut Representation in Markdown using HTML

**Input:**

```markdown
<kbd>Ctrl</kbd> + <kbd>C</kbd>

```

**Output:**
<kbd>Ctrl</kbd> + <kbd>C</kbd>


---

## 15 📌 How to Add Table of Contents in Markdown

✅ 1️⃣ Manual TOC (BEST for GitHub)

GitHub does NOT support automatic TOC syntax, so people write it manually using links.

Step 1: Write your headings
```markdown
## Introduction
## Installation
## Usage
## Contributing
## License
```
Step 2: Create TOC using anchor links
## Table of Contents
```markdown
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
```

**Output**

### Introduction
### Installation
### Usage
### Contributing
### License


### Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
  
<br>

✅ How GitHub generates heading IDs

GitHub:Converts text to lowercase, Replaces spaces with - , Removes special characters

- Example `## Getting Started Guide` Becomes: #getting-started-guide

✅ 2️⃣ Heading Links can be used with HTML as anchors
```markdown  
<h2 align="center">📚 Table of Contents</h2>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a>
</p>
```


This cheat sheet covers fundamental and extended Markdown syntax for creating clean, effective documentation and content.
