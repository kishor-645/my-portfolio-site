'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Github, Linkedin, Mail, Send, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    await fetch('https://formsubmit.co/ajax/kishorvaishanav645@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData,
    })
    setSubmitted(true)
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/kishor-645', color: 'hover:text-white hover:border-primary-500' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kishor-vaishnav-8b4545242', color: 'hover:text-accent-blue hover:border-accent-blue/30' },
    { icon: Mail, label: 'Email', href: 'mailto:kishorvaishanav645@gmail.com', color: 'hover:text-accent-cyan hover:border-accent-cyan/30' },
  ]

  return (
    <section id="contact" className="section-padding relative">
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
          <Badge variant="cyan" size="md" className="mb-4">Contact</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss cloud infrastructure? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8" glass>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-green/20 border border-accent-green/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-accent-green" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-primary-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form action="https://formsubmit.co/ajax/kishorvaishanav645@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Portfolio Message" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-primary-800/50 border border-primary-700 text-white placeholder-primary-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-primary-800/50 border border-primary-700 text-white placeholder-primary-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-primary-800/50 border border-primary-700 text-white placeholder-primary-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    glow="cyan"
                  >
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send size={18} />
                    </span>
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick Info */}
            <Card className="p-6" glass>
              <h3 className="text-lg font-heading font-bold text-white mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                    <Mail className="text-accent-cyan" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-primary-500 uppercase tracking-wider">Email</p>
                    <a href="mailto:kishorvaishanav645@gmail.com" className="text-primary-300 hover:text-accent-cyan transition-colors">
                      kishorvaishanav645@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center">
                    <MapPin className="text-accent-purple" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-primary-500 uppercase tracking-wider">Location</p>
                    <p className="text-primary-300">Gujarat, India (Remote)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-green/10 border border-accent-green/30 flex items-center justify-center">
                    <Clock className="text-accent-green" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-primary-500 uppercase tracking-wider">Response Time</p>
                    <p className="text-primary-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6" glass>
              <h3 className="text-lg font-heading font-bold text-white mb-6">Connect Online</h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg glass border border-primary-700 transition-all ${social.color}`}
                  >
                    <social.icon size={20} className="text-primary-400" />
                    <span className="text-primary-300">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 border border-accent-green/30" glass>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent-green animate-pulse" />
                <span className="text-white font-medium">Available for opportunities</span>
              </div>
              <p className="text-primary-400 text-sm mt-2">
                Open to discussing DevSecOps, Cloud Architecture, and MLOps roles.
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
