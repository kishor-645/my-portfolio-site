'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

const skillCategories = [
  {
    title: 'Cloud',
    icon: '☁️',
    color: 'cyan' as const,
    skills: [
      { name: 'Azure', level: 95, isPrimary: true },
      { name: 'AWS', level: 85, isPrimary: false },
      { name: 'GCP', level: 60, isPrimary: false },
    ],
  },
  {
    title: 'DevOps',
    icon: '⚙️',
    color: 'purple' as const,
    skills: [
      { name: 'Azure DevOps', level: 95, isPrimary: true },
      { name: 'Jenkins', level: 85, isPrimary: false },
      { name: 'GitHub Actions', level: 90, isPrimary: false },
      { name: 'GitLab CI', level: 75, isPrimary: false },
    ],
  },
  {
    title: 'Containers',
    icon: '📦',
    color: 'green' as const,
    skills: [
      { name: 'Docker', level: 95, isPrimary: true },
      { name: 'Kubernetes (AKS)', level: 92, isPrimary: true },
      { name: 'Helm', level: 88, isPrimary: false },
      { name: 'Kustomize', level: 80, isPrimary: false },
    ],
  },
  {
    title: 'DevSecOps',
    icon: '🔐',
    color: 'red' as const,
    skills: [
      { name: 'Trivy', level: 90, isPrimary: false },
      { name: 'Gitleaks', level: 88, isPrimary: false },
      { name: 'Twistlock', level: 85, isPrimary: false },
      { name: 'Wazuh', level: 82, isPrimary: false },
      { name: 'Azure Sentinel', level: 88, isPrimary: false },
    ],
  },
  {
    title: 'Observability',
    icon: '📊',
    color: 'blue' as const,
    skills: [
      { name: 'Prometheus', level: 92, isPrimary: false },
      { name: 'Grafana', level: 95, isPrimary: false },
      { name: 'Loki', level: 88, isPrimary: false },
      { name: 'Jaeger', level: 85, isPrimary: false },
      { name: 'OpenTelemetry', level: 82, isPrimary: false },
      { name: 'SigNoz', level: 80, isPrimary: false },
    ],
  },
  {
    title: 'MLOps / AI',
    icon: '🤖',
    color: 'purple' as const,
    skills: [
      { name: 'Azure ML', level: 88, isPrimary: false },
      { name: 'Databricks', level: 82, isPrimary: false },
      { name: 'ADF Pipelines', level: 85, isPrimary: false },
      { name: 'AKS GPU Nodes', level: 80, isPrimary: false },
      { name: 'AI Agents', level: 78, isPrimary: false },
    ],
  },
]

const colorClasses: Record<string, { bar: string; glow: string }> = {
  cyan: { bar: 'bg-accent-cyan', glow: 'group-hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]' },
  purple: { bar: 'bg-accent-purple', glow: 'group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]' },
  green: { bar: 'bg-accent-green', glow: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' },
  blue: { bar: 'bg-accent-blue', glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
  red: { bar: 'bg-red-500', glow: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]' },
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" className="section-padding relative">
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
          <Badge variant="purple" size="md" className="mb-4">Skills</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and securing cloud-native applications at scale.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card
                className="p-6 h-full group cursor-default"
                glass
                hover={true}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-primary-300">{skill.name}</span>
                          {skill.isPrimary && (
                            <Badge variant={category.color} size="sm" className="text-[10px]">
                              Primary
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-primary-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-primary-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className={`h-full rounded-full ${colorClasses[category.color].bar} ${colorClasses[category.color].glow} transition-shadow`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-xl font-heading font-bold text-white text-center mb-8">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Terraform', 'Ansible', 'Vault', 'Git', 'Linux', 'Bash',
              'Python', 'Go', 'YAML', 'JSON', 'ARM Templates', 'Bicep',
              'PostgreSQL', 'Redis', 'MongoDB', 'CosmosDB', 'Blob Storage',
              'Azure Functions', 'Logic Apps', 'API Management', 'Front Door',
              'Traffic Manager', 'Application Gateway', 'Load Balancers'
            ].map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="px-4 py-2 rounded-lg glass text-sm text-primary-300 border border-primary-700 hover:border-accent-cyan/30 hover:text-white transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
