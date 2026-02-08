"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      fireConfetti();
    }, 1500);
  };

  const fireConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    }> = [];
    const colors = ["#000000", "#10b981", "#fbbf24", "#f472b6", "#6366f1"];

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const createParticle = () => {
      return {
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 2) * 10,
        life: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
      };
    };

    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5;
        p.life -= 2;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life / 100);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  // Distracting app icons with actual logos
  const distractingApps = [
    { name: "TikTok", src: "/apps/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.webp", size: 60 },
    { name: "Instagram", src: "/apps/Instagram_icon.png", size: 56 },
    { name: "Snapchat", src: "/apps/snapchat-logo_628407-1682.avif", size: 54 },
    { name: "YouTube", src: "/apps/1200x630wa.jpg", size: 52 },
    { name: "Twitter", src: "/apps/twitter-new-logo-x-icon-design_1017-45424.avif", size: 48 },
    { name: "Discord", src: "/apps/discord-logo-icon-app-transparent-background-premium-social-media-design-for-digital-download-free-png.webp", size: 52 },
    { name: "Reddit", src: "/apps/reddit_logo_icon_189239.webp", size: 50 },
  ];

  return (
    <section id="pilot" className="w-full bg-white">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 45s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes success-pulse {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-success-pulse {
          animation: success-pulse 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      <div className="relative w-full min-h-[80vh] overflow-hidden flex items-center justify-center">
        {/* Floating Apps Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Outer ring - spins clockwise */}
          <div className="absolute inset-0 animate-spin-slow">
            {distractingApps.slice(0, 4).map((app, i) => {
              const angle = (i * 90) * (Math.PI / 180);
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={app.name}
                  className="absolute top-1/2 left-1/2 overflow-hidden shadow-lg opacity-90"
                  style={{
                    width: app.size,
                    height: app.size,
                    borderRadius: "22%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <img
                    src={app.src}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Inner ring - spins counter-clockwise */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            {distractingApps.slice(4).map((app, i) => {
              const angle = ((i * 90) + 45) * (Math.PI / 180);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={app.name}
                  className="absolute top-1/2 left-1/2 overflow-hidden shadow-lg opacity-80"
                  style={{
                    width: app.size,
                    height: app.size,
                    borderRadius: "22%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <img
                    src={app.src}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center gap-6 px-4">
          {/* Acuity Logo */}
          <div className="w-20 h-20 rounded-2xl shadow-xl animate-float overflow-hidden">
            <Image src="/logo.png" alt="Acuity" width={80} height={80} className="w-full h-full" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-black text-center tracking-tight">
            Eliminate distraction.
          </h2>

          <p className="text-lg text-neutral-500 text-center max-w-md">
            Join schools across the country bringing focus back to the classroom.
          </p>

          {/* Email Form */}
          <div className="w-full max-w-md mt-4 h-[60px] relative">
            <canvas
              ref={canvasRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-50"
            />

            {/* Success State */}
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-full bg-emerald-500 transition-all duration-500 ${
                status === "success"
                  ? "opacity-100 scale-100 animate-success-pulse"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>You're on the list!</span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={`relative w-full h-full transition-all duration-500 ${
                status === "success" ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
              }`}
            >
              <input
                type="email"
                required
                placeholder="Enter your school email"
                value={email}
                disabled={status === "loading"}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[60px] pl-6 pr-[180px] rounded-full outline-none border border-neutral-200 bg-white text-black placeholder-neutral-400 focus:border-neutral-400 transition-colors disabled:opacity-70"
              />

              <div className="absolute top-[6px] right-[6px] bottom-[6px]">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-full px-6 rounded-full font-medium text-white bg-black hover:bg-neutral-800 transition-all active:scale-95 disabled:cursor-wait flex items-center justify-center min-w-[160px]"
                >
                  {status === "loading" ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    "Apply for Pilot"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
