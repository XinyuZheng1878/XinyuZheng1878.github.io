import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm flex items-center justify-center gap-1.5">
          Built with <FiHeart className="text-red-400 inline" /> by
          <span className="gradient-text font-medium">Xinyu Zheng</span>
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
