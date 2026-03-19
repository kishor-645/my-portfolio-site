'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import {
  Globe,
  Shield,
  Brain,
  Activity,
  ArrowRight,
  Github,
  ExternalLink,
} from 'lucide-react'

const projects = [
  {
    id: 'prdr-architecture',
    title: 'Multi-Region PR/DR Architecture',
    subtitle: 'Enterprise disaster recovery solution',
    icon: Globe,
    color: 'cyan' as const,
    problem: 'Enterprise client needed 99.99% uptime with automatic failover across geographic regions, including geo-replicated databases and centralized security.',
    solution: 'Designed multi-region Azure architecture with Front Door, Traffic Manager, AKS clusters, PostgreSQL geo-replication, and Azure Firewall with IDPS/WAF.',
    impact: 'Achieved 99.99% uptime SLA with < 30 second RTO and RPO. Reduced manual intervention by 95% through automated failover.',
    tools: ['Azure', 'Terraform', 'AKS', 'PostgreSQL', 'Front Door', 'Azure Firewall', 'WAF'],
    github: '#',
    live: '#',
  },
  {
    id: 'devsecops-pipeline',
    title: 'DevSecOps Pipeline',
    subtitle: 'End-to-end secure CI/CD',
    icon: Shield,
    color: 'purple' as const,
    problem: 'Development teams needed faster releases while maintaining security compliance and reducing vulnerabilities in production.',
    solution: 'Built automated pipeline with Trivy scanning, SonarQube analysis, container signing, secrets management, and policy enforcement.',
    impact: 'Reduced deployment time from 4 hours to 15 minutes. Caught 100% of critical vulnerabilities before production.',
    tools: ['Azure DevOps', 'Docker', 'Trivy', 'SonarQube', 'Vault', 'OPA', 'Kubernetes'],
    github: '#',
    live: '#',
  },
  {
    id: 'mlops-aks',
    title: 'MLOps on AKS',
    subtitle: 'ML model deployment at scale',
    icon: Brain,
    color: 'green' as const,
    problem: 'Data science team needed to deploy and scale ML models in production with GPU acceleration and monitoring.',
    solution: 'Built MLOps pipeline on AKS with GPU node pools, Azure ML integration, model versioning, and real-time inference endpoints.',
    impact: 'Reduced model deployment time from weeks to hours. Enabled real-time inference with 3x cost reduction via auto-scaling.',
    tools: ['Azure ML', 'AKS', 'GPU Nodes', 'Databricks', 'ADF', 'MLflow'],
    github: '#',
    live: '#',
  },
  {
    id: 'observability-stack',
    title: 'Observability Stack',
    subtitle: 'Full-stack visibility platform',
    icon: Activity,
    color: 'blue' as const,
    problem: 'Distributed microservices required comprehensive monitoring, logging, and tracing to maintain performance and debug issues.',
    solution: 'Implemented Prometheus for metrics, Grafana Loki for logs, Jaeger for tracing, and OpenTelemetry for instrumentation.',
    impact: 'Reduced mean time to resolution (MTTR) by 70%. Enabled proactive alerting before issues impact users.',
    tools: ['Prometheus', 'Grafana', 'Loki', 'Jaeger', 'OpenTelemetry', 'AlertManager', 'SigNoz'],
    github: '#',
    live: '#',
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900/50 to-primary-950 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 container-width"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="purple" size="md" className="mb-4">Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Real-world solutions addressing complex cloud infrastructure challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full group flex flex-col hover:border-accent-cyan/30 transition-all duration-300"
                glass
                hover={true}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-accent-${project.color}/10 border border-accent-${project.color}/30 flex items-center justify-center`}>
                      <project.icon className={`text-accent-${project.color}`} size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary-400 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 mb-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary-500 mb-1">Problem</h4>
                    <p className="text-sm text-primary-300">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary-500 mb-1">Solution</h4>
                    <p className="text-sm text-primary-300">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary-500 mb-1">Impact</h4>
                    <p className="text-sm text-accent-green">{project.impact}</p>
                  </div>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-primary-800/50 text-xs text-primary-400 border border-primary-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-primary-800">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-primary-400 hover:text-accent-cyan transition-colors"
                  >
                    <Github size={16} />
                    Source
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-primary-400 hover:text-accent-cyan transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
