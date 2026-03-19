'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Badge } from '@/components/ui/Badge'
import { AnimatedCounter } from '@/components/animation/AnimatedCounter'
import { Card } from '@/components/ui/Card'
import { Shield, Globe, Zap, TrendingUp, Server, Lock } from 'lucide-react'

const metrics = [
  {
    icon: Shield,
    value: 99.99,
    suffix: '%',
    label: 'Uptime SLA Achieved',
    description: 'Multi-region architecture with automatic failover',
    color: 'cyan',
  },
  {
    icon: Globe,
    value: 3,
    suffix: '+',
    label: 'Regions Deployed',
    description: 'East US, West US, and Central US',
    color: 'purple',
  },
  {
    icon: Zap,
    value: 95,
    suffix: '%',
    label: 'Automation Rate',
    description: 'Infrastructure and deployment processes automated',
    color: 'green',
  },
  {
    icon: TrendingUp,
    value: 60,
    suffix: '%',
    label: 'Faster Deployments',
    description: 'Average deployment time reduction',
    color: 'blue',
  },
  {
    icon: Server,
    value: 50,
    suffix: '+',
    label: 'Containers Managed',
    description: 'Across production Kubernetes clusters',
    color: 'cyan',
  },
  {
    icon: Lock,
    value: 100,
    suffix: '%',
    label: 'Security Compliance',
    description: 'Vulnerabilities caught before production',
    color: 'purple',
  },
]

const colorMap: Record<string, { icon: string; border: string; bg: string }> = {
  cyan: { icon: 'text-accent-cyan', border: 'border-accent-cyan/30', bg: 'bg-accent-cyan/5' },
  purple: { icon: 'text-accent-purple', border: 'border-accent-purple/30', bg: 'bg-accent-purple/5' },
  green: { icon: 'text-accent-green', border: 'border-accent-green/30', bg: 'bg-accent-green/5' },
  blue: { icon: 'text-accent-blue', border: 'border-accent-blue/30', bg: 'bg-accent-blue/5' },
}

export function Metrics() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900/30 to-primary-950 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 container-width"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="blue" size="md" className="mb-4">Metrics</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Impact & <span className="text-gradient">Results</span>
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Measurable outcomes from cloud infrastructure and DevSecOps implementations.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 h-full group hover:border-accent-cyan/30 transition-all duration-300 border ${colorMap[metric.color].border}`}
                glass
                hover={true}
              >
                <div className={`w-12 h-12 rounded-xl ${colorMap[metric.color].bg} border ${colorMap[metric.color].border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <metric.icon className={colorMap[metric.color].icon} size={24} />
                </div>

                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">{metric.label}</h3>
                <p className="text-primary-400 text-sm">{metric.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
