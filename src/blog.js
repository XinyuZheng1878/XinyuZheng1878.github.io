const modules = import.meta.glob('./content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parseFrontmatter(raw, path) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const metadata = {};
  const body = match ? match[2] : raw;

  if (match) {
    match[1].split('\n').forEach((line) => {
      const separator = line.indexOf(':');
      if (separator === -1) return;
      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
      metadata[key] = value;
    });
  }

  const slug = path.split('/').pop().replace(/\.md$/, '');
  return {
    slug,
    title: metadata.title || slug,
    date: metadata.date || '',
    summary: metadata.summary || '',
    category: metadata.category || 'Research Note',
    tags: metadata.tags ? metadata.tags.split(',').map((tag) => tag.trim()) : [],
    draft: metadata.draft === 'true',
    body,
  };
}

export const articles = Object.entries(modules)
  .map(([path, raw]) => parseFrontmatter(raw, path))
  .filter((article) => !article.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(date) {
  if (!date) return '';
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}
