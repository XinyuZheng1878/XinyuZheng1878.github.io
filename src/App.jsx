import { lazy, Suspense, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import BlogPreview from './components/BlogPreview';

const Blog = lazy(() => import('./components/Blog'));

function getRoute() {
  return decodeURIComponent(window.location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleRoute = () => {
      const nextRoute = getRoute();
      setRoute(nextRoute);
      if (nextRoute[0] !== 'blog' || !nextRoute[2]) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  if (route[0] === 'blog') {
    return (
      <Suspense fallback={<main className="article-container" role="status">正在加载文章…</main>}>
        <Blog slug={route[1]} section={route[2]} />
      </Suspense>
    );
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
