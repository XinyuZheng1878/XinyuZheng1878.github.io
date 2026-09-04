const ArrowUpRight = ({ className = 'h-4 w-4' }) => (
  <svg className={className} aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default function Sidebar() {
  return (
    <aside className="profile-column">
      <div className="profile-inner">
        <a href="#top" className="avatar-wrap" aria-label="回到页面顶部">
          <img src="/IMG_9176.jpg" alt="Xinyu Zheng at the coast" className="avatar" />
          <span className="avatar-index">XZ / 27</span>
        </a>

        <div className="mt-7">
          <p className="eyebrow">Fudan University · Mathematics</p>
          <h1 className="mt-3 font-serif text-[2.45rem] font-medium leading-[0.95] tracking-[-0.035em] text-white">
            Xinyu Zheng
          </h1>
          <p className="mt-2 text-base tracking-[0.18em] text-slate-400">郑欣宇</p>
        </div>

        <p className="mt-7 max-w-xs text-[15px] leading-7 text-slate-300">
          Undergraduate researcher-in-training, interested in how embodied agents learn to see, reason, and act.
        </p>

        <nav className="mt-9" aria-label="页面导航">
          <a className="nav-link" href="#about"><span>01</span> About</a>
          <a className="nav-link" href="#questions"><span>02</span> Questions</a>
          <a className="nav-link" href="#work"><span>03</span> Selected work</a>
          <a className="nav-link" href="#contact"><span>04</span> Contact</a>
        </nav>

        <div className="mt-auto pt-10">
          <div className="flex flex-wrap gap-3">
            <a className="dark-link" href="mailto:23307110147@m.fudan.edu.cn">
              Email <ArrowUpRight />
            </a>
            <a className="dark-link" href="https://github.com/XinyuZheng1878" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight />
            </a>
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            Shanghai, China · Expected graduation 2027
          </p>
        </div>
      </div>
    </aside>
  );
}
