import { Hero } from "@/components/Hero";
import { Issues } from "@/components/Issues";
import { Quote } from "@/components/Quote";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Issues />
      <Quote />
      <HowItWorks />
      <About />
      <CTA />
    </main>
  );
}
