import React from 'react';
import { Briefcase, GraduationCap, Wrench, Shield, Sun, MonitorSmartphone, ShoppingCart, CircuitBoard, Linkedin, Mail, Phone } from 'lucide-react';

const experience = [
  { title: 'Computer & Hardware Technician', detail: 'Diagnostics, repair, and system optimization with a focus on reliability.' },
  { title: 'Artificial Intelligence Management', detail: 'Strategy, governance, and deployment of intelligent solutions.' },
  { title: 'Data Developer & Analyst', detail: 'ETL pipelines, analytics, and decision‑support dashboards.' },
];

const projects = [
  { title: 'Automatic Irrigation System (Solar Energy)', icon: Sun, note: 'Presented at Chongone Innovation Fair — energy‑aware automation.' },
  { title: 'Residential Alarm System', icon: Shield, note: 'Secure home monitoring with smart triggers and alerts.' },
  { title: 'AC Control with Time Circuit Breakers', icon: Wrench, note: 'Energy‑efficient climate control with timed logic.' },
  { title: 'Point of Sale + Meal Management', icon: ShoppingCart, note: 'Integrated POS with streamlined operations and reporting.' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full bg-[#0b0e14] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Experience */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-500/20 p-2 ring-1 ring-white/10">
                <Briefcase className="h-5 w-5 text-emerald-300" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                  <div className="font-medium text-white">{item.title}</div>
                  <div className="mt-1 text-sm text-zinc-300">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-500/20 p-2 ring-1 ring-white/10">
                <GraduationCap className="h-5 w-5 text-emerald-300" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Education</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <div className="font-medium">Electronic & Telecommunications Engineering</div>
              <div className="mt-1 text-sm text-zinc-300">In progress • Highlight: Top student in class 12 (17 points)</div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-indigo-500/20 p-2 ring-1 ring-white/10">
              <CircuitBoard className="h-5 w-5 text-emerald-300" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition">
                <div className="mb-3 inline-flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-indigo-500/30 to-emerald-400/30 p-2 ring-1 ring-white/10">
                    <p.icon className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div className="font-medium">{p.title}</div>
                </div>
                <div className="text-sm text-zinc-300">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.06] p-8 backdrop-blur">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
            <p className="mt-2 text-zinc-300">Let’s build something efficient, elegant, and future‑ready.</p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:bg-white/[0.08]">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:bg-white/[0.08]">
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
            <a href="mailto:contact@example.com" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:bg-white/[0.08]">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
