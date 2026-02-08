"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-xl text-black">Acuity</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              Automated phone-free classrooms for K-12 schools. Eliminate distractions with a tap.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#how-it-works" className="text-neutral-500 hover:text-black text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-500 hover:text-black text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#pilot" className="text-neutral-500 hover:text-black text-sm transition-colors">
                  Pilot Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@acuity.com" className="text-neutral-500 hover:text-black text-sm transition-colors">
                  hello@acuity.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/acuity" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black text-sm transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/acuity" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black text-sm transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Acuity. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-neutral-400 hover:text-black text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-black text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
