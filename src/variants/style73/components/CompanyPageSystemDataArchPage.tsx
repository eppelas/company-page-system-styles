import React from 'react';
import { aiMindsetCase, coreIdeas, deliverySteps, offers } from '../../../content/companySystemContent';

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

        <section className="px-6 py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid gap-4 md:grid-cols-2">
            {deliverySteps.map((item) => (
              <article key={item.step} className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <div className="flex items-baseline gap-3 text-white/55">
                  <span className="italic text-lg">{item.step}</span>
                  <span className="h-[1px] flex-grow bg-white/20" />
                </div>
                <h3 className="mt-4 text-2xl font-light text-white">{item.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/45">Offer matrix</div>
              <h2 className="mt-4 text-5xl leading-[0.88] tracking-tight font-light">
                Pricing, proof, and a clear promise inside the system itself.
              </h2>
              <div className="mt-8 grid gap-3">
                {coreIdeas.map((item) => (
                  <div key={item} className="rounded-full border border-white/10 px-4 py-3 text-sm text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {offers.map((offer) => (
                <article key={offer.name} className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <h3 className="text-2xl font-light">{offer.name}</h3>
                    <div className="font-mono text-xs uppercase tracking-widest text-white/45">{offer.price}</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{offer.outcome}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {offer.bullets.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/55">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/45">worked with</div>
              <h2 className="mt-4 text-4xl font-light italic">{aiMindsetCase.name}</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/72">{aiMindsetCase.summary}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {aiMindsetCase.metrics.map((item) => (
                <div key={item} className="rounded-[28px] border border-white/10 bg-white/[0.02] px-4 py-5 text-sm text-white/84">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
