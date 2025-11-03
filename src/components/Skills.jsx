import React from 'react';
import { Cpu, Bot, CircuitBoard, Zap, Gauge, Workflow } from 'lucide-react';

const skills = [
  { name: 'Arduino', level: 92, icon: CircuitBoard },
  { name: 'Python', level: 90, icon: Cpu },
  { name: 'AI / ML', level: 88, icon: Bot },
  { name: 'Automation', level: 86, icon: Workflow },
  { name: 'Electronics', level: 89, icon: Zap },
  { name: 'Supercomputers', level: 80, icon: Gauge },
  { name: 'N8N', level: 84, icon: Workflow },
  { name: 'Hardware', level: 87, icon: CircuitBoard },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0d12] py-24 text-white">
      <div className="absolute inset-0 -z-0 opacity-60" aria-hidden>
        <div className="h-full w-full" style={{
          background:
            'radial-gradient(600px 280px at 15% 20%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(600px 280px at 85% 80%, rgba(16,185,129,0.12), transparent 60%)',
        }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills & Technologies</h2>
          <p className="mt-3 text-zinc-300">A precise blend of electronics, software, and intelligent automation.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, level, icon: Icon }) => (
            <div key={name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition">
              <div className="mb-4 inline-flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500/30 to-emerald-400/30 p-2 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="text-base font-medium">{name}</h3>
              </div>

              <div className="relative h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500"
                  style={{ width: `${level}%` }}
                />
                <span className="pointer-events-none absolute -top-6 right-0 text-xs text-zinc-400">{level}%</span>
              </div>

              <div className="mt-4 text-xs text-zinc-400">Operational excellence with a focus on reliability and performance.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
