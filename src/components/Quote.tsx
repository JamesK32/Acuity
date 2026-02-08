"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Quote() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="w-full max-w-4xl mx-auto px-4 py-24 md:py-32">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Quote with Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-2 md:gap-4"
        >
          <blockquote className="text-2xl md:text-3xl text-neutral-600 font-light italic leading-relaxed">
            "Attention is the rarest and purest form of generosity."
          </blockquote>
          <cite className="text-sm text-neutral-400 not-italic whitespace-nowrap">
            — Simone Weil
          </cite>
        </motion.div>

        {/* Reclaim Attention */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-black tracking-tight mt-4"
        >
          Reclaim Attention.
        </motion.p>
      </div>
    </section>
  );
}
