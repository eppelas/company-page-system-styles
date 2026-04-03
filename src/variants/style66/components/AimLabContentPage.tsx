import React from 'react';

export type AimContentTheme = {
  rootClassName: string;
  surfaceClassName: string;
  cardClassName: string;
  borderClassName: string;
  mutedTextClassName: string;
  accentClassName: string;
  badgeClassName: string;
  buttonClassName: string;
  logoClassName?: string;
  headingClassName?: string;
};

type AimLabContentPageProps = {
  styleLabel: string;
  theme: AimContentTheme;
};

const navItems = [
  { label: 'AI mindset', href: 'https://aimindset.org/' },
  { label: '{LAB}', href: 'https://aimindset.org/ai-mindset' },
  { label: '{personal OS}', href: 'https://aimindset.org/sprint-pos' },
  { label: '{ai-native orgs}', href: 'https://ai-native.aimindset.org/' },
  { label: '{space}', href: 'https://aimindset.org/ai-mindset-community' },
  { label: '{for-teams}', href: 'https://aimindset.org/ai-mindset-consulting' },
];

const primaryAudience = [
  'HR, L&D, коммуникации, менеджмент, операционные роли',
  'если пробовали инструменты, но не собрали систему',
  'если нужен реальный результат без входа в IT',
];

const outcomes = [
  'собранный контекст: AI понимает ваши задачи, стиль и ограничения',
  '1–3 рабочих артефакта: ассистент, автоматизация, прототип или система',
  'понятный следующий шаг после лабы',
  'shift мышления: от выбора инструмента к проектированию процесса',
];

const philosophy = [
  'mindset важнее инструментов',
  'практика встроена в процесс',
  'сообщество усиливает обучение',
  'персонализация через треки',
];

const weeks = [
  {
    week: 'Неделя 1 · 19–25 JAN',
    title: 'Prompt Engineering',
    subtitle: 'AI как интерфейс мышления',
    result: 'персональный GPT-ассистент, библиотека промптов (20+), база понимания AI',
    tools: 'ChatGPT · Claude · Custom GPTs · Gemini · Perplexity',
    speaker: 'Александр Поваляев',
  },
  {
    week: 'Неделя 2 · 26 JAN – 1 FEB',
    title: 'Context Engineering',
    subtitle: 'Автоматизация и агенты',
    result: '2–3 автоматизации, интегрированная система знаний, настройка агентов',
    tools: 'Obsidian · MCP · n8n · Make · Claude Projects',
    speaker: 'Сергей Хабаров',
  },
  {
    week: 'Неделя 3 · 2–8 FEB',
    title: 'Mind Engineering',
    subtitle: 'Продуктивность и ритуалы',
    result: 'персональный AI-коуч, трекинг привычек, ритуалы рефлексии',
    tools: 'Claude · Notion · Obsidian · Taskade · Custom GPTs',
    speaker: 'Анна Лозицкая',
  },
  {
    week: 'Неделя 4 · 9–15 FEB',
    title: 'Life Engineering',
    subtitle: 'Творчество и реализация',
    result: 'рабочий прототип, деплой, личный vibe-coding workflow',
    tools: 'Cursor · Windsurf · Claude Projects · V0 · Replit',
    speaker: 'Анка Ставенски',
  },
];

const tracks = [
  'AI Coaching — для баланса, продуктивности и рефлексии',
  'AI Agents — автономные системы и MCP-интеграции',
  'Vibe-Coding — от идеи до прототипа за часы',
  'AI Creative — музыка, визуал, креатив с AI',
];

const proofs = [
  '15 интервью после потока, 60 активных участников',
  '20% участников стали амбассадорами',
  '34+ зафиксированных кейса автоматизации',
  'момент «кликнуло» чаще всего на 2–3 неделе',
];

