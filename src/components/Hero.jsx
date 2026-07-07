import { FiGithub, FiMail, FiFileText } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Name & Title */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
          Xinyu Zheng
        </h1>
        <p className="text-base text-gray-500 mb-6">
          Ph.D. Student / Researcher / Software Developer
        </p>

        {/* Brief Bio */}
        <p className="text-gray-600 leading-relaxed max-w-xl mb-6">
          I am a researcher and software developer with interests in machine learning,
          natural language processing, and software engineering. My work focuses on building
          practical tools that bridge research and real-world applications.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/XinyuZheng1878"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-accent transition-colors link-underline"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="mailto:3190184754@qq.com"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-accent transition-colors link-underline"
          >
            <FiMail /> Email
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-accent transition-colors link-underline"
          >
            <FiFileText /> CV
          </a>
        </div>
      </div>
    </section>
  );
}
