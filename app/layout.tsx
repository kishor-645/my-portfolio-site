import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kishor Vaishanav | Sr. Cloud DevSecOps Engineer',
  description: 'Senior Cloud DevSecOps Engineer specializing in Azure, AWS, Kubernetes, and enterprise-scale DevSecOps pipelines. Building secure, scalable, and observable cloud architectures.',
  keywords: ['DevSecOps', 'Cloud Architecture', 'Azure', 'AWS', 'Kubernetes', 'Terraform', 'MLOps', 'Observability'],
  authors: [{ name: 'Kishor Vaishanav' }],
  openGraph: {
    title: 'Kishor Vaishanav | Sr. Cloud DevSecOps Engineer',
    description: 'Building secure, scalable, multi-region cloud architectures',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
