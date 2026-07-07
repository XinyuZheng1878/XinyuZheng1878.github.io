const papers = [
  {
    title: 'A Sample Research Paper Title',
    authors: 'Xinyu Zheng, Co-author Name',
    venue: 'NeurIPS 2025',
    links: { arxiv: '#', code: '#' },
  },
  {
    title: 'Another Interesting Paper on Machine Learning',
    authors: 'Co-author Name, Xinyu Zheng',
    venue: 'ICML 2025',
    links: { arxiv: '#', code: '#' },
  },
  {
    title: 'Efficient Methods for Natural Language Processing',
    authors: 'Xinyu Zheng, Another Author',
    venue: 'ACL 2024',
    links: { arxiv: '#' },
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-16 px-6 bg-white border-y border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">Publications</h2>
        <div className="section-divider mb-8" />

        <div className="space-y-6">
          {papers.map((paper, i) => (
            <div key={i} className="pub-item">
              <h3 className="pub-title font-semibold text-gray-800 mb-1 transition-colors">
                {paper.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{paper.authors}</p>
              <div className="flex items-center gap-3 text-xs">
                <span className="font-mono text-accent bg-accent-light px-2 py-0.5 rounded">
                  {paper.venue}
                </span>
                {paper.links.arxiv && (
                  <a href={paper.links.arxiv} className="text-gray-400 hover:text-accent transition-colors">
                    arXiv
                  </a>
                )}
                {paper.links.code && (
                  <a href={paper.links.code} className="text-gray-400 hover:text-accent transition-colors">
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-8">
          * These are placeholder entries. Add your actual publications here.
        </p>
      </div>
    </section>
  );
}
