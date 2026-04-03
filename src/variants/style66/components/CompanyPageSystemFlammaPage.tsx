import React from 'react';

const GridItem = ({ number, title, subtitle, className = '' }: { number: string; title: string; subtitle: string; className?: string }) => (
  <div className={`border-b border-black p-6 md:p-8 flex flex-col justify-between min-h-[280px] hover:bg-black hover:text-[#FF3300] transition-colors group ${className}`}>
    <span className="text-sm font-medium opacity-60 group-hover:opacity-100">{number}</span>
    <div>
      <h3 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tight mb-4 break-words">{title}</h3>
      <p className="text-lg md:text-xl font-medium leading-tight max-w-xs">{subtitle}</p>
    </div>
  </div>
);

export default function CompanyPageSystemFlammaPage() {
  return (
    <div className="min-h-screen bg-[#FF3300] text-black selection:bg-black selection:text-[#FF3300]">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#FF3300] border-b border-black flex justify-between items-stretch h-12 md:h-14 text-xs md:text-sm font-medium uppercase tracking-wide">
        <div className="flex items-center px-4 md:px-6 border-r border-black">Style 66</div>
        <div className="flex-1 flex">
          {['System', 'Blocks', 'CMS'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center px-6 border-r border-black hover:bg-black hover:text-[#FF3300] transition-colors hidden md:flex">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 px-6 border-l border-black">
          <span>PAGE SYSTEM FACTORY</span>
        </div>
      </header>

      <div className="pt-12 md:pt-14">
        <div className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#FF3300] border-b border-black">
          <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid slice">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-black" style={{ fontSize: 300, fontWeight: 900, letterSpacing: '-0.05em' }}>
              PAGES
            </text>
          </svg>
          <div className="absolute inset-0 pointer-events-none flex justify-between items-end px-[10%]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-[10vw] bg-black rounded-b-full h-[20%]" />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12 border-b border-black">
        <p className="text-4xl md:text-6xl font-bold uppercase leading-[0.9] tracking-tight max-w-5xl">
          A bright operational slab for companies that need many branded pages without rebuilding every screen from zero.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-black">
        <GridItem number="01" title="STYLE" subtitle="Choose the visual direction once and define the rules." className="border-r border-black" />
        <GridItem number="02" title="BLOCKS" subtitle="Split the master page into reusable editorial modules." className="border-r border-black" />
        <GridItem number="03" title="CMS" subtitle="Keep content and sections editable by a non-technical team." />
        <GridItem number="04" title="PROMPTS" subtitle="Generate new pages from briefs, markdown and structured intent." className="border-r border-black md:border-b-0" />
        <div className="col-span-1 md:col-span-2 bg-[#4433FF] text-white p-8 flex flex-col justify-center items-center text-center border-b border-black md:border-b-0">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">NEXT STEP: ANALYTICS AGENT</h3>
          <p className="text-xl md:text-2xl opacity-80">Suggest reorder, redesign and test hypotheses.</p>
        </div>
      </div>
    </div>
  );
}
