'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import VenturesGrid from '@/components/marketing/VenturesGrid'

export default function Ventures() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="text-sm font-medium text-slate-700">Portfolio Overview</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Our Ventures
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Each venture represents our commitment to building sustainable, scalable platforms 
              that solve real-world challenges across diverse industries.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Ventures Grid */}
      <VenturesGrid />

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interested in Joining Our Ecosystem?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We're always looking for talented individuals and strategic partners 
              to help us build the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/careers"
                className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-0.5"
              >
                View Careers
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-slate-800 text-white rounded-xl font-medium border-2 border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
