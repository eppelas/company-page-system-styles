import React, { useEffect, useState } from 'react';
import DataArchPage from './components/DataArchPage';
import AimLabContentPage, { type AimContentTheme } from './components/AimLabContentPage';

const theme: AimContentTheme = {
  rootClassName: 'bg-[#080A0D] text-white font-sans',
  surfaceClassName: 'bg-[#0F1722]/90',
  cardClassName: 'bg-[#101723]',
  borderClassName: 'border-blue-500/35',
  mutedTextClassName: 'text-white/65',
  accentClassName: 'text-blue-400',
  badgeClassName: 'bg-blue-500 text-white',
  buttonClassName: 'bg-blue-500 text-white hover:bg-blue-400',
  logoClassName: 'brightness-200',
  headingClassName: 'tracking-tight',
};

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const pageLabels = ['design', 'content'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setPageIndex((prev) => (prev + 1) % 2);
      }
      if (event.key === 'ArrowLeft') {
        setPageIndex((prev) => (prev - 1 + 2) % 2);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const pages = [
    <DataArchPage key="design" />,
    <AimLabContentPage key="content" styleLabel="AIM 36 · Company Page Blueprint" theme={theme} />,
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-5 left-1/2 z-[999990] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-[#0B1220]/88 p-2 text-[10px] uppercase tracking-[0.18em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
        {pageLabels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => setPageIndex(index)}
            className={`rounded-full px-3 py-1.5 transition-colors ${pageIndex === index ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
          >
            {label}
          </button>
        ))}
      </div>
      {pages[pageIndex]}
    </div>
  );
}