const plans = [
  {
    name: 'MAIN LAB',
    price: '€590',
    detail: '4 live-воркшопа, коворкинги, office hours, чат участников, demo day',
  },
  {
    name: 'ADVANCED',
    price: '€890',
    detail: 'MAIN LAB + 4 advanced-трека, приоритетная поддержка и разборы',
  },
  {
    name: 'PREMIUM',
    price: '€1,490',
    detail: 'индивидуальный маршрут, 1:1 сессии, аудит процессов, priority support',
  },
  {
    name: 'FOR TEAMS',
    price: '€3,500+',
    detail: 'командное прохождение, стратсессии, roadmap внедрения',
  },
];

export default function AimLabContentPage({ styleLabel, theme }: AimLabContentPageProps) {
  return (
    <div className={`h-screen overflow-y-auto ${theme.rootClassName}`}>
      <header className={`sticky top-0 z-40 backdrop-blur border-b ${theme.borderClassName} ${theme.surfaceClassName}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/ai-mindset-logo.png"
              alt="AI Mindset logo"
              className={`h-8 w-8 object-contain ${theme.logoClassName ?? ''}`}
            />
            <div>
              <div className={`text-xs uppercase tracking-[0.22em] ${theme.mutedTextClassName}`}>{styleLabel}</div>
              <div className="text-sm md:text-base font-semibold">AI mindset LAB W26</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[11px] md:text-xs">
            <span className={`px-2 py-1 rounded-full border ${theme.borderClassName}`}>← / →</span>
            <span className={`px-2 py-1 rounded-full border ${theme.borderClassName}`}>batch: winter 26</span>
            <span className={`px-2 py-1 rounded-full border ${theme.borderClassName}`}>next flow: 20 april</span>
          </div>

          <a href="https://join.aimindset.org/context" className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold ${theme.buttonClassName}`}>
            Подать заявку
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14 space-y-8 md:space-y-10">
        <section className={`rounded-2xl border p-6 md:p-8 ${theme.cardClassName} ${theme.borderClassName}`}>
          <div className={`text-xs uppercase tracking-[0.25em] mb-4 ${theme.mutedTextClassName}`}>навигация</div>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={`px-3 py-1 rounded-full border text-sm transition-opacity hover:opacity-80 ${theme.borderClassName}`}>
                {item.label}
              </a>
            ))}
            <a href="https://join.aimindset.org/waitlist" className={`px-3 py-1 rounded-full border text-sm font-semibold ${theme.badgeClassName}`}>
              waitlist
            </a>
          </div>
        </section>

        <section className={`rounded-2xl border p-6 md:p-8 ${theme.cardClassName} ${theme.borderClassName}`}>
          <div className={`text-xs uppercase tracking-[0.25em] mb-4 ${theme.mutedTextClassName}`}>hero content</div>
          <h1 className={`text-3xl md:text-5xl leading-[1.05] font-bold mb-4 ${theme.headingClassName ?? ''}`}>
            Лаборатория нового мышления в эпоху AI
          </h1>
          <p className="text-base md:text-xl leading-relaxed max-w-4xl mb-6">
            AI mindset winter lab w26 — это лаборатория, где вы не просто изучаете инструменты, а собираете AI-first
            систему под реальные задачи: от хаоса запросов и FOMO к понятному процессу и рабочим артефактам.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
            <div className={`rounded-xl border p-4 ${theme.surfaceClassName} ${theme.borderClassName}`}>
              старт 19 января 2026 — завершение 16 февраля 2026
            </div>
            <div className={`rounded-xl border p-4 ${theme.surfaceClassName} ${theme.borderClassName}`}>
              следующий поток: 20 апреля • формат: online • 4 недели
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <article className={`rounded-2xl border p-6 ${theme.cardClassName} ${theme.borderClassName}`}>
            <h2 className="text-xl font-semibold mb-4">Для кого эта лаборатория</h2>
            <ul className="space-y-2 text-sm md:text-base">
              {primaryAudience.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className={theme.accentClassName}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-4 text-sm ${theme.mutedTextClassName}`}>
              Также подходит advanced users, фаундерам и технарям, которым нужен системный контекстный подход.
            </p>
          </article>

          <article className={`rounded-2xl border p-6 ${theme.cardClassName} ${theme.borderClassName}`}>
            <h2 className="text-xl font-semibold mb-4">Что вы получите</h2>
            <ul className="space-y-2 text-sm md:text-base">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className={theme.accentClassName}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className={`rounded-2xl border p-6 md:p-8 ${theme.cardClassName} ${theme.borderClassName}`}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Философия</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {philosophy.map((item, index) => (
              <div key={item} className={`rounded-xl border p-4 ${theme.surfaceClassName} ${theme.borderClassName}`}>
                <div className={`text-xs mb-2 ${theme.mutedTextClassName}`}>0{index + 1}</div>
                <div className="font-medium">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={`rounded-2xl border p-6 md:p-8 ${theme.cardClassName} ${theme.borderClassName}`}>
          <div className={`text-xs uppercase tracking-[0.25em] mb-4 ${theme.mutedTextClassName}`}>prompt → context → mind → life</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Как устроена LAB: 4 недели</h2>
          <div className="space-y-4">
            {weeks.map((week) => (
              <article key={week.week} className={`rounded-xl border p-4 md:p-5 ${theme.surfaceClassName} ${theme.borderClassName}`}>
                <div className={`text-xs uppercase tracking-[0.18em] mb-2 ${theme.mutedTextClassName}`}>{week.week}</div>
                <h3 className="text-lg md:text-2xl font-semibold">{week.title}</h3>
                <p className={`text-sm mb-2 ${theme.mutedTextClassName}`}>{week.subtitle}</p>
                <p className="text-sm md:text-base mb-2"><span className="font-semibold">Результат:</span> {week.result}</p>
                <p className="text-sm md:text-base mb-2"><span className="font-semibold">Инструменты:</span> {week.tools}</p>
                <p className="text-sm md:text-base"><span className="font-semibold">Спикер:</span> {week.speaker}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <article className={`rounded-2xl border p-6 ${theme.cardClassName} ${theme.borderClassName}`}>
            <h2 className="text-xl font-semibold mb-4">Tracks (advanced)</h2>
            <ul className="space-y-2 text-sm md:text-base">
              {tracks.map((track) => (
                <li key={track} className="flex gap-2">
                  <span className={theme.accentClassName}>•</span>
                  <span>{track}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={`rounded-2xl border p-6 ${theme.cardClassName} ${theme.borderClassName}`}>
            <h2 className="text-xl font-semibold mb-4">Доказательства и цифры</h2>
            <ul className="space-y-2 text-sm md:text-base">
              {proofs.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className={theme.accentClassName}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className={`rounded-2xl border p-6 md:p-8 ${theme.cardClassName} ${theme.borderClassName}`}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Price</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <article key={plan.name} className={`rounded-xl border p-4 ${theme.surfaceClassName} ${theme.borderClassName}`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <span className={`text-sm font-semibold ${theme.badgeClassName} px-2 py-1 rounded-full`}>{plan.price}</span>
                </div>
                <p className={`text-sm ${theme.mutedTextClassName}`}>{plan.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`rounded-2xl border p-6 md:p-8 ${theme.cardClassName} ${theme.borderClassName}`}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Финальный шаг</h2>
          <p className="text-base md:text-lg mb-6">
            Если хотите в следующий поток: подайте заявку сейчас или встаньте в waitlist, чтобы получить уведомление о старте.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://join.aimindset.org/context?utm_source=website&utm_medium=cta&utm_campaign=w26&utm_content=final" className={`inline-flex justify-center px-5 py-3 rounded-full text-sm font-semibold ${theme.buttonClassName}`}>
              Подать заявку
            </a>
            <a href="https://join.aimindset.org/waitlist" className={`inline-flex justify-center px-5 py-3 rounded-full border text-sm font-semibold ${theme.borderClassName}`}>
              Встать в waitlist
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
