import React from 'react';
import { aiMindsetCase, differentiation, offers } from '../content/companySystemContent';

const Crosshair = ({ className = "" }: { className?: string }) => (
  <div className={`absolute text-white/50 text-xs font-mono pointer-events-none ${className}`}>+</div>
);

const GlitchLogo = () => (
  <div className="relative font-black text-4xl md:text-6xl tracking-tighter uppercase italic select-none">
    <span className="relative z-10">PAGE_SYSTEM</span>
    <span className="absolute top-0 left-1 -z-10 text-red-600 opacity-70 mix-blend-screen animate-pulse">PAGE_SYSTEM</span>
    <span className="absolute top-0 -left-1 -z-10 text-blue-600 opacity-70 mix-blend-screen animate-pulse animation-delay-75">PAGE_SYSTEM</span>
  </div>
);

const Sticker = () => (
  <div className="absolute -top-12 -right-12 md:-right-24 rotate-12 z-20 pointer-events-none">
    <svg width="200" height="100" viewBox="0 0 200 100" className="drop-shadow-xl">
      <path d="M10,50 Q50,5 90,50 T180,50" fill="none" stroke="white" strokeWidth="2" />
      <rect x="20" y="20" width="160" height="60" fill="white" transform="rotate(-5 100 50)" />
      <text x="100" y="55" fontFamily="monospace" fontSize="20" fontWeight="bold" fill="black" textAnchor="middle" transform="rotate(-5 100 50)">
        STYLE 23
      </text>
      <text x="100" y="75" fontFamily="monospace" fontSize="12" fill="black" textAnchor="middle" transform="rotate(-5 100 50)">
        PAGE FACTORY
      </text>
    </svg>
  </div>
);

const Barcode = () => (
  <div className="flex h-12 md:h-16 w-full justify-end gap-[2px] overflow-hidden">
    {Array.from({ length: 40 }).map((_, i) => (
      <div key={i} className={`bg-white h-full ${Math.random() > 0.5 ? 'w-1' : 'w-3'}`} />
    ))}
  </div>
);

const NavItem = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div className={`font-mono text-xs uppercase tracking-widest cursor-pointer hover:text-white transition-colors ${active ? 'bg-white text-black px-2' : 'text-gray-400'}`}>
    {label}
  </div>
);

const PanelRow = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-[#111] border border-[#333] p-4 flex justify-between items-start gap-4 hover:border-white transition-colors">
    <span className="text-gray-600 font-mono text-sm uppercase">{label}</span>
    <span className="text-white font-mono text-sm uppercase text-right">{value}</span>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="md:col-span-3 font-mono text-xs text-gray-500 uppercase flex items-start gap-2">
    <span>&gt;</span> {children}
  </div>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#222] h-20 flex items-center px-4 md:px-8 justify-between">
    <GlitchLogo />

    <div className="hidden md:flex items-center gap-12">
      <div className="text-[10px] font-mono text-gray-500 max-w-[260px] leading-tight">
        SYSTEM FOR <span className="text-white">MULTI-PAGE BRANDS</span>. DESIGN SYSTEMS, BLOCKS, CMS AND AUTO-GENERATED LANDINGS.
      </div>

      <nav className="flex gap-12">
        <NavItem label="SYSTEM" active />
        <NavItem label="BLOCKS" />
        <NavItem label="CMS" />
        <NavItem label="ANALYTICS" />
      </nav>
    </div>

    <Crosshair className="top-0 left-1/4" />
    <Crosshair className="top-0 left-1/2" />
    <Crosshair className="top-0 left-3/4" />
  </header>
);

