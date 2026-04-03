import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const LinkItem = ({ text, note }: { text: string; note?: string }) => (
  <div className="group inline-block mr-4 mb-2">
    <span className="text-3xl md:text-5xl font-bold tracking-tight border-b-2 border-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
      {text}
    </span>
    {note && <span className="ml-2 text-sm font-mono uppercase opacity-50">({note})</span>}
    <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <ArrowUpRight size={24} />
    </span>
  </div>
);

export default function CompanyPageSystemExperimentalGridPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]" />

      <header className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-start text-[10px] md:text-xs font-mono uppercase tracking-tight z-50 mix-blend-multiply">
        <div className="max-w-[170px]">Page System Lab<br />Multi-market landing factory</div>
        <div className="text-center hidden md:block">Ver. 1.0 / Company page atlas</div>
        <div className="text-right max-w-[170px]">Design system / CMS / prompts / analytics</div>
      </header>

      <main className="relative z-10 pt-32 md:pt-48 px-4 md:px-12 max-w-[1600px] mx-auto pb-24">
        <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-24 md:mb-36 max-w-5xl">
          A company page system that turns one brand language into many launch-ready pages.
          <br className="hidden md:block" />
          <span className="border-b-4 border-black">Reusable sections</span>, editable flows and faster experiments.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-36">
          <div className="col-span-1 md:col-span-3 text-xl font-mono">index:</div>
          <div className="col-span-1 md:col-span-9 flex flex-col items-start space-y-4">
            {['brand logic', 'block library', 'cms operations', 'page generation', 'analytics loop'].map((item) => (
              <a key={item} href={`#${item.replace(/\s+/g, '-')}`} className="block text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] cursor-pointer group relative">
                <span className="relative z-10 border-b-4 border-black group-hover:border-transparent transition-colors duration-300">{item}</span>
                <span className="absolute left-0 top-0 text-transparent [-webkit-text-stroke:1px_black] translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                  {item}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="col-span-1 md:col-span-3 text-xl font-mono">links:</div>
          <div className="col-span-1 md:col-span-9">
            <div className="flex flex-wrap items-baseline leading-relaxed">
              <LinkItem text="system brief" />
              <span className="text-3xl md:text-5xl font-light mx-2">/</span>
              <LinkItem text="style routes" note="visual" />
              <span className="text-3xl md:text-5xl font-light mx-2">/</span>
              <LinkItem text="page factory" note="ops" />
              <span className="text-3xl md:text-5xl font-light mx-2">/</span>
              <LinkItem text="contact" note="mail" />
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black pt-8">
          {[
            ['brand logic', 'Research the company, generate style directions, choose a master tone.'],
            ['block library', 'Cut the flagship page into blocks that can survive across markets and offers.'],
            ['cms operations', 'Let a non-technical operator remix sections without touching Git or Figma.'],
            ['page generation', 'Use markdown and prompts to draft new page structures from the same system.'],
            ['analytics loop', 'Plug an agent into performance data to suggest tests and reorder sections.'],
            ['result', 'A page factory instead of one-off landing production.'],
          ].map(([title, copy]) => (
            <article key={title} id={title.replace(/\s+/g, '-')} className="border border-black p-6 md:p-8 min-h-[240px] flex flex-col justify-between bg-white/60">
              <div className="font-mono text-xs uppercase">{title}</div>
              <p className="text-2xl md:text-3xl font-medium leading-tight">{copy}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
