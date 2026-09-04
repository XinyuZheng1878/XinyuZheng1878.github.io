import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="site-shell">
      <Sidebar />

      <main className="main-column">
        <About />
        <Projects />

        <footer className="site-footer">
          <span>© 2026 Xinyu Zheng</span>
          <span>Built with curiosity, revised in September 2026.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
