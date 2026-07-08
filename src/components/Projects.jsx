const projects = [
  {
    name: '',
    desc: '',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
    ),
  },
  {
    name: '',
    desc: '',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-14">
      <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/40"></span>项目
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((proj) => (
          <a
            key={proj.name}
            href="#"
            className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              {proj.icon}
            </div>
            <h3 className="font-serif text-base font-semibold text-ink transition-colors group-hover:text-accent-dark">
              {proj.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-500">{proj.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
