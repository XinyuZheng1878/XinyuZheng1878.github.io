import { articles, formatDate } from '../blog';

const Arrow = () => (
  <svg className="h-4 w-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
);

export default function BlogPreview() {
  const latest = articles[0];

  return (
    <section className="content-section border-top" id="writing">
      <div className="section-label">Blog / 研究笔记</div>
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Thinking in public,<br />one note at a time.</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-500">
            记录论文综述、阅读笔记，以及从视频生成、世界模型到具身智能的思考。
          </p>
          <a href="#/blog" className="blog-index-link">进入 Blog <Arrow /></a>
        </div>

        {latest && (
          <a href={`#/blog/${latest.slug}`} className="latest-note">
            <div className="latest-note-meta">
              <span>Latest note</span>
              <time>{formatDate(latest.date)}</time>
            </div>
            <h3>{latest.title}</h3>
            <p>{latest.summary}</p>
            <div className="latest-note-tags">
              {latest.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
