"use client";

import { motion } from "framer-motion";
import AppDock from "@/components/marketing/AppDock";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Left Dock - Fixed to edge */}
      <AppDock />

      {/* Main Content - abc.xyz style */}
      <main className="min-h-screen flex items-center justify-center pl-24 md:pl-32">
        <div className="max-w-2xl px-8">
          {/* Alphabet-style minimal content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main heading - abc.xyz style */}
            <h1 className="text-[#5f6368] text-base font-normal leading-relaxed mb-8">
              Rang & Mall is a collection of companies. The largest of which is
              FreedomLabs. We are not intending to become one company, but
              rather a family of companies.
            </h1>

            {/* Description paragraphs */}
            <div className="space-y-6 text-[#5f6368] text-base leading-relaxed">
              <p>
                Rang & Mall is mostly a collection of companies. The largest of
                which, of course, is Dwell. This newer structure will allow us
                to keep tremendous focus on the extraordinary opportunities we
                have inside of our core businesses.
              </p>

              <p>
                A key part of this is Sasi, who is running Rang & Mall as CEO
                while continuing as CEO of FreedomLabs. Sasi has been
                instrumental in building and leading our ventures. We are
                excited about the opportunities ahead.
              </p>

              <p>
                Rang & Mall is about businesses prospering through strong
                leaders and independence. In general, our model is to have a
                strong CEO who runs each business, with the parent company
                allocating resources and managing the overall portfolio.
              </p>

              <p>
                We've long believed that over time companies tend to get
                comfortable doing the same thing, just making incremental
                changes. But in the technology industry, where revolutionary
                ideas drive the next big growth areas, you need to be a bit
                uncomfortable to stay relevant.
              </p>

              <p>
                Our company is operating well today, but we think we can make it
                cleaner and more accountable. So we are creating a new company,
                called Rang & Mall. We liked the name Rang & Mall because it
                means order and structure, which is what we're all about.
              </p>

              {/* Footer links - abc.xyz style */}
              <div className="pt-8 mt-12 border-t border-gray-200">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a
                    href="/ventures"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Our Companies
                  </a>
                  <a
                    href="/governance"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Governance
                  </a>
                  <a href="/careers" className="text-[#1a73e8] hover:underline">
                    Careers
                  </a>
                  <a
                    href="/workspace"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Workspace
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
