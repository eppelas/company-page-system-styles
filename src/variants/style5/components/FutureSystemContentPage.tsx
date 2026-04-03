import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RotateCw } from 'lucide-react';

const FutureFont = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap');
    .font-future { font-family: 'Inter', sans-serif; }

    .curved-grid {
      background-size: 90px 90px;
      background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px);
      transform: perspective(900px) rotateX(24deg) scale(1.4);
      transform-origin: center top;
      mask-image: linear-gradient(to bottom, black 35%, transparent 100%);
    }

    .scanline {
      background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 48%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.25));
      background-size: 100% 4px;
      pointer-events: none;
    }
  `}</style>
);

const leftFlow = [
  'PROMPT',
  'CONTEXT',
  'MIND',
  'LIFE',
];

const tracks = [
  'AI Coaching',
  'AI Agents',
  'Vibe-Coding',
  'AI Creative',
];

const outcomes = [
  '1–3 рабочих артефакта к финалу потока',
  'система контекста под ваши задачи и роль',
  'выход из FOMO в структурный процесс',
];

const plans = [
  { name: 'BASE', price: '€590', note: '4 недели · main lab' },
  { name: 'ADVANCED', price: '€890', note: 'main + 4 tracks' },
  { name: 'PREMIUM', price: '€1,490', note: '1:1 и roadmap' },
];

const NavLink = ({ text, href, lightMode = false }: { text: string; href: string; lightMode?: boolean }) => (
  <a href={href} className={`hover:underline decoration-2 underline-offset-4 transition-colors uppercase text-xs md:text-sm font-bold tracking-wider ${lightMode ? 'text-black hover:text-[#7AA149]' : 'text-white hover:text-[#00FF00]'}`}>
    {text}
  </a>
);

export default function FutureSystemContentPage({ lightMode = false }: { lightMode?: boolean }) {
  const logoSrc = `${import.meta.env.BASE_URL}assets/ai-mindset-logo.png`;
  const accent = lightMode ? '#7AA149' : '#00FF00';
  const pageBg = lightMode ? '#F3F4EE' : '#111111';
  const panelBg = lightMode ? '#ECEFE2' : '#0a0a0a';
  const textColor = lightMode ? '#101410' : '#ffffff';
  const muted = lightMode ? '#536149' : '#d1d5db';

  return (
    <div className="min-h-screen font-future overflow-hidden flex flex-col md:flex-row relative" style={{ backgroundColor: pageBg, color: textColor }}>
      <FutureFont />
      <div className="absolute inset-0 scanline z-50 opacity-10 pointer-events-none" />

      <section className="w-full md:w-1/2 relative border-r-4 border-blue-600 overflow-hidden flex flex-col" style={{ backgroundColor: lightMode ? '#e7ebdc' : '#111111' }}>
        <div className="absolute inset-0 curved-grid opacity-35" />

        <div className="relative z-10 p-5 md:p-8 border-b border-white/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="AI Mindset logo" className="h-7 w-7 object-contain" />
            <span className="text-[11px] md:text-xs uppercase tracking-[0.24em]" style={{ color: accent }}>
              {lightMode ? 'AIM 25 · light spring mode' : 'AIM 25 · content protocol'}
            </span>
          </div>
          <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] px-2 py-1" style={{ border: `1px solid ${accent}` }}>← / →</span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-8">
          <h2 className="text-sm md:text-xl font-light tracking-[0.45em] mb-3" style={{ color: muted }}>BATCH W26</h2>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.84] tracking-tighter mb-3">
            AI MINDSET
            <br />
            LAB
          </h1>
          <div className="flex items-center gap-3 mb-7 uppercase tracking-[0.2em] text-xs md:text-sm" style={{ color: accent }}>
            <RotateCw size={20} />
            <span>SYSTEM LIVE</span>
          </div>
          <p className="max-w-lg text-base md:text-xl leading-relaxed" style={{ color: lightMode ? '#283025' : '#e5e7eb' }}>
            Лаборатория нового мышления: от хаоса запросов к персональной AI-системе и рабочим артефактам.
          </p>
        </div>

        <div className="relative z-10 border-t border-white/20 p-5 md:p-7">
          <div className="grid grid-cols-4 gap-3 text-center">
            {leftFlow.map((step, index) => (
              <div key={step} className="border border-[#00FF00]/60 p-2 md:p-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em]" style={{ color: accent }}>0{index + 1}</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.18em]">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full md:w-1/2 flex flex-col" style={{ backgroundColor: panelBg }}>
        <div className="p-6 md:p-10 border-b-4 border-red-600">
          <h2 className="text-4xl md:text-7xl font-medium tracking-tight leading-[0.9]">
            CONTENT
            <br />
            MIRROR
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 p-5 md:p-6 border-b border-white/20">
          <NavLink text="Program" href="https://aimindset.org/ai-mindset" lightMode={lightMode} />
          <NavLink text="Tracks" href="https://aimindset.org/ai-mindset-w25" lightMode={lightMode} />
          <NavLink text="Cases" href="https://aimindset.org/" lightMode={lightMode} />
          <NavLink text="Price" href="https://join.aimindset.org/context" lightMode={lightMode} />
        </div>

        <div className="flex-1 p-5 md:p-8 relative">
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage: lightMode
                ? 'linear-gradient(#63734e 1px, transparent 1px), linear-gradient(90deg, #63734e 1px, transparent 1px)'
                : 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '90px 90px',
            }}
          />

          <div className="relative z-10 space-y-5">
            <div className="inline-block text-black px-2 py-1 font-bold text-xs md:text-sm uppercase tracking-[0.18em]" style={{ backgroundColor: accent }}>
              applications close
            </div>

            <p className="text-lg md:text-2xl leading-relaxed" style={{ color: lightMode ? '#111111' : '#ffffff' }}>
              <strong style={{ color: accent }}>Для кого:</strong> non-tech специалисты, фаундеры, лиды и advanced users,
              которым нужен системный AI-подход, а не хаотичный набор инструментов.
            </p>

            <div className="space-y-3">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-white/20 px-3 py-2">
                  <ArrowRight className="mt-1 shrink-0" size={16} style={{ color: accent }} />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {tracks.map((track) => (
                <div key={track} className="px-3 py-2 uppercase text-xs md:text-sm tracking-[0.18em]" style={{ border: `1px solid ${accent}`, color: accent }}>
                  {track}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {plans.map((plan) => (
                <article key={plan.name} className="border border-white/30 p-3">
                  <div className="text-[10px] uppercase tracking-[0.24em]" style={{ color: muted }}>{plan.name}</div>
                  <div className="text-2xl font-black">{plan.price}</div>
                  <div className="text-xs uppercase tracking-[0.12em]" style={{ color: muted }}>{plan.note}</div>
                </article>
              ))}
            </div>

            <a
              href="https://join.aimindset.org/context?utm_source=website&utm_medium=cta&utm_campaign=w26&utm_content=final"
              className="inline-block text-black px-6 py-3 text-base md:text-lg font-bold transition-colors border-2 border-transparent"
              style={{ backgroundColor: lightMode ? '#7AA149' : '#ffffff' }}
            >
              JOIN BATCH W26
            </a>
          </div>
        </div>

        <div className="p-5 border-t border-white/20 flex items-end justify-between">
          <div className="text-[11px] md:text-xs uppercase tracking-[0.2em]" style={{ color: muted }}>
            AI MINDSET
            <br />
            FUTURE SYSTEM
          </div>
          <div className="text-[11px] md:text-xs uppercase tracking-[0.2em]" style={{ color: accent }}>
            prompt → context → mind → life
          </div>
        </div>
      </section>
    </div>
  );
}
