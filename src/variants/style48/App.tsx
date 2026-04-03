import React, { useEffect, useState } from 'react';
import AiMindsetWireframePage from './components/AiMindsetWireframePage';
import AiMindsetWireframeContentPage from './components/AiMindsetWireframeContentPage';

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
    <AiMindsetWireframePage key="design" />,
    <AiMindsetWireframeContentPage key="content" />,
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-5 left-1/2 z-[999990] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/82 p-2 text-[10px] uppercase tracking-[0.18em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
        {pageLabels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => setPageIndex(index)}
            className={`rounded-full px-3 py-1.5 transition-colors ${pageIndex === index ? 'bg-white text-black' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
          >
            {label}
          </button>
        ))}
      </div>
      {pages[pageIndex]}
    </div>
  );
}
