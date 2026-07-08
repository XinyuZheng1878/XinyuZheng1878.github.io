export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="mb-14">
        <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent/40"></span>关于我
        </h2>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-gray-500">
          <p>
            我是 <span className="font-medium text-ink">Xinyu Zheng</span>，复旦大学23级本科生，在数学科学学院完成了三年的基础数学学习，刚刚进入AI方面的学习。目前对LLM，agent 自进化较为感兴趣。
            希望做一些有意义或有趣的研究。
          </p>
          <p>
            出于对LLM底层逻辑的好奇，目前正在学习《build LLM from scratch》，相关学习代码正在同步github中。
          </p>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section id="collab" className="mb-14">
        <div className="rounded-2xl bg-accent-soft/70 p-6 ring-1 ring-accent/10">
          <h3 className="font-serif text-lg font-semibold text-accent-dark">欢迎合作</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
            我认为与他人交流是一个非常好的学习方式，欢迎交流。
          </p>
          <a href="mailto:23307110147@m.fudan.edu.cn" className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark">
            取得联系
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="mb-14">
        <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent/40"></span>简历
        </h2>
        <a href="#" className="group mt-5 flex items-center justify-between rounded-xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </span>
            <span>
              <span className="block text-[15px] font-medium text-ink">完整简历 (CV)</span>
              <span className="block text-xs text-gray-500">PDF · 更新于 2026 年 7 月</span>
            </span>
          </span>
          <svg className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </a>
      </section>
    </>
  );
}
