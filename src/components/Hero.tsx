"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-6 px-4 pb-16 md:pb-24">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight max-w-4xl text-center">
              Focus starts with a tap.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-500 max-w-xl text-center">
              Eliminate phone distractions automatically. No pouches. No hassle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#pilot"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-base font-medium rounded-full hover:bg-neutral-800 transition-colors"
              >
                Apply for Free Pilot Program
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-300 text-black text-base font-medium rounded-full hover:bg-neutral-50 transition-colors gap-2"
              >
                See How It Works
              </a>
            </div>
          </div>
        }
      >
        {/* Video/Demo Placeholder */}
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl">
          {/* Play button overlay */}
          <button className="w-20 h-20 bg-black rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors group">
            <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
          </button>
          <p className="mt-4 text-neutral-500 text-sm font-medium">
            Watch Demo Video
          </p>

          {/* Helper text for development */}
          <p className="mt-8 text-neutral-400 text-xs">
            Demo video placeholder - replace with actual video
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
}
