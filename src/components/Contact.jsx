import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">Contact</h2>
        <div className="section-divider mb-8" />

        <p className="text-gray-500 text-sm mb-6">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:3190184754@qq.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-accent hover:text-accent transition-colors"
          >
            <FiMail /> 3190184754@qq.com
          </a>
          <a
            href="https://github.com/XinyuZheng1878"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-accent hover:text-accent transition-colors"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-accent hover:text-accent transition-colors"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
