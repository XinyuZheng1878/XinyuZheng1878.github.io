# Xinyu Zheng — Personal Homepage

Personal academic homepage built with React, Vite, and Tailwind CSS.

## Write a blog post

1. Copy `src/content/blog/_template.md`.
2. Rename the copy with a short English slug, for example `solarwm-review.md`.
3. Fill in the frontmatter and write the article in Markdown.
4. Change `draft: true` to `draft: false`, or remove that line.
5. Commit and push to `main`. GitHub Actions will build and publish the site automatically.

Supported Markdown includes headings, lists, links, blockquotes, code blocks, tables, task lists, and strikethrough.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
