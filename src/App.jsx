import Sidebar from './components/Sidebar';
import About from './components/About';
import Publications from './components/Publications';
import Projects from './components/Projects';

function App() {
  return (
    <div className="mx-auto max-w-6xl lg:h-screen lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:h-screen">

        {/* Left Sidebar (sticky) */}
        <Sidebar />

        {/* Right Main Content (scrollable) */}
        <main className="main-scroll lg:w-2/3 lg:h-screen lg:overflow-y-auto bg-white/60 lg:rounded-l-[2rem] lg:shadow-[-8px_0_40px_-20px_rgba(31,41,51,0.15)]">
          <div className="px-8 py-12 lg:px-14 lg:py-16 max-w-2xl">
            <About />
            <Publications />
            <Projects />

            {/* Mobile footer */}
            <p className="pt-4 text-xs text-gray-400 lg:hidden">
              © 2026 Xinyu Zheng · 更新于 2026 年 7 月
            </p>
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
