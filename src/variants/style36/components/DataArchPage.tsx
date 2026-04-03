import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Plus, Minus, Circle } from 'lucide-react';
import { InteractiveRings } from './InteractiveRings';
import { WireframeCylinder } from './WireframeCylinder';

const ArchStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
    
    .font-inter { font-family: 'Inter', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-serif-arch { font-family: 'Playfair Display', serif; }
    
    html {
      scroll-behavior: smooth;
    }

    .arch-grid {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    }
  `}</style>
);

const LevelItem = ({ level, title, range, description, delay }: { level: string, title: string, range: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="flex flex-col gap-2 group cursor-pointer"
  >
    <div className="flex items-baseline gap-3 text-white/80 group-hover:text-white transition-colors duration-300">
      <span className="font-serif-arch italic text-lg">{level}</span>
      <span className="h-[1px] flex-grow bg-white/50 group-hover:bg-white transition-colors" />
      <span className="font-mono text-xs">{range}</span>
    </div>
    <h3 className="text-xl font-inter font-light text-white">{title}</h3>
    <p className="text-sm text-white max-w-xs leading-relaxed">{description}</p>
  </motion.div>
);

const TickMark = ({ label, targetId, y }: { label?: string, targetId?: string, y: string }) => (
  <a
    href={targetId ? `#${targetId}` : "#"}
    className="absolute left-0 w-full flex items-center hover:scale-[1.15] origin-left hover:opacity-100 transition-all duration-300 cursor-pointer z-50 pointer-events-auto" style={{ top: y, textDecoration: 'none' }}
    onClick={(e) => {
      if (!targetId) return;
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <div className="w-4 h-[1px] bg-white hover:bg-white transition-colors" />
    {label && <span className="ml-4 font-mono text-[10px] text-white hover:text-white transition-colors uppercase tracking-widest">{label}</span>}
  </a>
);

export default function DataArchPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const archScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const archOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-inter selection:bg-white selection:text-black overflow-x-hidden" ref={containerRef}>
      <ArchStyles />

      {/* Fixed Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 arch-grid opacity-50" />

        {/* The Great Arch */}
        <motion.div
          style={{ scale: archScale, opacity: archOpacity }}
          className="absolute inset-0 flex items-end justify-center translate-y-[40vh]"
        >
          <div className="w-[125vw] h-[125vw] rounded-full border border-white/20" />
        </motion.div>
      </div>

      {/* Y-Axis Ticks (Moved outside background container for proper z-index) */}
      <div className="fixed left-8 top-0 bottom-0 w-32 flex flex-col justify-between py-32 hidden lg:flex z-[999] pointer-events-auto">
        <TickMark y="10%" label="Brief" targetId="section-hero" />
        <TickMark y="30%" label="Brand" targetId="section-definition" />
        <TickMark y="50%" label="Blocks" targetId="section-levels" />
        <TickMark y="70%" label="Launch" targetId="section-architects" />
        <TickMark y="90%" label="Scale" targetId="section-pricing" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[99999] mix-blend-difference pointer-events-none">
        <div className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 pointer-events-auto">
          <img
            src={`${import.meta.env.BASE_URL}assets/ai-mindset-logo.png`}
            alt="AI Mindset logo"
            className="h-3.5 w-auto object-contain opacity-90"
          />
          <span>Company Page System <span className="opacity-50">{'{Blueprint}'}</span></span>
        </div>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest pointer-events-auto">
          <a href="#section-definition" className="hover:underline decoration-1 underline-offset-4">Blueprint</a>
          <a href="#section-pricing" className="hover:underline decoration-1 underline-offset-4">Contact</a>
        </div>
      </nav>

      <main className="relative">

        {/* Hero Section */}
        <section id="section-hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="font-serif-arch italic text-2xl md:text-3xl text-white mb-6">
              Company Page System
            </div>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-light tracking-tight mb-12 group cursor-default">
              CPS <span className="font-serif-arch italic font-normal text-white group-hover:bg-[#FF7A45] group-hover:text-white transition-all duration-300 px-2 py-1 -ml-2 mb-1 inline-block">{'{system}'}</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 font-mono text-xs uppercase tracking-widest text-white/90">
              <span>Batch: Company-01</span>
              <span className="w-1 h-1 bg-white rounded-full" />
              <span>Rolling intake</span>
              <span className="w-1 h-1 bg-white rounded-full" />
              <span>Status: Open for pilots</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 left-0 w-full flex justify-center"
          >
            <ArrowRight className="w-6 h-6 rotate-90 text-white/45 animate-bounce" />
          </motion.div>
        </section>

        {/* Definition Section */}
        <section id="section-definition" className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
          {/* Animated 3D Cylinders in background */}
          <div className="absolute right-[-25%] md:right-[-20%] lg:right-[-5%] top-1/2 -translate-y-1/2 w-full md:w-[650px] h-[650px] pointer-events-none opacity-60 z-0">
            <WireframeCylinder />
          </div>

          <div className="max-w-2xl text-center md:text-left md:absolute md:left-[20%] z-10">
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8 group cursor-default">
              Not a page.<br />
              <span className="font-serif-arch italic text-white/65 group-hover:bg-[#FF7A45] group-hover:text-white transition-all duration-300 px-2 py-1 md:ml-12 ml-6 mb-1 inline-block">A system.</span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-[90%] md:max-w-lg">
              A layer of brand rules, page blocks, and publishing logic that turns one design language
              into many company pages without losing consistency.
            </p>
            <div className="w-[85%] max-w-md grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/20 pt-8">
              <div>
                <div className="font-mono text-xs text-white/80 mb-2">INPUT</div>
                <div className="text-sm text-white/90">Messy briefs, different teams, inconsistent brand assets.</div>
              </div>
              <div>
                <div className="font-mono text-xs text-white/80 mb-2">OUTPUT</div>
                <div className="text-sm text-white/90">Reusable sections, branded pages, launch-ready systems.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Levels / Architecture Section */}
        <section id="section-levels" className="min-h-screen flex items-center px-6 py-24">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mt-24">
            <LevelItem
              level="Level 1"
              title="Brief"
              range="Day 1-3"
              description="Capture company goals, audience, offers, and constraints."
              delay={0.1}
            />
            <LevelItem
              level="Level 2"
              title="Brand"
              range="Day 4-7"
              description="Set type, color, motion, and the visual grammar once."
              delay={0.2}
            />
            <LevelItem
              level="Level 3"
              title="Blocks"
              range="Day 8-10"
              description="Design reusable sections that can assemble into many pages."
              delay={0.3}
            />
            <LevelItem
              level="Level 4"
              title="Launch"
              range="Day 11-14"
              description="Publish new company pages fast, then evolve them from one system."
              delay={0.4}
            />
          </div>
        </section>

        {/* Mentors Section - Horizontal Scroll feel */}
        <section id="section-architects" className="py-32 border-t border-white/10 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center justify-center mb-24 group cursor-default">
              <h2 className="text-5xl md:text-7xl font-serif-arch italic">
                <span className="group-hover:bg-[#FF7A45] group-hover:text-white transition-all duration-300 px-2 py-1 inline-block">Architects</span>
              </h2>
              <p className="font-serif-arch italic text-white/90 text-xl mt-4">
                Builders living in the process.
              </p>
            </div>

            <div className="relative z-[10000] grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20 border border-white/20">
              {[
                { name: "Discovery Layer", role: "Brief", desc: "Captures goals, audience, content, and conversion intent." },
                { name: "System Layer", role: "Language", desc: "Defines tokens, blocks, and rules that keep every page coherent." },
                { name: "Launch Layer", role: "Publishing", desc: "Turns the system into new pages for new companies." }
              ].map((mentor, i) => (
                <div key={i} className="bg-[#0A0A0A] p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 group relative z-[10000]">
                  <div className="w-12 h-12 rounded-full border border-[var(--color-text-main)] mb-8 flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all font-serif-arch italic">
                    <span className="text-white">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 opacity-90 group-hover:text-white transition-colors">{mentor.name}</h3>
                  <div className="font-mono text-xs uppercase tracking-widest mb-6 opacity-70 group-hover:text-white/70 transition-colors">{mentor.role}</div>
                  <p className="text-sm leading-relaxed text-white/90">{mentor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing / CTA */}
        <section id="section-pricing" className="min-h-[70vh] flex flex-col justify-center items-center px-6 relative overflow-hidden">
          {/* Abstract Circle Background replaced with InteractiveRings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <InteractiveRings />
          </div>

          <div className="relative z-10 text-center max-w-3xl pointer-events-none">
            <div className="font-mono text-xs uppercase tracking-widest mb-8">
              Build the System
            </div>
            <h2 className="text-5xl md:text-7xl font-serif-arch italic mb-8 group cursor-default">
              One system.<br />
              <span className="font-inter not-italic font-light text-3xl md:text-5xl block mt-4 group-hover:bg-[#FF7A45] group-hover:text-white transition-all duration-300 px-2 py-1 -ml-2 inline-block">Many company pages.</span>
            </h2>

            <div className="font-mono text-[10px] md:text-xs text-white/80 uppercase tracking-widest mb-12 max-w-lg mx-auto leading-relaxed">
              Blueprint v0<br />
              Ready for pilots
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pointer-events-auto">
              <button className="px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-white/90 transition-colors w-full md:w-auto">
                Start Blueprint
              </button>
              <button className="px-8 py-4 border border-white/50 font-mono text-xs uppercase tracking-widest hover:bg-white/20 transition-colors w-full md:w-auto">
                Read System Notes
              </button>
            </div>

            <div className="mt-16 flex justify-center gap-8 text-xs font-mono text-white/30">
              <span>Reusable blocks</span>
              <span>CMS-ready</span>
              <span>Multi-company scale</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif-arch italic text-lg">Company Page System</div>
            <div className="flex gap-6 font-mono text-[10px] text-white/40 uppercase tracking-widest">
              <a href="#section-hero" className="hover:text-white">Blueprint</a>
              <a href="#section-levels" className="hover:text-white">Blocks</a>
              <a href="#section-pricing" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
