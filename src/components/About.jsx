import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiHeart } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiCode className="text-2xl" />,
    title: '热爱编程',
    desc: '热衷于用代码创造有价值的应用，追求优雅的架构设计',
  },
  {
    icon: <FiCoffee className="text-2xl" />,
    title: '持续学习',
    desc: '保持好奇心，不断探索新技术、新领域，在学习中成长',
  },
  {
    icon: <FiHeart className="text-2xl" />,
    title: '开源精神',
    desc: '相信开源的力量，积极参与开源社区，分享知识与经验',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
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
            <span className="gradient-text">关于我</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            一名充满热情的全栈开发者，专注于构建优质的 Web 应用。
            注重代码质量、用户体验和持续学习。
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass p-8 md:p-10 max-w-3xl mx-auto animated-border"
        >
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            我是一名软件开发者，专注于全栈 Web 开发。擅长使用现代前端框架和后端技术
            构建高性能、可扩展的应用。在业余时间，我喜欢参与开源项目、撰写技术博客，
            以及探索新的技术可能性。
          </p>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-4">
            当前我正在寻找有趣的项目和技术挑战。如果你有好的想法或者合作机会，
            欢迎随时联系我！
          </p>
        </motion.div>
      </div>
    </section>
  );
}
