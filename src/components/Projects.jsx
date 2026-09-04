const ArrowUpRight = () => (
  <svg className="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const projects = [
  {
    index: '01',
    type: 'Reproduction + system extension · TypeScript',
    name: 'SciForge: Autonomous Research Extension',
    desc: 'Reproduced the SciForge desktop workbench and extended it with a four-stage loop for research memory, hypothesis generation, experiment orchestration, and structured report generation.',
    href: 'https://github.com/XinyuZheng1878/SciForge-reproduction-',
    tags: ['AI for Science', 'Agent systems', 'Electron'],
  },
  {
    index: '02',
    type: 'Paper reproduction · Python',
    name: 'MemEvolve Reproduction',
    desc: 'A study-driven reproduction of the MemEvolve dual-evolution pipeline, exploring how an agent can improve both its memory content and memory architecture.',
    href: 'https://github.com/XinyuZheng1878/Memevlove-reproduction-',
    tags: ['Agent memory', 'Reproduction'],
  },
];

export default function Projects() {
  return (
    <>
      <section id="work" className="content-section border-top">
        <div className="section-label">Selected work / 项目</div>
        <div className="section-grid">
          <div>
            <h2 className="section-heading">Learning by rebuilding.</h2>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-500">
              These are engineering and reproduction projects completed for learning. I list them for what they demonstrate about my process—not as peer-reviewed research.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <div className="project-topline">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                  <ArrowUpRight />
                </div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-label !text-blue-200">Contact / 联系我</p>
        <div className="mt-7 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2>Open to serious questions<br />and honest collaboration.</h2>
            <p>
              I am looking for research training and conversations around Embodied AI, VLA, and world models. If our questions overlap, I would be glad to hear from you.
            </p>
          </div>
          <a href="mailto:23307110147@m.fudan.edu.cn" className="contact-button">
            Get in touch <ArrowUpRight />
          </a>
        </div>
      </section>
    </>
  );
}
