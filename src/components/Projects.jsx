import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
  {
    title: '个人主页',
    description: '使用 React、Framer Motion 和 Tailwind CSS 构建的现代个人主页，包含粒子动画和交互效果。',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/XinyuZheng1878/XinyuZheng1878.github.io',
    demo: 'https://xinyuzheng1878.github.io',
    featured: true,
  },
  {
    title: '项目占位 1',
    description: '这是一个即将上线的项目。我会在这里展示我最好的作品，敬请期待！',
    tags: ['Coming Soon'],
    github: '#',
    demo: null,
    featured: false,
  },
  {
    title: '项目占位 2',
    description: '另一个激动人心的项目即将到来。我一直在努力构建有趣且有用的应用。',
    tags: ['Coming Soon'],
    github: '#',
    demo: null,
    featured: false,
  },
  {
    title: '项目占位 3',
    description: '更多项目正在路上。关注我的 GitHub 了解最新的开发进展。',
    tags: ['Coming Soon'],
    github: '#',
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">项目展示</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我参与和构建的一些项目
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`glass p-6 md:p-8 flex flex-col group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-500">
                  <FiFolder className="text-xl" />
                </div>
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      title="在线预览"
                    >
                      <FiExternalLink className="text-lg" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    title="源代码"
                  >
                    <FiGithub className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
