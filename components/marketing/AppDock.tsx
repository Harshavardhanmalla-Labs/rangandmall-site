"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  Network,
  Utensils,
  Home,
  Users,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const apps = [
  {
    name: "Home",
    icon: Home,
    href: "/",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Dwell",
    icon: Building2,
    href: "/dwell/usa",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Builder Studio",
    icon: Wrench,
    href: "/builderstudio",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Gulgul",
    icon: Utensils,
    href: "/ventures",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "FreedomLabs",
    icon: Network,
    href: "/freedomlabs",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Careers",
    icon: Users,
    href: "/careers",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Workspace",
    icon: Briefcase,
    href: "/workspace",
    color: "from-yellow-500 to-amber-600",
  },
];

export default function AppDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Dock - Far Left Edge */}
      <div className="hidden md:block fixed left-0 top-0 bottom-0 z-50 w-20">
        <div className="h-full flex items-center justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl border-r border-gray-200 shadow-2xl h-full flex items-center"
          >
            <div className="flex flex-col items-center gap-2 py-8 px-3">
              {/* Logo at top */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">RM</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-gray-300 mb-2" />

              {/* App Icons */}
              {apps.map((app, index) => {
                const Icon = app.icon;
                const isActive = pathname === app.href;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.a
                    key={app.name}
                    href={app.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative group"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* App Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        app.color
                      } flex items-center justify-center shadow-md hover:shadow-xl transition-shadow relative overflow-hidden ${
                        isActive ? "ring-2 ring-blue-500 ring-offset-2" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white relative z-10" />

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -10,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-full ml-3 top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap"
                    >
                      <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl">
                        {app.name}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
                      </div>
                    </motion.div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Dock - Bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-gray-200 shadow-2xl"
      >
        <div className="flex items-center justify-around px-4 py-3 overflow-x-auto">
          {apps.map((app) => {
            const Icon = app.icon;
            const isActive = pathname === app.href;

            return (
              <motion.a
                key={app.name}
                href={app.href}
                whileTap={{ scale: 0.9 }}
                className="flex-shrink-0"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    app.color
                  } flex items-center justify-center shadow-md ${
                    isActive ? "ring-2 ring-blue-500 ring-offset-2" : ""
                  }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
