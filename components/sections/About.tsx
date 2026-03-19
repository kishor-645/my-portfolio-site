'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Shield, Globe, Cpu, BarChart3, Zap, Cloud } from 'lucide-react'

const highlights = [
  {
    icon: Shield,
    title: 'DevSecOps Excellence',
    description: 'Implementing Azure Firewall with IDPS + TLS inspection, WAF, and DDoS protection across multi-region deployments.',
    color: 'cyan',
  },
  {
    icon: Globe,
    title: 'Multi-Region Architecture',
    description: 'Building PR/DR architectures with geo-replication, achieving 99.99% uptime for enterprise workloads.',
    color: 'purple',
  },
  {
    icon: Cpu,
    title: 'MLOps & AI Workloads',
    description: 'Deployed ML models on AKS with GPU nodes, leveraging Azure ML and Databricks for scalable AI pipelines.',
    color: 'green',
  },
  {
    icon: BarChart3,
    title: 'Observability First',
    description: 'Prometheus, Grafana, Loki, Jaeger, OpenTelemetry - full-stack visibility into distributed systems.',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Infrastructure as Code',
    description: 'Terraform modules for Azure, AWS, and Kubernetes - repeatable, version-controlled infrastructure.',
    color: 'cyan',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Design',
    description: 'AKS, EKS, containerization, and orchestrated deployments for modern cloud-native applications.',
    color: 'purple',
  },
]

const colorMap: Record<string, string> = {
  cyan: 'text-accent-cyan',
  purple: 'text-accent-purple',
  green: 'text-accent-green',
  blue: 'text-accent-blue',
}

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="about" className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 container-width"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="cyan" size="md" className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Engineering <span className="text-gradient">Secure Cloud</span> Solutions
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            With years of experience designing and implementing enterprise-grade cloud infrastructure,
            I help organizations build secure, scalable, and observable systems that stand the test of time.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card glass className="p-8 h-full">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                My Journey in Cloud Engineering
              </h3>
              <div className="space-y-4 text-primary-300 leading-relaxed">
                <p>
                  I specialize in designing and implementing <span className="text-accent-cyan font-medium">secure, scalable Azure infrastructure</span> using Terraform and AKS. My work spans the full cloud-native stack - from infrastructure as code to production-ready Kubernetes clusters.
                </p>
                <p>
                  At <span className="text-white font-medium">PrometheanTech</span>, I've architected multi-region PR/DR solutions with geo-replication, implementing critical security controls including Azure Firewall with IDPS, TLS inspection, WAF, and DDoS protection.
                </p>
                <p>
                  Beyond traditional DevOps, I've led <span className="text-accent-purple font-medium">MLOps initiatives</span> - deploying ML models on AKS with GPU nodes, building comprehensive observability stacks with Prometheus, Grafana, Loki, Jaeger, and OpenTelemetry.
                </p>
                <p>
                  My philosophy is simple: <span className="text-accent-green font-medium">security and observability aren't afterthoughts</span> - they're baked into every layer of the architecture from day one.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card
                  glow={item.color as 'cyan' | 'purple' | 'green'}
                  className="p-5 h-full cursor-default group"
                  hover={true}
                >
                  <item.icon
                    className={`${colorMap[item.color]} w-8 h-8 mb-3 group-hover:scale-110 transition-transform`}
                  />
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-primary-400 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Delivered' },
            { value: 'Multi', label: 'Region Deployments' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-primary-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
