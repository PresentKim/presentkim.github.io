---
title: '📝 이제 MDsveX를 통해 포스트를 작성할 수 있습니다'
summary: 'mdsvex를 통해 블로그의 포스트를 마크다운 파일로 작성합니다. 아래 내용은 마크다운의 기본 문법들을 테스트하기 위해 markdownguide.org의 basic-syntax를 인용했습니다.'
date: 2022-10-26 12:00:00
tags: [블로그]
---

[mdsvex](https://mdsvex.com)를 통해 블로그의 포스트를 마크다운 파일로 작성합니다.

아래 내용은 마크다운의 기본 문법들을 테스트하기 위해 [markdownguide.org](https://markdownguide.org)의 [basic-syntax](https://www.markdownguide.org/basic-syntax/)를 인용했습니다.

---

<h1 align="center" id="readme">The Complete Guide of <br> Readme Markdown Syntax</h1>

Markdown is a syntax for styling all forms of writing on the GitHub platform.
Mostly, it is just regular text with a few non-alphabetic characters thrown in, like `git # or * `

You can use Markdown most places around GitHub:

1. Gists
2. Comments in Issues and Pull Requests
3. Files with the .md or .markdown extension

---

### Headers

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

### Font

```markdown
_Italics_
_This will also be italic_
**Bold text**
**This will also be bold**
**_Bold and Italics_**
_You **can** combine them_
~~Striked Text~~
**_~~Italic, bold, and strikethrough1~~_**
```

_Italics_ <br>
_This will also be italic_<br>
**Bold Text**<br>
**This will also be bold**<br>
**_Bold and Italics_**<br>
_You **can** combine them_<br>
~~Striked Text~~<br>
**_~~Italic, bold, and strikethrough1~~_**

---

### Lists

> Unordered

```markdown
- Item 1
- Item 2
  - Item 1a
  - Item 2a
    - Item 1b
    - Item 2b
```

- Item 1
- Item 2
  - Item 1a
  - Item 2a
    - Item 1b
    - Item 2b

OR
`- Item 1`

- Item 1

> Ordered

```markdown
1. First
2. jhg
   1. Second
   2. jhg
      1. Third
      2. jhg
```

1. First
2. jhg
   1. Second
   2. jhg
      1. Third
      2. jhg

---

### Links

```markdown
- [Link with more info with various formatting options](https://docs.github.com/en/github/writing-on-github 'more info')
- https://www.google.com/
- <https://www.google.com/>
```

- [Link with more info with various formatting options](https://docs.github.com/en/github/writing-on-github 'more info')
- https://www.google.com/
- <https://www.google.com/>

### Link Label

```markdown
[My GitHub][githublink]
```

[My GitHub][githublink]

You may define your link label anywhere in the document.

```markdown
e.g. put on bottom:

---

[githublink]: https://github.com/PresentKim
```

### Links to the URLs in a repository

```markdown
[Example document](/blog/blog/basic-markdown)
```

[Example document](/blog/blog/basic-markdown)

```markdown
[example](./basic-markdown)
```

[example](./basic-markdown)

---

### Inserting Images or Gifs using links

```markdown
![alt](URL 'title')
```

- alt in square bracket indicates the replacement text when the image fails to display (can be omitted)
- parenthesis contains image source
- title in quotes indicates the text to display when the mouse hovers over the image (can be omitted)

Nite: Dropping the image to the readme file will upload it automatically with this syntax;
It's the same as links, but add an exlamation mark (!) before opening square bracket;
Image source can be either a location from the local machine or any valid image URL;

> Example

```markdown
![Octocat](https://avatars.githubusercontent.com/u/13284800?v=4 'Profile')
```

![Octocat](https://avatars.githubusercontent.com/u/13284800?v=4 'Profile')

### Resize images/Gifs

```
<img src="https://avatars.githubusercontent.com/u/13284800?v=4" alt="Profile" width="385px" align="center">
```

<img src="https://avatars.githubusercontent.com/u/13284800?v=4" alt="Profile" width="42px" align="center">

You can use HTML tags like width="42px", hight="100px", align="center", etc depending what you need. In this case this gif was once uploaded to the repository and the link was taken from there.

---

### Linking Image/Gif

To open another webpage when image is clicked, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```
[![Octocat](https://avatars.githubusercontent.com/u/13284800?v=4 "GitHub Logo")](https://github.com/)

```

[![Octocat](https://avatars.githubusercontent.com/u/13284800?v=4 'GitHub Logo')](https://github.com/)

---

### Tables

```markdown
| Header1 | Header2 | Header3 |
| ------- | ------- | ------- |
| This    | is a    | table   |
| This    | is 2nd  | row     |
| This    | is 3rd  | row     |
```

| Header1 | Header2 | Header3 |
| ------- | ------- | ------- |
| This    | is a    | table   |
| This    | is 2nd  | row     |
| This    | is 3rd  | row     |

### Align

You may specify alignment like this:

```markdown
| Align left |    Centered     | Align right |
| :--------- | :-------------: | ----------: |
| col 3 is   | some wordy text |       $1600 |
```

| Align left | Centered | Align right |
| :--------- | :------: | ----------: |
| aaa        |   bbb    |         ccc |

p.s. You can use alignment with `<h1 (or 2 etc.) align="center"> your text </h1>` tags or with `<p align="center"> your text</p>` tag to align plain text.

---

### CheckBox

```markdown
- [ ] Checkbox1

- [ ] Checkbox2

- [x] Checkbox selected
```

- [ ] Checkbox1

- [ ] Checkbox2

- [x] Checkbox selected

You may use this syntax in GitHub's issue to check or uncheck the checkbox in real time without having to modify the original version of the issue.

---

### Quoting Text

```markdown
> This is a block quoted text
```

> This is a block quoted text

### Multi-level blockquotes

```
> Asia
>> China
>>> Beijing
>>>> Haidian
>>>>> Tsinghua
```

#### Look like

> Asia
>
> > China
> >
> > > Beijing
> > >
> > > > Haidian
> > > >
> > > > > Tsinghua

- These are fenced code blocks

---

### Text highlighting

```markdown
`linux` `ubuntu`
```

Using a pair of backquotes is suitable for making tags for articles
`linux` `ubuntu`

---

### Horizontal Line

```markdown
---
---

---
```

All three will be rendered as:

---

p.s.

```markdown
<hr> works too
```

---

### Break between lines

```markdown
<br>
```

---

### Multi-line text

Use three backticks:

```
asd,
sfd,
wer!
```

This syntax can also be used for code highlighting

---

### Comments in Markdown

```markdown
<!-- comment written in markdown -->
```

They will be invisible on readme

<!-- comment written in markdown -->

---

### Emoji

```markdown
:grinning: or just place the emoji 😀
```

:grinning: or just place the emoji 😀

To see a list of every image Github supports, check out the [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

---

### Code Block

[See example](./codeblock-prismjs)

---

### Anchor

In fact, each title is an anchor, similar to the HTML anchor (`#`), e.g.

| Syntax                   | Look like              |
| ------------------------ | ---------------------- |
| `[Back to top](#readme)` | [Back to top](#readme) |

Note that all the letters in the title are converted to **lowercase letters**.

[githublink]: https://github.com/PresentKim
