import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiTwitter, FiLinkedin, FiSend } from 'react-icons/fi';
import { SiWechat } from 'react-icons/si';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FiGithub className="text-2xl" />,
    url: 'https://github.com/XinyuZheng1878',
    color: 'hover:text-white hover:bg-gray-800',
  },
  {
    name: 'Email',
    icon: <FiMail className="text-2xl" />,
    url: 'mailto:3190184754@qq.com',
    color: 'hover:text-white hover:bg-red-500',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin className="text-2xl" />,
    url: '#',
    color: 'hover:text-white hover:bg-blue-600',
  },
  {
    name: 'Twitter',
    icon: <FiTwitter className="text-2xl" />,
    url: '#',
    color: 'hover:text-white hover:bg-sky-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            如果你有有趣的项目或合作机会，欢迎随时联系！
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`w-16 h-16 glass flex items-center justify-center rounded-2xl text-gray-400 transition-all duration-300 ${link.color}`}
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass p-8 md:p-10 max-w-lg mx-auto animated-border"
        >
          <FiSend className="text-3xl text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">发送消息</h3>
          <p className="text-gray-400 text-sm mb-6">
            直接发送邮件到我的邮箱，我会尽快回复你
          </p>
          <a
            href="mailto:3190184754@qq.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <FiMail /> 3190184754@qq.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
