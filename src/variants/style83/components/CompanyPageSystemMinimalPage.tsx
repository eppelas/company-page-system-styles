import React, { useState } from 'react';

const GridOverlay = ({ active }: { active: boolean }) =>
  active ? (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="w-full h-full relative max-w-[1920px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10" />
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-black/10" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-black/10" />
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-black/10" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-black/10" />
      </div>
    </div>
  ) : null;

export default function CompanyPageSystemMinimalPage() {
  const [gridActive, setGridActive] = useState(true);

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-black selection:bg-black selection:text-white relative">
      <GridOverlay active={gridActive} />
      <div className="fixed top-0 left-0 w-full md:w-1/4 h-auto md:h-screen p-6 md:p-12 z-50 flex flex-row md:flex-col justify-between border-b md:border-b-0 md:border-r border-black/10 bg-[#F2F2F2]/90 backdrop-blur-sm">
        <div>
          <div className="text-sm font-semibold tracking-tight">PAGE SYSTEM</div>
          <div className="hidden md:block text-xs text-black/60 mt-4 max-w-[150px]">Style 83 / minimal system principles</div>
        </div>
        <button onClick={() => setGridActive((value) => !value)} className="text-xs uppercase tracking-wide hover:opacity-70 transition-opacity">
          {gridActive ? 'Hide grid' : 'Show grid'}
        </button>
      </div>

      <div className="md:ml-[25%] w-full md:w-[75%] relative z-10">
        <section className="min-h-[80vh] flex flex-col justify-center p-6 md:p-24 border-b border-black/10 pt-32 md:pt-24">
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-medium tracking-tighter mb-12">
            PAGE
            <br />
            PRINCIPLES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-sm leading-relaxed max-w-xs">
              A stripped system view of the idea: build one brand language, one reusable block library and one editable operational layer for many company pages.
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <div className="w-12 h-12 bg-black rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        <div className="py-12 border-b border-black/10 overflow-hidden bg-white px-6 md:px-12">
          <div className="whitespace-nowrap flex gap-8 items-center">
            {['CONTEXT', 'CONSTRAINTS', 'BLOCKS', 'CMS', 'AGENT LOOP'].map((item, index) => (
              <React.Fragment key={item}>
                <span className="text-4xl md:text-6xl font-medium tracking-tighter">{item}</span>
                {index < 4 && <span className="text-4xl md:text-6xl font-medium tracking-tighter text-black/20">///</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <section className="min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              ['01', 'Style', 'Pick the visual logic and set the rules.'],
              ['02', 'Reference', 'Design the flagship page that carries the tone.'],
              ['03', 'Blocks', 'Cut reusable sections and push them into CMS.'],
              ['04', 'Iteration', 'Generate and refine new pages from briefs and data.'],
            ].map(([id, name, desc], index) => (
              <div key={id} className={`aspect-square border-b border-black/10 p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 group ${index % 2 === 0 ? 'md:border-r' : ''}`}>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono">({id})</span>
                  <div className="w-4 h-4 rounded-full border border-current opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">{name}</h3>
                  <p className="text-xs opacity-60 max-w-[180px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
