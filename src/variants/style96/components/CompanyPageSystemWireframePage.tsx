import React from 'react';
import { Menu } from 'lucide-react';
import { aiMindsetCase, coreIdeas, deliverySteps, offers } from '../../../content/companySystemContent';

const Cube = ({ size = 100 }: { size?: number }) => (
  <div className="relative" style={{ width: size, height: size, transformStyle: 'preserve-3d', animation: 'rotate 20s infinite linear' }}>
    {[
      'rotateY(0deg)',
      'rotateY(180deg)',
      'rotateY(90deg)',
      'rotateY(-90deg)',
      'rotateX(90deg)',
      'rotateX(-90deg)',
    ].map((transform, index) => (
      <div
        key={index}
        className="absolute border border-white/50 bg-white/5"
        style={{ width: size, height: size, transform: `${transform} translateZ(${size / 2}px)` }}
      />
    ))}
  </div>
);

export default function CompanyPageSystemWireframePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black relative overflow-x-hidden">
      <style>{`@keyframes rotate { from { transform: rotateX(0deg) rotateY(0deg);} to { transform: rotateX(360deg) rotateY(360deg);} }`}</style>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-start mix-blend-difference">
        <div className="text-[10px] tracking-widest uppercase font-medium">Chapter (I)</div>
        <div className="italic text-xl absolute left-1/2 -translate-x-1/2">wireframe</div>
        <Menu className="w-6 h-6" />
      </header>

      <section className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute top-[15%] left-[10%] opacity-80">
          <Cube size={80} />
        </div>
        <div className="absolute bottom-[20%] right-[15%] opacity-80">
          <Cube size={120} />
        </div>
        <div className="relative z-10 w-full px-4 md:px-12">
          <div className="flex justify-between items-end border-b border-white/20 pb-2 mb-2">
            <span className="text-[10px] uppercase tracking-widest">Company page</span>
            <span className="text-[10px] uppercase tracking-widest">System</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-[22vw] leading-[0.8] font-medium tracking-tighter mix-blend-difference">PAGE</h1>
            <div className="hidden md:block w-px h-32 bg-white/20 mx-8" />
            <h1 className="text-[22vw] leading-[0.8] font-medium tracking-tighter mix-blend-difference text-right md:text-left">WIRE</h1>
          </div>
          <h1 className="text-[22vw] leading-[0.8] font-medium tracking-tighter mix-blend-difference text-center md:text-right">SYSTEM</h1>
        </div>
      </section>

      <section className="min-h-screen py-24 px-6 md:px-12 relative">
        <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-12">
          <div className="text-xs tracking-widest uppercase opacity-60">Chapter (II)</div>
          <div className="italic text-2xl">The Structure</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="pt-24">
            <p className="text-2xl md:text-4xl leading-tight font-light text-white/80">
              This landing system starts with a design system, passes through CMS blocks and ends with generated pages for each company context.
            </p>
          </div>
          <div className="relative h-[50vh] flex items-center justify-center border border-white/10">
            <Cube size={150} />
            <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest">Figure 1.2 — Page factory</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-24 px-6 md:px-12 relative border-t border-white/10">
        <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-12">
          <div className="text-xs tracking-widest uppercase opacity-60">Chapter (III)</div>
          <div className="italic text-2xl">The Offer</div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {offers.map((offer) => (
            <article key={offer.name} className="min-h-[280px] border border-white/10 bg-white/[0.02] p-6">
              <div className="text-[10px] uppercase tracking-widest text-white/45">{offer.price}</div>
              <h3 className="mt-4 text-2xl tracking-tight">{offer.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{offer.outcome}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {offer.bullets.map((item) => (
                  <span key={item} className="border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="min-h-screen py-24 px-6 md:px-12 relative border-t border-white/10">
        <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-12">
          <div className="text-xs tracking-widest uppercase opacity-60">Chapter (IV)</div>
          <div className="italic text-2xl">The Operating Loop</div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {deliverySteps.map((item) => (
            <article key={item.step} className="border border-white/10 p-6">
              <div className="text-[10px] uppercase tracking-widest text-white/45">{item.step}</div>
              <h3 className="mt-4 text-3xl font-light">{item.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-white text-black">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-black/45">Proof case</div>
            <h2 className="mt-4 text-6xl leading-[0.88] tracking-tighter">{aiMindsetCase.name}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/70">{aiMindsetCase.summary}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {aiMindsetCase.metrics.concat(coreIdeas.slice(0, 2)).map((item) => (
              <div key={item} className="border border-black/10 px-4 py-4 text-sm leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
