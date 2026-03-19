'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:kishor.vaishanav@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-primary-800 bg-primary-950/50">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">Kishor Vaishanav</h3>
            <p className="text-primary-400 text-sm leading-relaxed">
              Senior Cloud DevSecOps Engineer building secure, scalable, and observable cloud architectures at enterprise scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-400 hover:text-accent-cyan transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-800/50 border border-primary-700 flex items-center justify-center text-primary-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-500 text-sm">
            © {new Date().getFullYear()} Kishor Vaishanav. All rights reserved.
          </p>
          <p className="text-primary-500 text-sm">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
