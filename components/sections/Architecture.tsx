'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import {
  Cloud,
  Shield,
  Database,
  Globe,
  Lock,
  Activity,
  ArrowRight,
  Layers,
  Server,
  Network,
  CheckCircle2,
} from 'lucide-react'

const projects = [
  {
    id: 'prdr',
    title: 'Multi-Region PR/DR Architecture',
    subtitle: 'Enterprise-grade disaster recovery with geo-replication',
    icon: Globe,
    color: 'cyan' as const,
    description: 'A comprehensive multi-region architecture ensuring 99.99% uptime with automatic failover, geo-replicated databases, and centralized security.',
    features: [
      'Automatic failover with less than 30 second RTO',
      'Geo-replicated PostgreSQL with read replicas',
      'Azure Firewall with IDPS and TLS inspection',
      'Web Application Firewall protection',
      'DDoS protection at network edge',
      'CMK encryption via Key Vault',
      'Multi-region CI/CD deployment pipelines',
    ],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps Pipeline',
    subtitle: 'End-to-end secure CI/CD with automated scanning',
    icon: Shield,
    color: 'purple' as const,
    description: 'A fully automated DevSecOps pipeline integrating security at every stage - from code commit to production deployment.',
    features: [
      'Infrastructure as Code with Terraform',
      'Automated security scanning (Trivy, Gitleaks)',
      'SAST/DAST integration via SonarQube',
      'Container image signing and verification',
      'Secrets management with HashiCorp Vault',
      'Policy enforcement with OPA',
      'Continuous monitoring and alerting',
    ],
  },
  {
    id: 'observability',
    title: 'Observability Stack',
    subtitle: 'Full-stack visibility into distributed systems',
    icon: Activity,
    color: 'green' as const,
    description: 'A comprehensive observability stack combining metrics, logs, and traces for complete visibility into cloud-native applications.',
    features: [
      'Metrics collection with Prometheus',
      'Log aggregation with Grafana Loki',
      'Distributed tracing with Jaeger',
      'OpenTelemetry instrumentation',
      'Custom dashboards for business KPIs',
      'SLO/SLA monitoring and alerting',
      'Anomaly detection and root cause analysis',
    ],
  },
]

const iconMap: Record<string, any> = {
  Globe,
  Shield,
  Activity,
  Cloud,
  Database,
  Lock,
  Layers,
  Server,
  Network,
}

const colorMap: Record<string, string> = {
  cyan: 'text-accent-cyan',
  purple: 'text-accent-purple',
  green: 'text-accent-green',
  blue: 'text-accent-blue',
}

export function Architecture() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section id="architecture" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900/80 to-primary-950 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 container-width"
      >
        <div className="text-center mb-16">
          <Badge variant="green" size="md" className="mb-4">Architecture Showcase</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Real-World <span className="text-gradient">Cloud Architectures</span>
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Deep dives into production-grade architectures I have designed and implemented for enterprise clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon.name] || Globe
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeProject === index
                    ? 'glass-strong border border-accent-cyan/30 text-white'
                    : 'glass border border-primary-700 text-primary-400 hover:text-white hover:border-primary-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  <IconComponent size={18} />
                  {project.title.split(' ')[0]}
                </span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="p-8 mb-8" glass>
              <div className="flex items-center gap-3 mb-6">
                <Globe size={28} className="text-accent-cyan" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-primary-400 text-sm">{projects[activeProject].subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['Azure AKS', 'Azure Firewall', 'PostgreSQL', 'Key Vault', 'Front Door', 'WAF', 'Traffic Mgr', 'Terraform'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-3 rounded-lg bg-primary-800/50 border border-primary-700 text-center text-sm text-primary-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6" glass>
                <h4 className="text-lg font-heading font-bold text-white mb-4">Overview</h4>
                <p className="text-primary-300 leading-relaxed">
                  {projects[activeProject].description}
                </p>
              </Card>

              <Card className="p-6" glass>
                <h4 className="text-lg font-heading font-bold text-white mb-4">Key Capabilities</h4>
                <ul className="space-y-3">
                  {projects[activeProject].features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-primary-300"
                    >
                      <CheckCircle2 size={18} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
