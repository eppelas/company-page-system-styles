import React from 'react';

const Ring = ({ radius, text, className = '' }: { radius: number; text: string; className?: string }) => (
  <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
    <div className="rounded-full border border-white/20" style={{ width: radius * 2, height: radius * 2 }} />
    <div className="absolute text-[10px] tracking-[0.3em] uppercase opacity-60">{text}</div>
  </div>
);

export default function CompanyPageSystemObysDarkPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] selection:bg-white selection:text-black relative overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <div className="italic text-xl flex items-center gap-2">
          <span>page system</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
          <a href="#concept" className="hover:line-through">Concept</a>
          <a href="#results" className="hover:line-through">Results</a>
        </div>
        <div className="text-xs uppercase tracking-widest">Style 100</div>
      </nav>

      <section className="h-[120vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
          <div className="relative w-[800px] h-[800px] flex items-center justify-center scale-[0.6] md:scale-100">
            <Ring radius={380} text="PAGE SYSTEM • COMPANY LANDINGS • CMS • ANALYTICS • " />
            <Ring radius={300} text="STYLE • BLOCKS • PROMPTS • CMS • " className="animate-spin [animation-duration:35s]" />
            <Ring radius={220} text="RESEARCH • SYSTEM • LAUNCH • " className="animate-spin [animation-duration:25s] [animation-direction:reverse]" />
            <Ring radius={140} text="BRAND • BLOCKS • TESTS • " className="animate-spin [animation-duration:18s]" />
          </div>
        </div>
        <div className="relative z-10 text-center mix-blend-difference">
          <h1 className="text-6xl md:text-9xl italic mb-6">PAGES</h1>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-light">Company page system</p>
          <p className="mt-4 text-xs opacity-60">Reusable style, reusable modules, reusable launches.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-32 relative z-20">
        <section id="concept" className="mb-40 pt-20">
          <div className="flex items-baseline gap-4 mb-12 border-b border-white/20 pb-4">
            <span className="text-xs tracking-widest uppercase opacity-60">Chapter (I)</span>
            <h2 className="text-4xl italic">The Concept</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-xl md:text-2xl font-light leading-relaxed">
              <p className="mb-8">
                <span className="italic text-white">Page system</span> means a company stops ordering isolated landing pages and starts operating a reusable publication machine.
              </p>
              <p className="text-white/60 text-lg">Design once. Slice into modules. Publish many versions. Let analytics shape the next wave.</p>
            </div>
            <div className="space-y-8 text-sm text-white/50">
              {[
                'Research the brand and choose a visual route.',
                'Build the flagship page and turn it into a section library.',
                'Store the blocks in CMS for visual editing by operations.',
                'Generate new pages from briefs, markdown and performance signals.',
              ].map((line, index) => (
                <div key={line} className="flex items-start gap-4 border-t border-white/10 pt-4">
                  <span className="text-white">{`0${index + 1}`}</span>
                  <p>{line}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
