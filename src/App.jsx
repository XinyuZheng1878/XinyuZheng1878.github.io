import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import BlogPreview from './components/BlogPreview';
import Blog from './components/Blog';

function getRoute() {
  return decodeURIComponent(window.location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleRoute = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  if (route[0] === 'blog') {
    return <Blog slug={route[1]} />;
  }

  return (
    <div className="site-shell">
      <Sidebar />

      <main className="main-column">
        <About />
        <BlogPreview />
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
