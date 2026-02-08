"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full max-w-4xl mx-auto px-4 py-24 md:py-32"
    >
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-12"
      >
        <span className="text-base font-semibold text-black tracking-wide uppercase">
          Our Mission
        </span>
      </motion.div>

      <div className="space-y-12">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
            We believe every student deserves a classroom free from digital distraction.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Teachers shouldn't be phone police. With 34 states mandating phone-free classrooms, schools need a solution that actually works—without the pouches, bins, and constant enforcement.
          </p>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="border-l-2 border-black pl-6"
        >
          <p className="text-lg text-neutral-600 leading-relaxed">
            Acuity works with phones, not against them. A simple tap when entering class, and distracting apps go silent—automatically. No collection. No confrontation. Just focus.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
        >
          <div>
            <h3 className="font-semibold text-black mb-2">Built for Schools</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Designed with input from teachers and administrators who live this problem every day.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Privacy First</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              FERPA compliant. We don't track content, messages, or personal data—just focus time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Effortless Adoption</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              No new hardware for students. Works with the phones they already have.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
