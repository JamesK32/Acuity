"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Smartphone, Lock, LayoutDashboard } from "lucide-react";

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: <Smartphone className="w-6 h-6" />,
      title: "Student Taps In",
      description:
        "Students tap their phone on the NFC device when entering class. Takes less than a second.",
    },
    {
      number: "02",
      icon: <Lock className="w-6 h-6" />,
      title: "Apps Lock Automatically",
      description:
        "Distracting apps like TikTok, Instagram, and games are blocked for the duration of class.",
    },
    {
      number: "03",
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Teachers See Everything",
      description:
        "Real-time dashboard shows attendance, compliance, and which students have tapped in.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24"
    >
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <span className="text-base font-semibold text-black tracking-wide uppercase">
          How It Works
        </span>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.15,
            }}
          >
            <div className="relative h-full rounded-2xl border border-neutral-200 p-2">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl bg-white p-6">
                {/* Step Number */}
                <span className="text-5xl font-bold text-black">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-black">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-black">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
