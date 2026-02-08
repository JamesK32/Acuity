"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Privacy & Security",
    questions: [
      {
        q: "Is Acuity FERPA compliant?",
        a: "Yes. Acuity is fully FERPA compliant. We do not access, store, or transmit any student content, messages, photos, or personal data. We only track whether a student has tapped in and which apps are blocked during class time.",
      },
      {
        q: "What data does Acuity collect?",
        a: "Acuity collects minimal data: student name/ID (provided by the school), tap-in timestamps, and app blocking status. We never access the content of any apps, messages, or personal files on student devices.",
      },
      {
        q: "Where is the data stored?",
        a: "All data is stored on secure, encrypted servers in the United States. Schools retain full ownership of their data and can request deletion at any time.",
      },
    ],
  },
  {
    category: "Technical Requirements",
    questions: [
      {
        q: "Does Acuity work on both iOS and Android?",
        a: "Yes. Acuity works on iOS 14+ and Android 10+. The vast majority of student devices are compatible.",
      },
      {
        q: "Do students need to install an app?",
        a: "Yes, students install the Acuity app on their personal devices. The app is lightweight and uses minimal battery. Parents/guardians can also be notified when their child taps in.",
      },
      {
        q: "What hardware does the school need?",
        a: "Each classroom needs one Acuity NFC device, which we provide as part of the pilot program. It's a small, wall-mounted device that requires no wiring—just a battery that lasts 12+ months.",
      },
      {
        q: "What happens if a student doesn't have a smartphone?",
        a: "Students without smartphones are automatically marked as compliant. Acuity is designed to manage devices that could be distracting, not to penalize students who don't have them.",
      },
    ],
  },
  {
    category: "How It Works",
    questions: [
      {
        q: "Which apps get blocked?",
        a: "Schools can customize the block list. By default, Acuity blocks social media (TikTok, Instagram, Snapchat), games, and streaming apps. Educational apps and communication tools can be whitelisted.",
      },
      {
        q: "Can students bypass the blocking?",
        a: "Acuity uses multiple layers of enforcement that make bypassing extremely difficult. We also provide teachers with real-time visibility, so any attempts are immediately visible on the dashboard.",
      },
      {
        q: "What happens when class ends?",
        a: "Apps automatically unblock when the scheduled class period ends. Students can also tap out if they leave class early (with teacher approval visible on the dashboard).",
      },
      {
        q: "What if a student forgets to tap in?",
        a: "Teachers see a real-time dashboard showing who has and hasn't tapped in. A visual indicator at the classroom door also shows tap-in status. Students who forget are gently reminded.",
      },
    ],
  },
  {
    category: "Implementation",
    questions: [
      {
        q: "How long does implementation take?",
        a: "Most schools are up and running within 2 weeks. This includes device installation, student onboarding, and teacher training. We provide hands-on support throughout.",
      },
      {
        q: "What training do teachers need?",
        a: "Teachers need about 15 minutes of training to use the dashboard. There's nothing to configure day-to-day—Acuity runs automatically based on class schedules.",
      },
      {
        q: "How does the pilot program work?",
        a: "Pilot schools receive full access to Acuity at no cost for one semester. This includes hardware, onboarding, support, and training. We're looking for schools ready to start within 30 days.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-black transition-colors mb-4 inline-block"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-neutral-600">
            Everything you need to know about implementing Acuity at your school.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm font-semibold text-black tracking-wide uppercase mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, index) => {
                  const id = `${section.category}-${index}`;
                  const isOpen = openItems.has(id);
                  return (
                    <div
                      key={id}
                      className="border border-neutral-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
                      >
                        <span className="font-medium text-black pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 text-neutral-600 leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-neutral-50 rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-black mb-2">
            Still have questions?
          </h3>
          <p className="text-neutral-600 mb-6">
            We'd love to hear from you. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@acuity.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
