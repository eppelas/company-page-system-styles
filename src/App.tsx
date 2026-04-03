import React, { useEffect, useMemo, useState } from 'react';
import CompanyPageSystemCyberPage from './components/CompanyPageSystemCyberPage';
import Style5App from './variants/style5/App';
import Style36App from './variants/style36/App';
import Style37App from './variants/style37/App';
import Style48App from './variants/style48/App';
import Style65App from './variants/style65/App';
import Style66App from './variants/style66/App';
import Style73App from './variants/style73/App';
import Style83App from './variants/style83/App';
import Style96App from './variants/style96/App';
import Style100App from './variants/style100/App';

type StyleEntry = {
  id: string;
  name: string;
  note: string;
  Component: React.ComponentType;
};

const styles: StyleEntry[] = [
  { id: '5', name: 'Dot Signal System', note: 'white / blue / orbital editorial', Component: Style5App },
  { id: '36', name: 'Data Arch Blueprint', note: 'dark blueprint / arch system', Component: Style36App },
  { id: '37', name: 'Experimental Grid Atlas', note: 'white atlas / typographic index', Component: Style37App },
  { id: '48', name: 'Wireframe Tech Editorial', note: 'dark editorial / wireframe shell', Component: Style48App },
  { id: '58', name: 'Page System Factory', note: 'cyber motorsport / black mono', Component: CompanyPageSystemCyberPage },
  { id: '65', name: 'Gimz System Unit', note: 'hard black white / display rows', Component: Style65App },
  { id: '66', name: 'Flamma Signal Slabs', note: 'orange black / liquid slabs', Component: Style66App },
  { id: '73', name: 'Data Arch System', note: 'dark system / chapter architecture', Component: Style73App },
  { id: '83', name: 'Minimal System Principles', note: 'light grid / minimal controls', Component: Style83App },
  { id: '96', name: 'Wireframe Editorial System', note: 'dark wireframe / oversized type', Component: Style96App },
  { id: '100', name: 'Obys Dark Orbit System', note: 'dark orbit / concentric narrative', Component: Style100App },
];

function readStyleFromUrl() {
  return new URLSearchParams(window.location.search).get('style');
}

function setUrlStyle(styleId: string | null) {
  const url = new URL(window.location.href);
  if (styleId) {
    url.searchParams.set('style', styleId);
  } else {
    url.searchParams.delete('style');
  }
  window.history.pushState({}, '', url);
}

function StyleIndex({
  activeStyleId,
  onSelect,
}: {
  activeStyleId: string | null;
  onSelect: (styleId: string) => void;
}) {
  return (
    <main className="min-h-screen bg-[#f2f2f2] text-[#0f0f0f]">
      <div className="max-w-[1080px] mx-auto px-5 py-8 md:px-8 md:py-10">
        <header className="flex flex-col gap-4 border-b border-black/15 pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="m-0 text-[clamp(22px,2.6vw,34px)] uppercase tracking-[0.02em]">Company Page System Styles</h1>
            <p className="mt-2 text-sm text-black/60">
              One app, one build, many visual routes for the same landing idea.
            </p>
          </div>
          <div className="text-sm text-black/60">
            Open any variant with <code>?style=36</code>, <code>?style=48</code>, <code>?style=100</code>
          </div>
        </header>

        <section className="mt-7 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
          {styles.map((style) => {
            const isActive = style.id === activeStyleId;
            return (
              <button
                key={style.id}
                type="button"
                onClick={() => onSelect(style.id)}
                className={`border p-4 text-left transition-colors ${
                  isActive ? 'border-black bg-black text-white' : 'border-black/15 bg-white hover:bg-black hover:text-white'
                }`}
              >
                <div className="text-xs uppercase tracking-[0.18em] opacity-70">style {style.id}</div>
                <div className="mt-2 text-lg font-semibold">{style.name}</div>
                <div className="mt-2 text-xs opacity-70">{style.note}</div>
              </button>
            );
          })}
        </section>
      </div>
    </main>
  );
}

function Shell({
  styleId,
  onBack,
  onSelect,
}: {
  styleId: string;
  onBack: () => void;
  onSelect: (styleId: string) => void;
}) {
  const currentIndex = styles.findIndex((style) => style.id === styleId);
  const current = styles[currentIndex];

  if (!current) {
    return <StyleIndex activeStyleId={null} onSelect={onSelect} />;
  }

  const prev = styles[(currentIndex - 1 + styles.length) % styles.length];
  const next = styles[(currentIndex + 1) % styles.length];
  const CurrentComponent = current.Component;

  return (
    <div className="relative">
      <div className="fixed left-4 top-4 z-[999999] flex flex-wrap items-center gap-2 rounded-full border border-black/15 bg-white/90 px-3 py-2 text-xs uppercase tracking-[0.18em] text-black shadow-sm backdrop-blur">
        <button type="button" onClick={onBack} className="hover:opacity-60">
          index
        </button>
        <span className="opacity-30">/</span>
        <button type="button" onClick={() => onSelect(prev.id)} className="hover:opacity-60">
          prev {prev.id}
        </button>
        <button type="button" onClick={() => onSelect(next.id)} className="hover:opacity-60">
          next {next.id}
        </button>
        <span className="opacity-50">{current.name}</span>
      </div>
      <CurrentComponent />
    </div>
  );
}

export default function App() {
  const [styleId, setStyleId] = useState<string | null>(() => readStyleFromUrl());

  const selectStyle = (nextStyleId: string) => {
    setUrlStyle(nextStyleId);
    setStyleId(nextStyleId);
  };

  useEffect(() => {
    const onPopState = () => setStyleId(readStyleFromUrl());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const normalizedStyleId = useMemo(() => {
    if (!styleId) return null;
    return styles.some((style) => style.id === styleId) ? styleId : null;
  }, [styleId]);

  if (!normalizedStyleId) {
    return <StyleIndex activeStyleId={null} onSelect={selectStyle} />;
  }

  return <Shell styleId={normalizedStyleId} onBack={() => { setUrlStyle(null); setStyleId(null); }} onSelect={selectStyle} />;
}
