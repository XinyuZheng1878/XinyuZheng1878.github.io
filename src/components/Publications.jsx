const papers = [
  {
    title: '面向多模态推理的层次化表示学习框架',
    authors: 'Xinyu Zheng, 李四, 王五, 赵六',
    venue: 'Conference on Neural Information Processing Systems (NeurIPS), 2025',
    links: { pdf: '#', code: '#', bibtex: '#' },
  },
  {
    title: '可解释性驱动的深度神经网络注意力机制研究',
    authors: '张三, Xinyu Zheng, 陈七',
    venue: 'International Conference on Machine Learning (ICML), 2024',
    links: { pdf: '#', code: '#', bibtex: null },
  },
  {
    title: '低资源场景下的跨语言迁移学习方法',
    authors: 'Xinyu Zheng, 孙八',
    venue: 'Annual Meeting of the Association for Computational Linguistics (ACL), 2023',
    links: { pdf: '#', code: null, bibtex: '#' },
  },
];

function PaperTag({ href, icon, label }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-md border border-gray-400/25 px-2.5 py-1 text-xs font-medium text-gray-500 transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="mb-14">
      <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/40"></span>论文发表
      </h2>
      <ol className="mt-6 space-y-8">
        {papers.map((paper, i) => (
          <li key={i} className="group relative pl-6">
            <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent/50 ring-4 ring-accent-soft"></span>
            <p className="font-serif text-[17px] font-semibold leading-snug text-ink">
              {paper.title}
            </p>
            <p className="mt-1.5 text-sm text-gray-500">
              {paper.authors.split(', ').map((author, j) =>
                author.startsWith('Xinyu Zheng') ? (
                  <span key={j} className="underline decoration-accent/60 decoration-2 underline-offset-2 font-medium text-ink">{author}</span>
                ) : (
                  <span key={j}>{author}{j < paper.authors.split(', ').length - 1 ? ', ' : ''}</span>
                )
              )}
            </p>
            <p className="mt-0.5 text-sm italic text-gray-500">{paper.venue}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {paper.links.pdf && (
                <PaperTag
                  href={paper.links.pdf}
                  icon={<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>}
                  label="PDF"
                />
              )}
              {paper.links.code && (
                <PaperTag
                  href={paper.links.code}
                  icon={<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>}
                  label="Code"
                />
              )}
              {paper.links.bibtex && (
                <PaperTag
                  href={paper.links.bibtex}
                  icon={<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"/></svg>}
                  label="BibTeX"
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
