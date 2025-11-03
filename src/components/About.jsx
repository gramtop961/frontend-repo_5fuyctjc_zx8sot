import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0e14] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-4 text-pretty text-zinc-300">
            I build technology that quietly works wonders. Since the age of 13, I've been driven by a deep curiosity for how things work — dismantling, understanding, and reimagining them into smarter systems. Today, I transform that passion into elegant engineering and intelligent automation that helps people and businesses do more with less.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Precision & Clarity',
              body: 'Minimalist thinking applied to complex problems. Clean architectures, reliable systems, and measurable outcomes.',
            },
            {
              title: 'Intelligent Automation',
              body: 'From Arduino to AI workflows, I design automations that are robust, adaptive, and energy‑conscious.',
            },
            {
              title: 'Human‑Centered Engineering',
              body: 'Technology is only as good as the experience it creates. I design with empathy and long‑term impact in mind.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
