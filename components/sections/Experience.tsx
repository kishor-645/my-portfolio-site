'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react'

const experiences = [
  {
    company: 'PrometheanTech',
    role: 'Sr. Cloud DevSecOps Engineer',
    period: 'Jan 2024 - Present',
    location: 'Remote',
    type: 'Full-time',
    color: 'cyan' as const,
    highlights: [
      'Architected multi-region PR/DR Azure infrastructure achieving 99.99% uptime SLA',
      'Implemented Azure Firewall with IDPS, TLS inspection, WAF, and DDoS protection',
      'Built MLOps pipelines deploying ML models on AKS with GPU node pools',
      'Established comprehensive observability stack with Prometheus, Grafana, Loki, and Jaeger',
      'Developed Terraform modules for reusable, version-controlled infrastructure',
    ],
    technologies: ['Azure', 'Terraform', 'AKS', 'Azure DevOps', 'Security', 'MLOps'],
  },
  {
    company: 'Freelance',
    role: 'DevOps Engineer',
    period: '2022 - Dec 2023',
    location: 'Remote',
    type: 'Freelance',
    color: 'purple' as const,
    highlights: [
      'Designed and implemented CI/CD pipelines for multiple enterprise clients',
      'Built Kubernetes clusters on both Azure (AKS) and AWS (EKS)',
      'Developed infrastructure-as-code solutions using Terraform and Ansible',
      'Integrated security scanning (Trivy, SonarQube) into deployment workflows',
      'Created monitoring and alerting solutions using Grafana and Prometheus',
    ],
    technologies: ['Azure', 'AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins'],
  },
  {
    company: 'High Sky IT Solutions',
    role: 'Cloud Engineer',
    period: '2020 - 2022',
    location: 'Houston, TX',
    type: 'Full-time',
    color: 'green' as const,
    highlights: [
      'Migrated on-premises applications to Azure cloud infrastructure',
      'Implemented containerization strategy using Docker and Kubernetes',
      'Configured Azure Active Directory and identity management solutions',
      'Automated deployment processes reducing release time by 60%',
      'Managed backup and disaster recovery solutions for critical systems',
    ],
    technologies: ['Azure', 'Docker', 'Kubernetes', 'Active Directory', 'PowerShell'],
  },
  {
    company: 'IMSI Staffing',
    role: 'Junior Cloud Administrator',
    period: '2018 - 2020',
    location: 'Houston, TX',
    type: 'Full-time',
    color: 'blue' as const,
    highlights: [
      'Managed Azure virtual machines and storage accounts',
      'Supported Active Directory operations and user management',
      'Assisted in implementation of network security groups and firewalls',
      'Monitored system performance and generated reports',
      'Participated in on-call rotation for production support',
    ],
    technologies: ['Azure', 'Active Directory', 'Networking', 'Windows Server'],
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="experience" className="section-padding relative">
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
          <Badge variant="cyan" size="md" className="mb-4">Experience</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            A track record of building scalable, secure cloud infrastructure across multiple industries and technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-green transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent-cyan border-4 border-primary-950 transform -translate-x-[7px] md:-translate-x-[8px] z-10">
                  <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-50" />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card
                    className="p-6 group hover:border-accent-cyan/30 transition-all duration-300"
                    glass
                    hover={true}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent-cyan transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary-300 font-medium">{exp.company}</p>
                      </div>
                      <Badge variant={exp.color} size="md">{exp.type}</Badge>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-primary-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-primary-300">
                          <ArrowRight size={14} className={`text-accent-${exp.color} mt-0.5 flex-shrink-0`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-primary-800/50 text-xs text-primary-400 border border-primary-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
