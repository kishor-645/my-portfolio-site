'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ParticleBackground } from '@/components/animation/ParticleBackground'

const techIcons = [
  { name: 'Azure', color: '#0078D4', position: [-4, 2, 0] as [number, number, number] },
  { name: 'AWS', color: '#FF9900', position: [4, 2.5, 0] as [number, number, number] },
  { name: 'Kubernetes', color: '#326CE5', position: [-3.5, -1, 0] as [number, number, number] },
  { name: 'Terraform', color: '#7B42BC', position: [3.5, -1.5, 0] as [number, number, number] },
  { name: 'Docker', color: '#2496ED', position: [-5, 0.5, 0] as [number, number, number] },
  { name: 'K8s', color: '#326CE5', position: [5, 0, 0] as [number, number, number] },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-accent-cyan/5 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-width text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-cyan border border-accent-cyan/20">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight"
          >
            <span className="text-white">Kishor</span>
            <br />
            <span className="text-gradient">Vaishanav</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-primary-200 font-medium mb-2">
              Sr. Cloud DevSecOps Engineer
            </h2>
            <p className="text-primary-400 text-base md:text-lg">
              Designing Secure, Scalable & Multi-Region Cloud Architectures
            </p>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mt-4"
          >
            {['Azure', 'AWS', 'Kubernetes', 'Terraform', 'Docker', 'DevSecOps'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full glass text-sm text-primary-300 border border-primary-700 hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button size="lg" glow="cyan" className="group">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="group">
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
            <Button size="lg" variant="ghost" className="group">
              <Send size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-primary-500">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-5 h-8 rounded-full border-2 border-primary-600 flex items-start justify-center p-1"
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Tech Icons - positioned absolutely */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 0.6,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 1 + index * 0.1 },
              scale: { duration: 0.5, delay: 1 + index * 0.1 },
              y: { duration: 3 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 },
            }}
            className="absolute"
            style={{
              left: `calc(50% + ${tech.position[0] * 50}px)`,
              top: `calc(50% + ${tech.position[1] * -50}px)`,
            }}
          >
            <div
              className="w-16 h-16 rounded-xl glass flex items-center justify-center border border-primary-700 hover:border-accent-cyan/30 transition-all cursor-default"
              title={tech.name}
            >
              <span className="text-xs font-bold" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
