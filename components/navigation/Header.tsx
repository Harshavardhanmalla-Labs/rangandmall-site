'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AppLauncher from './AppLauncher'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl"
    >
      <div className="container-custom flex items-center justify-between h-20">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:shadow-xl group-hover:shadow-blue-600/30 transition-all">
              <span className="text-white font-bold text-lg">R&M</span>
            </div>
          </div>
          <div>
            <div className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Rang & Mall
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link 
            href="/ventures" 
            className="text-slate-600 hover:text-slate-900 transition-colors relative group"
          >
            Ventures
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all" />
          </Link>
          <Link 
            href="/governance" 
            className="text-slate-600 hover:text-slate-900 transition-colors relative group"
          >
            Governance
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all" />
          </Link>
          <Link 
            href="/careers" 
            className="text-slate-600 hover:text-slate-900 transition-colors relative group"
          >
            Careers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all" />
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/workspace"
            className="hidden md:block px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20"
          >
            Workspace
          </Link>
          <AppLauncher />
        </div>
      </div>
    </motion.header>
  )
}
