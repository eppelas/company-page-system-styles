import React, { useEffect, useState } from 'react';
import AiMindsetWireframePage from './components/AiMindsetWireframePage';
import AiMindsetWireframeContentPage from './components/AiMindsetWireframeContentPage';

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
    <AiMindsetWireframePage key="design" />,
    <AiMindsetWireframeContentPage key="content" />,
  ];

  return pages[pageIndex];
}
