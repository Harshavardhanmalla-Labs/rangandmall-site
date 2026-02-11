'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { ArrowUpRight, Building2, Wrench, Network, Utensils } from 'lucide-react'

const ventures = [
  {
    name: 'Dwell USA',
    description: 'Workflow-first rent payments and resident experience platform',
    href: '/dwell/usa',
    icon: Building2,
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['PropTech', 'USA']
  },
  {
    name: 'Dwell India',
    description: 'AI-powered property intelligence and verification platform',
    href: '/dwell/india',
    icon: Building2,
    gradient: 'from-purple-500 to-pink-500',
    tags: ['PropTech', 'India']
  },
  {
    name: 'Builder Studio',
    description: 'Contractor and project operations management system',
    href: '/builderstudio',
    icon: Wrench,
    gradient: 'from-orange-500 to-red-500',
    tags: ['Construction', 'SaaS']
  },
  {
    name: 'Gulgul',
    description: 'Ethical food & logistics ecosystem',
    href: '/ventures',
    icon: Utensils,
    gradient: 'from-emerald-500 to-teal-500',
    tags: ['Food Tech', 'Logistics']
  },
  {
    name: 'FreedomLabs',
    description: 'Engineering infrastructure and internal tooling platform',
    href: '/freedomlabs',
    icon: Network,
    gradient: 'from-slate-600 to-slate-800',
    tags: ['Platform', 'Internal']
  },
]

export default function VenturesGrid() {
  return (
    <section className="relative py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent mb-4">
            Our Ventures
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Each venture is designed to solve real-world problems with innovative technology and thoughtful execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => {
            const Icon = venture.icon
            return (
              <motion.a
                key={venture.name}
                href={venture.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 overflow-hidden transition-all hover:shadow-2xl hover:shadow-slate-200/60 hover:border-slate-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${venture.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Icon with gradient */}
                <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${venture.gradient} mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {venture.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {venture.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {venture.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700 group-hover:bg-slate-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/ventures"
            className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all group"
          >
            <span>View all ventures</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
