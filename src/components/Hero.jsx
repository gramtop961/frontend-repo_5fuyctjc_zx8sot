import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Sparkles } from 'lucide-react';

const PHOTO_URL = 'https://images.unsplash.com/photo-1531938711145-9f5782a3fa3f?q=80&w=1200&auto=format&fit=crop';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0c10] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and glass overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
      <div className="absolute -inset-20 pointer-events-none" aria-hidden>
        <div className="h-full w-full" style={{
          background:
            'radial-gradient(800px 400px at 10% 10%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(700px 400px at 90% 20%, rgba(16,185,129,0.12), transparent 60%), radial-gradient(600px 300px at 50% 100%, rgba(56,189,248,0.12), transparent 60%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-24 pt-36 md:flex-row md:gap-16 md:pt-40">
        {/* Text */}
        <div className="z-10 w-full md:w-1/2">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            <span className="text-xs tracking-wide text-zinc-200">Futuristic • Minimal • Corporate</span>
          </div>

          <h1 className="text-balance font-semibold leading-tight tracking-tight text-white">
            <span className="text-3xl sm:text-4xl">Noé Joaquim Marrengula</span>
            <br />
            <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl">
              Engineering the future with smart, elegant solutions.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-zinc-300">
            Electronic and Telecommunications Engineer (in training) • Artificial Intelligence Manager • Creator of MarrengulaIT & Moz ElectronicHub. Specialist in Arduino, Python, automation, hardware, and supercomputers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cv"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/20 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 text-sm text-zinc-400">
            Presented an automatic solar-powered irrigation system at the Chongone Innovation Fair.
          </div>
        </div>

        {/* Photo */}
        <div className="z-10 w-full md:w-1/2">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur-lg">
            <div className="absolute inset-0 pointer-events-none rounded-3xl opacity-60" style={{
              background:
                'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(16,185,129,0.15))',
            }} />
            <img
              src={PHOTO_URL}
              alt="Professional portrait of Noé Joaquim Marrengula"
              className="relative h-full w-full rounded-2xl object-cover"
              loading="eager"
              fetchpriority="high"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
