"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function Issues() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <span className="text-base font-semibold text-black tracking-wide uppercase">
          The Problem
        </span>
      </motion.div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <StatCard
          stat="97%"
          description="of teachers say phones negatively impact student learning"
          source="Common Sense Media"
        />
        <StatCard
          stat="23 min"
          description="average time to refocus after a single phone notification"
          source="UC Irvine Study"
        />
        <StatCard
          stat="67%"
          description="of teachers report phones are a major classroom distraction"
          source="Pew Research"
        />
      </ul>
    </section>
  );
}

interface StatCardProps {
  stat: string;
  description: string;
  source: string;
}

const StatCard = ({ stat, description, source }: StatCardProps) => {
  return (
    <li className="min-h-[12rem] list-none">
      <div className="relative h-full rounded-2xl border border-neutral-200 p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden rounded-xl bg-white p-6 text-center">
          <p className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            {stat}
          </p>
          <p className="text-base text-neutral-600 leading-relaxed">
            {description}
          </p>
          <p className="text-xs text-neutral-400">{source}</p>
        </div>
      </div>
    </li>
  );
};
