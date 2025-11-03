import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';

function Navbar() {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#showcase', label: 'Experience & Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0e14]/70 px-4 py-3 backdrop-blur-md">
          <a href="#home" className="font-semibold tracking-tight text-white">Marrengula</a>
          <nav className="hidden gap-6 text-sm text-zinc-200 md:flex">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="rounded-md px-2 py-1 transition hover:text-white hover:opacity-90">
                {it.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur transition hover:bg-white/20">Contact</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090c10] py-10 text-center text-zinc-400">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm">© {new Date().getFullYear()} Noé Joaquim Marrengula — MarrengulaIT • Moz ElectronicHub</p>
        <p className="mt-2 text-xs">Futuristic • Minimal • Corporate</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#090c10] antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
