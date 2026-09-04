const Arrow = () => (
  <svg className="h-4 w-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
);

const questions = [
  {
    number: '01',
    title: 'Perception → Action',
    text: 'How can vision-language representations become action-grounded, rather than remain descriptions of the world?',
  },
  {
    number: '02',
    title: 'World models & memory',
    text: 'What internal state lets an agent predict consequences, retain spatial context, and plan beyond the next step?',
  },
  {
    number: '03',
    title: 'Generalization',
    text: 'Which data and learning objectives help VLA systems transfer across environments, embodiments, and tasks?',
  },
];

export default function About() {
  return (
    <>
      <section id="top" className="hero-section">
        <div className="status-pill"><span /> Currently exploring Embodied AI &amp; VLA</div>
        <h2 className="hero-title">
          From mathematical<br />structures to agents<br />that <em>act.</em>
        </h2>
        <p className="hero-copy">
          I am a senior undergraduate at Fudan University, moving from pure mathematics toward embodied intelligence. My current interests lie in <strong>Vision–Language–Action models</strong>, world models, and the path from visual prediction to grounded decision-making.
        </p>
        <div className="hero-actions">
          <a href="#questions" className="primary-button">Explore my questions <Arrow /></a>
          <a href="mailto:23307110147@m.fudan.edu.cn" className="text-button">Start a conversation <Arrow /></a>
        </div>
      </section>

      <section id="about" className="content-section border-top">
        <div className="section-label">About / 关于我</div>
        <div className="section-grid">
          <h2 className="section-heading">A mathematical foundation,<br />a new research direction.</h2>
          <div className="body-copy space-y-5">
            <p>
              I am a 2023-entry undergraduate in the School of Mathematical Sciences at Fudan University, with an exchange semester at HKUST. Three years of mathematical training taught me to value abstraction, precise reasoning, and questions that survive beyond a single benchmark.
            </p>
            <p>
              In 2026, I shifted my focus toward AI. I am now building the technical foundation needed for research in embodied intelligence, while studying how video generation, multimodal models, and world models can support agents that understand the effects of their actions.
            </p>
            <p className="callout">
              I am early in this transition and do not want to overstate it. What I can offer is a strong mathematical base, sustained curiosity, and the willingness to turn difficult questions into concrete experiments.
            </p>
          </div>
        </div>
      </section>

      <section id="questions" className="content-section border-top">
        <div className="section-label">Research questions / 研究问题</div>
        <div className="section-grid">
          <div>
            <h2 className="section-heading">What I want to understand.</h2>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-500">
              These are working questions, not claims of solved problems. They guide what I read, reproduce, and hope to investigate with experienced collaborators.
            </p>
          </div>
          <div className="question-list">
            {questions.map((question) => (
              <article className="question-item" key={question.number}>
                <span className="question-number">{question.number}</span>
                <div>
                  <h3>{question.title}</h3>
                  <p>{question.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section border-top">
        <div className="section-label">Trajectory / 经历</div>
        <div className="timeline">
          <article>
            <span>2023 — 2027</span>
            <h3>Fudan University</h3>
            <p>B.S. candidate, School of Mathematical Sciences</p>
          </article>
          <article>
            <span>Exchange</span>
            <h3>HKUST</h3>
            <p>One semester of academic exchange</p>
          </article>
          <article>
            <span>2026 — Now</span>
            <h3>Transition to AI</h3>
            <p>Embodied AI · VLA · World Models</p>
          </article>
        </div>
      </section>
    </>
  );
}
