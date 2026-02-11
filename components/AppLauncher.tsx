"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  LayoutGrid,
  Home,
  Building2,
  Hammer,
  Utensils,
  Folder,
  FileText,
  MessageSquare,
  Layers,
  Flame,
} from "lucide-react";

/*
  =============================================
  RANG & MALL — GLOBAL APP LAUNCHER
  =============================================
*/

const apps = [
  {
    name: "Dwell USA",
    icon: Home,
    href: "https://isdwell.com",
  },
  {
    name: "Dwell India",
    icon: Building2,
    href: "https://isdwell.in",
  },
  {
    name: "Builder Studio",
    icon: Hammer,
    href: "https://builderstudio.freedomlabs.in",
  },
  {
    name: "Gulgul",
    icon: Utensils,
    href: "https://gulgul.org",
  },
  {
    name: "FreedomLabs Forge",
    icon: Flame,
    href: "https://forge.freedomlabs.in",
  },
  {
    name: "FL Docs",
    icon: FileText,
    href: "https://docs.freedomlabs.in",
  },
  {
    name: "WeChat",
    icon: MessageSquare,
    href: "https://chat.freedomlabs.in",
  },
  {
    name: "Workspace",
    icon: Folder,
    href: "/workspace",
  },
];

export default function AppLauncher() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // ESC closes
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Outside click closes
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed top-6 left-6 z-50
                   w-12 h-12
                   rounded-2xl
                   bg-white/10 backdrop-blur
                   border border-white/10
                   flex items-center justify-center
                   hover:bg-white/20
                   transition"
      >
        <LayoutGrid size={20} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Panel */}
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 left-6 z-50
                         w-[360px]
                         p-8
                         rounded-3xl
                         bg-white/5
                         backdrop-blur-2xl
                         border border-white/10
                         shadow-2xl"
            >
              <div className="grid grid-cols-3 gap-8">
                {apps.map((app) => {
                  const Icon = app.icon;
                  return (
                    <a
                      key={app.name}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center text-center"
                      onClick={() => setOpen(false)}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="w-14 h-14 rounded-2xl
                                   bg-white/10
                                   flex items-center justify-center
                                   group-hover:bg-white/20
                                   transition"
                      >
                        <Icon size={20} />
                      </motion.div>

                      <span className="mt-3 text-xs text-[#9AA4BF]">
                        {app.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
