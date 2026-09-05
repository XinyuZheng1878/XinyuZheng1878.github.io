import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import 'katex/dist/katex.min.css';
import { articles, formatDate } from '../blog';

const ArrowLeft = () => (
  <svg className="h-4 w-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m5 5-5-5 5-5" />
  </svg>
);

function BlogHeader() {
  return (
    <header className="blog-header">
      <a href="#top" className="blog-wordmark">XZ<span>/notes</span></a>
      <nav aria-label="Blog 导航">
        <a href="#/blog">全部文章</a>
        <a href="#top">个人主页</a>
      </nav>
    </header>
  );
}

function BlogIndex() {
  useEffect(() => { document.title = 'Blog | Xinyu Zheng'; }, []);

  return (
    <div className="blog-page">
      <BlogHeader />
      <main className="blog-container">
        <section className="blog-intro">
          <p className="section-label">Research notes / 研究笔记</p>
          <h1>Blog</h1>
          <p>这里收录我对论文、技术路线和研究问题的阶段性理解。它们不是最终答案，而是思考留下的版本记录。</p>
        </section>

        <section className="blog-list" aria-label="文章列表">
          {articles.map((article, index) => (
            <a href={`#/blog/${article.slug}`} className="blog-list-item" key={article.slug}>
              <span className="blog-list-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <div className="blog-list-meta">
                  <span>{article.category}</span>
                  <time>{formatDate(article.date)}</time>
                </div>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <div className="latest-note-tags">
                  {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}

function scrollToSection(section) {
  const heading = document.getElementById(section);
  if (heading) {
    heading.scrollIntoView({ behavior: 'instant', block: 'start' });
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}

function Article({ article, section }) {
  useEffect(() => { document.title = `${article.title} | Xinyu Zheng`; }, [article.title]);

  useEffect(() => {
    if (!section) return;
    const frame = window.requestAnimationFrame(() => scrollToSection(section));
    return () => window.cancelAnimationFrame(frame);
  }, [article.slug, section]);

  return (
    <div className="blog-page article-page">
      <BlogHeader />
      <main className="article-container">
        <a href="#/blog" className="back-link"><ArrowLeft /> 返回全部文章</a>
        <header className="article-header">
          <div className="blog-list-meta">
            <span>{article.category}</span>
            <time>{formatDate(article.date)}</time>
          </div>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <div className="latest-note-tags">
            {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </header>
        <article className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeSlug]}
            components={{
              a: ({ href, title, children }) => (
                <a
                  href={href?.startsWith('#') ? `#/blog/${article.slug}/${href.slice(1)}` : href}
                  title={title}
                  onClick={(event) => {
                    if (href?.startsWith('#') && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                      scrollToSection(decodeURIComponent(href.slice(1)));
                    }
                  }}
                >
                  {children}
                </a>
              ),
            }}
          >
            {article.body}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

export default function Blog({ slug, section }) {
  if (!slug) return <BlogIndex />;
  const article = articles.find((item) => item.slug === slug);
  if (!article) {
    return (
      <div className="blog-page">
        <BlogHeader />
        <main className="article-container missing-article">
          <p className="section-label">404</p>
          <h1>这篇文章还不存在。</h1>
          <a href="#/blog" className="back-link"><ArrowLeft /> 返回 Blog</a>
        </main>
      </div>
    );
  }
  return <Article article={article} section={section} />;
}
