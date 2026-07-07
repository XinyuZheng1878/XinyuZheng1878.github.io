import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800">
      <Navbar />
      <Hero />
      <Research />
      <Publications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
