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

  return pages[pageIndex];
}
