export default function Sidebar() {
  return (
    <aside className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 flex-shrink-0">
      <div className="h-full flex flex-col justify-center px-8 py-12 lg:py-16 lg:pl-12 lg:pr-10">

        {/* Avatar */}
        <div className="relative mb-7 w-fit">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl"></div>
          <img
            src="IMG_9176.jpg"
            alt="Xinyu Zheng 的头像"
            className="relative h-36 w-36 rounded-full object-cover ring-4 ring-white shadow-lg"
          />
        </div>

        {/* Name & Title */}
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink">
          Xinyu Zheng 郑欣宇
        </h1>

        {/* Contact */}
        <div className="mt-7 space-y-3">
          <a
            href="mailto:23307110147@m.fudan.edu.cn"
            className="group flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-accent-dark"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-colors group-hover:bg-accent-soft">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75L12 13.5l9.75-6.75M3.75 5.25h16.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5z" />
              </svg>
            </span>
            23307110147@m.fudan.edu.cn
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-2">
          <a href="#" aria-label="Google Scholar" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:text-accent-dark hover:bg-accent-soft">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5L4.21 12 3 12.66V16c0 1.66 4.03 3.5 9 3.5s9-1.84 9-3.5v-3.34L20 12l-8 4.5z"/></svg>
          </a>
          <a href="https://github.com/XinyuZheng1878" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:text-accent-dark hover:bg-accent-soft">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z"/></svg>
          </a>
        </div>

        {/* Footer (desktop only) */}
        <p className="mt-auto pt-10 text-xs text-gray-400 hidden lg:block">
          © 2026 Xinyu Zheng · 更新于 2026 年 7 月
        </p>
      </div>
    </aside>
  );
}
