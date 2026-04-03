import React from 'react';

const LevelItem = ({ level, title, range, description }: { level: string; title: string; range: string; description: string }) => (
  <div className="flex flex-col gap-2 group">
    <div className="flex items-baseline gap-3 text-white/80">
      <span className="italic text-lg">{level}</span>
      <span className="h-[1px] flex-grow bg-white/50" />
      <span className="font-mono text-xs">{range}</span>
    </div>
    <h3 className="text-xl font-light text-white">{title}</h3>
    <p className="text-sm text-white max-w-xs leading-relaxed">{description}</p>
  </div>
);

export default function CompanyPageSystemDataArchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-50 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 flex items-end justify-center translate-y-[40vh]">
          <div className="w-[150vw] h-[150vw] rounded-full border border-white/20" />
        </div>
      </div>

      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-mono text-xs uppercase tracking-widest flex items-center gap-2">
          <span>Page System Data Arch</span>
        </div>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#hero" className="hover:underline">System</a>
          <a href="#levels" className="hover:underline">Levels</a>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
          <div className="max-w-4xl mx-auto">
            <div className="italic text-2xl md:text-3xl mb-6">Company Page System</div>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-light tracking-tight mb-12">
              DATA <span className="italic font-normal">ARCH</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 font-mono text-xs uppercase tracking-widest text-white/90">
              <span>Design rules</span>
              <span className="w-1 h-1 bg-white rounded-full" />
              <span>Block library</span>
              <span className="w-1 h-1 bg-white rounded-full" />
              <span>Analytics loop</span>
            </div>
          </div>
        </section>

        <section className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative">
          <div className="max-w-2xl text-center md:text-left md:absolute md:left-[20%] z-10">
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
              Not just a landing.
              <br />
              <span className="italic text-white/65">An architecture for many landings.</span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-[90%] md:max-w-lg">
              The page becomes a system: one flagship composition, reusable modules, editable CMS structures and AI-generated market-specific variations.
            </p>
          </div>
        </section>

        <section id="levels" className="min-h-screen flex items-center px-6 py-24">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mt-24">
            <LevelItem level="Level 1" title="Research" range="Brief" description="Define brand voice, market, audience and design constraints." />
            <LevelItem level="Level 2" title="Reference" range="Master page" description="Design a flagship page that proves the visual and structural logic." />
            <LevelItem level="Level 3" title="Blocks" range="CMS" description="Slice reusable sections and expose them to content operations." />
            <LevelItem level="Level 4" title="Iteration" range="Agent loop" description="Use performance data to propose new section order and hypotheses." />
          </div>
        </section>
      </main>
    </div>
  );
}
