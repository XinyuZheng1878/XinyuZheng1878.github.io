import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiPython,
  SiDocker, SiGit, SiTailwindcss, SiMongodb, SiPostgresql,
  SiFigma, SiLinux,
} from 'react-icons/si';

const skillCategories = [
  {
    title: '前端开发',
    skills: [
      { name: 'React / Next.js', icon: <SiReact />, color: '#61DAFB', level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', level: 90 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 85 },
    ],
  },
  {
    title: '后端 & 数据库',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', level: 80 },
      { name: 'Python', icon: <SiPython />, color: '#3776AB', level: 75 },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 75 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', level: 70 },
    ],
  },
  {
    title: '工具 & 其他',
    skills: [
      { name: 'Docker', icon: <SiDocker />, color: '#2496ED', level: 70 },
      { name: 'Git', icon: <SiGit />, color: '#F05032', level: 85 },
      { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', level: 65 },
      { name: 'Linux', icon: <SiLinux />, color: '#FCC624', level: 75 },
    ],
  },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xl" style={{ color: skill.color }}>
          {skill.icon}
        </span>
        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
        <span className="ml-auto text-xs text-gray-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">技术栈</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我日常工作中使用的技术和工具
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2, duration: 0.5 }}
              className="glass p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
