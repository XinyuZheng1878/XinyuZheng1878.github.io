import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi';

const roles = [
  '全栈开发者',
  2000,
  '开源爱好者',
  2000,
  '终身学习者',
  2000,
  '技术探索者',
  2000,
];

const particleOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    color: { value: ['#6C63FF', '#00D9FF', '#FF6B9D'] },
    links: { color: '#6C63FF', distance: 150, enable: true, opacity: 0.1, width: 1 },
    move: { enable: true, speed: 1.5, direction: 'none', random: false, straight: false, outModes: 'out' },
    number: { density: { enable: true }, value: 60 },
    opacity: { value: 0.3 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
    },
    modes: {
      grab: { distance: 200, links: { opacity: 0.3 } },
    },
  },
  detectRetina: true,
};

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleOptions}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 font-mono text-sm mb-6 tracking-wider"
          >
            👋 你好，我是
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="gradient-text">Xinyu Zheng</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-gray-400 font-light mb-10 h-10"
          >
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass rounded-full text-gray-300 font-medium hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FiMail /> 联系我
            </a>
            <a
              href="https://github.com/XinyuZheng1878"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass rounded-full text-gray-300 font-medium hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FiGithub /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <FiArrowDown className="text-2xl" />
      </motion.div>
    </section>
  );
}
