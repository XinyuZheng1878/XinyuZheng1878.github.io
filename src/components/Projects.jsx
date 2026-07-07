import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'Project Name',
    desc: 'A brief description of what this project does and why it matters. Built with Python and PyTorch.',
    links: { github: 'https://github.com/XinyuZheng1878', demo: null },
  },
  {
    name: 'Another Project',
    desc: 'Short description of another interesting project. Uses React, Node.js, and PostgreSQL.',
    links: { github: 'https://github.com/XinyuZheng1878', demo: '#' },
  },
  {
    name: 'Open Source Tool',
    desc: 'A developer tool that helps with automated testing and code analysis.',
    links: { github: 'https://github.com/XinyuZheng1878', demo: null },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">Projects</h2>
        <div className="section-divider mb-8" />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((proj, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
              <h3 className="font-semibold text-gray-800 mb-2">{proj.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{proj.desc}</p>
              <div className="flex items-center gap-3">
                <a
                  href={proj.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  <FiGithub /> Code
                </a>
                {proj.links.demo && (
                  <a
                    href={proj.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    <FiExternalLink /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