const Content = () => (
  <div className="min-h-screen pt-32 pb-12 px-4 md:px-12 grid md:grid-cols-12 gap-8 relative">
    <div className="md:col-span-7 flex flex-col gap-24 relative">
      <div className="grid md:grid-cols-12 gap-4">
        <SectionLabel>ABOUT</SectionLabel>
        <div className="md:col-span-9 font-mono text-sm md:text-base text-gray-300 leading-relaxed uppercase">
          <p className="mb-8">
            This is a landing system for companies that need many pages fast:
            different languages, audiences, offers, markets and tests, all kept inside one visual logic.
          </p>
          <div className="space-y-1 text-gray-500 text-xs">
            <div>01 &gt; RESEARCH BRAND / TONE / VISUAL FEELING</div>
            <div>02 &gt; GENERATE STYLE DIRECTIONS / PICK ONE</div>
            <div>03 &gt; BUILD REUSABLE PAGE BLOCKS / PUSH TO CMS</div>
            <div>04 &gt; GENERATE NEW PAGES FROM SPECS / MARKDOWN / PROMPTS</div>
          </div>
          <div className="mt-8">
            <a href="#contact" className="text-white hover:underline">→ SEE SYSTEM SPEC</a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        <SectionLabel>PIPELINE</SectionLabel>
        <div className="md:col-span-9 grid grid-cols-2 gap-8 font-mono text-xs md:text-sm text-gray-300 uppercase">
          <ul className="space-y-2">
            <li className="text-white font-bold mb-4">/// DESIGN LAYER</li>
            <li>Brand analysis</li>
            <li>Vibe-coded style routes</li>
            <li>Atomic design system</li>
            <li>Reference page</li>
            <li>Reusable sections</li>
          </ul>
          <ul className="space-y-2">
            <li className="text-white font-bold mb-4">/// DELIVERY LAYER</li>
            <li>Astra holds design rules</li>
            <li>CMS stores blocks</li>
            <li>LLM writes page specs</li>
            <li>Manager edits visually</li>
            <li>Analytics feeds next iteration</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        <SectionLabel>OUTCOME</SectionLabel>
        <div className="md:col-span-9 font-mono text-sm text-white uppercase">
          <div className="mb-4">ONE STYLE / MANY LANDINGS / LOW FRICTION</div>
          <div className="text-gray-500 text-xs leading-relaxed">
            Companies stop rebuilding each page from zero. They get a page factory:
            same system, different market versions, faster tests, less handoff loss between design and frontend.
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        <SectionLabel>WHY US</SectionLabel>
        <div className="md:col-span-9 grid gap-3">
          {differentiation.map((item, index) => (
            <div key={item} className="border border-[#333] bg-[#111] p-4 font-mono text-xs uppercase leading-relaxed text-gray-300">
              <span className="mr-3 text-gray-600">0{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        <SectionLabel>PROOF</SectionLabel>
        <div className="md:col-span-9 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-[#333] bg-[#111] p-5 font-mono text-xs uppercase text-gray-300">
            <div className="text-gray-600">WORKED WITH</div>
            <div className="mt-3 text-lg text-white">{aiMindsetCase.name}</div>
            <div className="mt-3 leading-relaxed normal-case text-sm text-gray-400">{aiMindsetCase.summary}</div>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {aiMindsetCase.metrics.map((item) => (
              <div key={item} className="border border-[#333] bg-[#111] p-4 font-mono text-xs uppercase text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="md:col-span-5 relative mt-12 md:mt-0" id="contact">
      <div className="sticky top-32">
        <div className="relative bg-black border border-[#222] p-1">
          <Sticker />

          <div className="space-y-2">
            <PanelRow label="CLIENT TYPE" value="MULTI-MARKET / MULTI-LANGUAGE / CONTENT HEAVY" />
            <PanelRow label="INPUT" value="PROMPT / BRIEF / MARKDOWN / CONTENT OPS" />
            <PanelRow label="CORE STACK" value="DESIGN SYSTEM / ASTRA / CMS / LLM" />
            <PanelRow label="EDITOR" value="NON-TECH MANAGER + TECH OPERATOR" />
            <PanelRow label="NEXT LEVEL" value="ANALYTICS AGENT / REORDER / REDESIGN / AB TESTS" />

            <div className="bg-[#111] border border-[#333] p-4 hover:border-white transition-colors h-32">
              <div className="text-gray-600 font-mono text-sm uppercase mb-3">VALUE</div>
              <div className="text-white font-mono text-sm uppercase leading-relaxed">
                Faster page launches. Lower design cost. Shared brand logic. Direct editing without GitHub.
              </div>
            </div>

            {offers.map((offer) => (
              <div key={offer.name} className="bg-[#111] border border-[#333] p-4 hover:border-white transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-white font-mono text-sm uppercase">{offer.name}</div>
                  <div className="text-gray-600 font-mono text-[10px] uppercase text-right">{offer.price}</div>
                </div>
                <div className="mt-3 text-gray-400 font-mono text-xs leading-relaxed normal-case">{offer.outcome}</div>
              </div>
            ))}

            <a
              href="mailto:alex@aimindset.org?subject=Company%20Page%20System"
              className="block w-full bg-[#333] hover:bg-white hover:text-black text-white font-mono text-sm uppercase py-4 transition-colors font-bold tracking-widest text-center"
            >
              OPEN SYSTEM DISCUSSION
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="border-t border-[#222] bg-black text-white py-8 px-4 md:px-12 font-mono text-[10px] uppercase">
    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
      <div className="max-w-md space-y-1 text-gray-500">
        <div className="text-white font-bold">COMPANY PAGE SYSTEM [STYLE 23]</div>
        <div>DESIGN SYSTEM + CMS + AI PAGE GENERATION</div>
        <div>WORLDWIDE [WEB] / EDITABLE [OPS]</div>
      </div>

      <div className="text-right space-y-1 text-gray-500">
        <div>→ FOR TEAMS THAT SHIP MANY LANDINGS</div>
        <div>FROM SINGLE PAGE DESIGN TO REUSABLE PAGE FACTORY.</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div>&gt; SYSTEM</div>
          <div>&gt; CONTACT</div>
        </div>
        <Barcode />
      </div>
    </div>
  </footer>
);

export default function CompanyPageSystemCyberPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <Content />
      <Footer />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-[#222]"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-[#222]"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-[#222]"></div>
      </div>
    </div>
  );
}
