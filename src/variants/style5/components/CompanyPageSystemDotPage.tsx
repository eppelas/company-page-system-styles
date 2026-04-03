import React from 'react';

const DotContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-[1400px] mx-auto px-6 md:px-12 ${className}`}>{children}</div>
);

const DotButton = ({ children, href }: { children: React.ReactNode; href?: string }) => (
  <a
    href={href ?? '#system'}
    className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-bold transition-transform active:scale-95 bg-[#111111] text-[#5465FF] hover:bg-[#222]"
  >
    {children}
  </a>
);

const Diagram = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full max-w-4xl opacity-90">
    <g stroke="#111111" strokeWidth="2" fill="none">
      <circle cx="400" cy="225" r="150" />
      <circle cx="400" cy="225" r="100" />
      <circle cx="400" cy="225" r="50" />
      <line x1="400" y1="75" x2="400" y2="375" />
      <line x1="250" y1="225" x2="550" y2="225" />
      <line x1="294" y1="119" x2="506" y2="331" />
      <line x1="506" y1="119" x2="294" y2="331" />
    </g>
    <g fill="#111111">
      <circle cx="400" cy="75" r="8" />
      <circle cx="400" cy="375" r="8" />
      <circle cx="250" cy="225" r="8" />
      <circle cx="550" cy="225" r="8" />
      <circle cx="506" cy="331" r="12" />
    </g>
  </svg>
);

export default function CompanyPageSystemDotPage() {
  return (
    <div className="min-h-screen bg-[#F3F2EC] text-[#111111] selection:bg-[#111111] selection:text-[#F3F2EC]">
      <header className="fixed top-0 left-0 right-0 z-50 py-6">
        <DotContainer className="flex items-start justify-between gap-6">
          <a href="#top" className="flex flex-col leading-[0.85] font-bold text-2xl tracking-tighter uppercase">
            <span>Page</span>
            <span>System</span>
            <span>Lab</span>
          </a>
          <nav className="hidden md:flex items-center gap-2 bg-[#111111] p-1.5 rounded-full">
            {['System', 'Blocks', 'CMS', 'Analytics'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-5 py-2 rounded-full text-sm font-bold text-[#5465FF] hover:bg-[#5465FF] hover:text-[#111111] transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <DotButton href="#contact">Open brief</DotButton>
        </DotContainer>
      </header>

      <section id="top" className="pt-32 pb-12 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <DotContainer className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              PAGE<br />SYSTEM<br />LAB.
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#111111] flex items-center justify-center">
                <div className="w-4 h-4 bg-[#111111] rounded-full animate-pulse" />
              </div>
              <p className="font-bold max-w-[220px] leading-tight">
                A company page factory built from one design language and many reusable blocks.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 aspect-square md:aspect-[16/9] flex items-center justify-center">
            <Diagram />
          </div>
        </DotContainer>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#111111]" />
          <div className="w-20 h-1 bg-[#111111]" />
          <div className="w-6 h-6 rounded-full bg-[#111111]" />
        </div>
      </section>

      <section id="system" className="py-24 bg-[#5465FF]">
        <DotContainer>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">System map:</h2>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                ['Input', 'Brand brief / markdown / market request'],
                ['Core', 'Design system + Astra rules + CMS blocks'],
                ['Output', 'New landings for segments, offers, geos'],
                ['Editor', 'Non-technical manager with visual control'],
                ['Iteration', 'Analytics agent suggests reorder and tests'],
                ['Result', 'One style, many pages, lower production drag'],
              ].map(([label, value]) => (
                <div key={label}>
                  <h3 className="text-xl font-bold mb-2 opacity-80">{label}</h3>
                  <p className="text-3xl font-bold tracking-tight">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </DotContainer>
      </section>

      <section id="blocks" className="py-24">
        <DotContainer className="grid md:grid-cols-3 gap-6">
          {[
            'Design the flagship page once and split it into reusable sections.',
            'Store the sections in CMS so sales and ops can assemble new variations.',
            'Use prompts or markdown to generate page specs instead of redrawing each screen.',
          ].map((copy, index) => (
            <article key={copy} className="rounded-[40px] border-2 border-[#111111] p-8">
              <div className="text-xs font-bold mb-6">0{index + 1}</div>
              <p className="text-2xl font-bold leading-tight">{copy}</p>
            </article>
          ))}
        </DotContainer>
      </section>

      <section id="contact" className="py-20 border-t border-[#111111]/10">
        <DotContainer className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] mb-3">Style 5 / Dot Signal</div>
            <p className="max-w-2xl text-lg font-bold leading-relaxed">
              This version keeps the circular geometry, compact pills and poster-like information blocks, but turns the story into a landing for a reusable company page system.
            </p>
          </div>
          <DotButton href="mailto:alex@aimindset.org?subject=Dot%20Signal%20System">Start discussion</DotButton>
        </DotContainer>
      </section>
    </div>
  );
}
