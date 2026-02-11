'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Target, Zap, Shield, Globe } from 'lucide-react'

const principles = [
  {
    icon: Target,
    title: 'Built for Long Horizons',
    description: 'We do not build tools for trends. We build systems designed to endure. Our ventures are engineered with operational clarity, disciplined architecture, and long-term governance.',
  },
  {
    icon: Zap,
    title: 'Infrastructure Mindset',
    description: 'Whether in proptech, engineering systems, or collaborative platforms, we approach software as infrastructure — not as disposable applications.',
  },
  {
    icon: Shield,
    title: 'Principled Execution',
    description: 'Every venture operates with clear ownership, transparent governance, and measurable accountability. We value substance over spectacle.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Our solutions are designed to work across markets, cultures, and regulatory environments, built with flexibility and scale in mind from day one.',
  },
]

export default function Philosophy() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent mb-6">
            Our Philosophy
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Guided by principles that prioritize lasting impact over short-term gains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl"
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {principle.description}
                </p>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl text-slate-200 mb-4">"</div>
            <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed mb-8">
              We build platforms that outlast trends, solve real problems, and create genuine value for the people who use them.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-slate-300" />
              <span className="text-sm font-medium text-slate-500">Rang & Mall Leadership</span>
              <div className="h-px w-12 bg-slate-300" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
