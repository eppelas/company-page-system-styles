import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  ChevronDown,
  Cpu,
  Globe2,
  Layers3,
  ScanSearch,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';

const FutureFont = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=JetBrains+Mono:wght@400;700&display=swap');
    .font-future { font-family: 'Inter', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }

    .curved-grid {
      background-size: 100px 100px;
      background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      transform: perspective(1000px) rotateX(20deg) scale(1.5);
      transform-origin: center top;
      mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    }

    .bg-grid {
      background-size: 50px 50px;
      background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    }

    .scanline {
      background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
      background-size: 100% 4px;
      pointer-events: none;
    }
  `}</style>
);

const WireframeCore = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#00FF00]"
  >
    <div className="absolute inset-0 rotate-45 rounded-full border-2 border-[#00FF00]" />
    <div className="absolute inset-0 -rotate-45 rounded-full border-2 border-[#00FF00]" />
    <div className="absolute left-1/2 h-full w-2 -translate-x-1/2 bg-[#00FF00]/20" />
    <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 bg-[#00FF00]/20" />
  </motion.div>
);

const NavLink = ({ text, href = '#' }: { text: string; href?: string }) => (
  <a
    href={href}
    className="text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#00FF00] md:text-sm"
  >
    {text}
  </a>
);

const LabsDropdown = () => (
  <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#00FF00] md:text-sm">
    {`{systems}`} <ChevronDown size={14} />
  </button>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 border-b-2 border-red-600 pb-6">
    <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">{title}</h2>
    {subtitle ? <p className="mt-4 text-xl font-light text-gray-200">{subtitle}</p> : null}
  </div>
);

const SignalCard = ({
  index,
  title,
  body,
  meta,
}: {
  index: string;
  title: string;
  body: string;
  meta: string;
}) => (
  <div className="border border-white/20 bg-black/50 p-6 transition-colors hover:border-[#00FF00]/50 md:p-8">
    <div className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#00FF00]">{index}</div>
    <h3 className="mb-4 text-2xl font-bold uppercase">{title}</h3>
    <p className="text-base leading-relaxed text-gray-200">{body}</p>
    <div className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.22em] text-gray-200">{meta}</div>
  </div>
);

const SystemCard = ({
  icon: Icon,
  title,
  body,
  tags,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  tags: string[];
}) => (
  <div className="group relative overflow-hidden border border-white/20 bg-black/50 p-6 transition-colors hover:border-[#00FF00]/50 md:p-8">
    <div className="absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-20">
      <Icon className="h-20 w-20 text-white" />
    </div>
    <div className="relative z-10">
      <h3 className="mb-4 text-2xl font-bold uppercase">{title}</h3>
      <p className="mb-6 text-gray-200">{body}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="bg-white/10 px-2 py-1 font-mono text-xs text-gray-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const StepCard = ({
  step,
  title,
  body,
  result,
}: {
  step: string;
  title: string;
  body: string;
  result: string;
}) => (
  <div className="border border-white/20 bg-black/50 p-6 md:p-8">
    <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#00FF00]">{step}</div>
    <h3 className="mb-4 text-2xl font-bold uppercase">{title}</h3>
    <p className="mb-6 text-gray-200">{body}</p>
    <div className="border-t border-white/10 pt-4">
      <div className="mb-2 text-xs uppercase tracking-[0.24em] text-gray-200">выход</div>
      <p className="text-sm text-white">{result}</p>
    </div>
  </div>
);

const ServiceCard = ({
  title,
  price,
  desc,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
}) => (
  <div
    className={`flex h-full flex-col border p-8 ${
      highlight ? 'border-[#00FF00] bg-[#00FF00]/5' : 'border-white/20 bg-black/50'
    }`}
  >
    <h3 className="mb-2 text-2xl font-bold uppercase">{title}</h3>
    <div className="mb-4 text-4xl font-black">{price}</div>
    <p className="mb-8 min-h-[72px] text-gray-200">{desc}</p>
    <ul className="mb-8 flex-1 space-y-4">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <Check className={`mt-0.5 h-5 w-5 shrink-0 ${highlight ? 'text-[#00FF00]' : 'text-gray-200'}`} />
          <span className="text-sm text-gray-200">{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`flex w-full items-center justify-center py-4 text-center font-bold uppercase tracking-wider transition-colors ${
        highlight ? 'bg-[#00FF00] text-black hover:bg-white' : 'bg-white text-black hover:bg-[#00FF00]'
      }`}
    >
      обсудить формат
    </a>
  </div>
);

const OutcomeItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#00FF00]" />
    <span className="text-lg text-gray-200">{children}</span>
  </li>
);

export default function CompanyPageSystemLanding() {
  return (
    <div className="font-future relative min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00FF00] selection:text-black">
      <FutureFont />
      <div className="scanline pointer-events-none fixed inset-0 z-[100] opacity-10" />
      <div className="bg-grid pointer-events-none fixed inset-0" />

      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0a0a0a]/90 px-6 py-4 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-8">
          <LabsDropdown />
          <NavLink text="page factory" href="#system" />
          <NavLink text="design engine" href="#pipeline" />
          <NavLink text="analytics loop" href="#agent" />
        </div>
        <a
          href="#contact"
          className="border border-[#00FF00] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#00FF00] transition-colors hover:bg-[#00FF00] hover:text-black"
        >
          обсудить проект
        </a>
      </nav>

      <div className="relative z-10 flex min-h-[90vh] flex-col border-b border-white/20 lg:flex-row">
        <div className="relative flex w-full flex-col overflow-hidden border-b border-blue-600 bg-[#111] lg:w-1/2 lg:border-b-0 lg:border-r-4">
          <div className="curved-grid absolute inset-0 opacity-30" />

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-8 text-center lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-block rounded-full border border-white/20 px-4 py-1 font-mono text-sm uppercase tracking-widest text-gray-200">
                style transfer: system-led landing
              </div>
              <h1 className="mb-4 text-6xl leading-none tracking-tighter md:text-8xl lg:text-9xl">
                PAGE
                <br />
                SYSTEM
                <br />
                <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                  FACTORY
                </span>
              </h1>

              <div className="my-12 flex justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                  <Workflow size={64} className="text-[#00FF00]" />
                </motion.div>
              </div>

              <h3 className="inline-block border-b border-white/30 pb-2 text-2xl font-light uppercase tracking-widest md:text-3xl">
                design system + cms + llm + analytics
              </h3>
            </motion.div>
          </div>

          <div className="relative z-10 overflow-hidden border-t border-white/20 bg-black/50 p-4 whitespace-nowrap">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-12 font-mono text-2xl font-thin text-white/55 md:text-4xl"
            >
              <span>BRAND</span>
              <span>BLOCKS</span>
              <span>CMS</span>
              <span>MARKDOWN</span>
              <span>ANALYTICS</span>
              <span>AGENT</span>
              <span>BRAND</span>
              <span>BLOCKS</span>
              <span>CMS</span>
              <span>MARKDOWN</span>
              <span>ANALYTICS</span>
              <span>AGENT</span>
            </motion.div>
          </div>
        </div>

        <div className="flex w-full flex-col bg-[#0a0a0a] lg:w-1/2">
          <div className="flex items-center justify-between border-b-4 border-red-600 p-8 md:p-12">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-gray-200 md:text-6xl">лендинг про систему</h2>
            <div className="hidden h-12 w-12 items-center justify-center border border-white/20 md:flex">
              <ArrowUpRight className="text-gray-200" />
            </div>
          </div>

          <div className="relative flex flex-1 flex-col justify-center p-8 md:p-12">
            <div className="relative z-10 max-w-xl">
              <div className="mb-8 flex flex-wrap gap-4">
                <div className="inline-block border border-white/20 bg-white/10 px-3 py-1 font-mono text-sm uppercase tracking-widest text-white">
                  repeated pages: yes
                </div>
                <div className="inline-block border border-[#00FF00]/30 bg-[#00FF00]/10 px-3 py-1 font-mono text-sm uppercase tracking-widest text-[#00FF00]">
                  non-technical editing: yes
                </div>
              </div>

              <h3 className="mb-6 text-3xl font-bold uppercase leading-tight md:text-4xl">
                система, которая превращает стиль в поток новых страниц
              </h3>

              <div className="mb-8 font-mono text-lg uppercase tracking-widest text-[#00FF00]">
                для компаний с лендингами, локализациями и постоянными гипотезами
              </div>

              <div className="mb-12 border-l-4 border-red-600 pl-6">
                <p className="text-xl font-light leading-relaxed text-gray-200">
                  Это сервис для компаний, которым нужно регулярно запускать <strong className="font-bold text-white">новые страницы в одном стиле</strong>:
                  под разные языки, аудитории, офферы и тесты. Сначала создаётся дизайн-система и набор блоков, потом страницы
                  собираются из них автоматически, а команда редактирует результат уже в удобной CMS.
                </p>
              </div>

              <a
                href="#contact"
                className="group flex w-full items-center justify-center gap-3 bg-white px-8 py-4 text-xl font-bold uppercase text-black transition-colors hover:bg-[#00FF00] md:w-auto"
              >
                собрать пилот →
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="absolute bottom-12 right-12 hidden opacity-50 xl:block">
              <WireframeCore />
              <div className="mt-2 text-center font-mono text-xs text-[#00FF00]">
                PAGE
                <br />
                ENGINE
                <br />
                ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <section className="mb-48">
          <SectionHeader
            title="какую проблему это решает"
            subtitle="Не разовый лендинг. А повторяемый production pipeline для множества новых страниц."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <SignalCard
              index="signal 01"
              title="слишком много повторяющейся работы"
              body="Маркетинговые страницы, локализации, новые офферы, тесты и вертикали повторяют одну и ту же структуру, но каждый раз пересобираются почти с нуля."
              meta="долго / дорого / нестабильно"
            />
            <SignalCard
              index="signal 02"
              title="дизайн и фронт расходятся"
              body="Даже когда у компании есть дизайнер и разработчик, блоки не живут как система. Из-за этого каждая новая страница становится отдельным мини-проектом."
              meta="ручные итерации / потеря консистентности"
            />
            <SignalCard
              index="signal 03"
              title="контент-команда зависит от технарей"
              body="Менеджер видит, что нужно поменять текст, порядок секций или спикеров, но не может сделать это быстро без GitHub, разработчика или срочного дизайна."
              meta="узкое горло / медленные тесты"
            />
          </div>
        </section>

        <section id="system" className="mb-48">
          <SectionHeader
            title="что создаётся в итоге"
            subtitle="Не просто красивая страница, а operating layer для производства новых страниц."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <SystemCard
              icon={Sparkles}
              title="стиль"
              body="Фиксируется брендовый визуальный язык: атмосфера, tone of voice, типографика, палитра, характер композиции."
              tags={['style directions', 'brand feel', 'tone']}
            />
            <SystemCard
              icon={Layers3}
              title="дизайн-система"
              body="Из эталонной страницы собираются атомы и reusable элементы: кнопки, карточки, секции, паттерны иллюстраций, сетка."
              tags={['tokens', 'components', 'sections']}
            />
            <SystemCard
              icon={Terminal}
              title="cms + spec flow"
              body="Страницы начинают собираться из блоков по markdown/spec-файлу, а не вручную в коде для каждого нового запроса."
              tags={['markdown', 'cms', 'assembly']}
            />
            <SystemCard
              icon={Brain}
              title="редактирование без кода"
              body="Нетехнический человек меняет тексты, порядок блоков, спикеров и контент прямо визуально, не заходя в кодовую базу."
              tags={['ops', 'content', 'editing']}
            />
          </div>
        </section>

        <section id="pipeline" className="mb-48">
          <SectionHeader
            title="как это работает"
            subtitle="Тот же маршрут, который уже можно запускать как реальный сервис."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <StepCard
              step="step 01"
              title="исследование компании"
              body="Разбирается брендинг, продуктовый контекст, tone of voice и желаемое ощущение от интерфейса."
              result="criteria for visual direction"
            />
            <StepCard
              step="step 02"
              title="style exploration"
              body="Через fast design/vibe coding собираются несколько стилистических направлений и выбирается один master-style."
              result="approved visual language"
            />
            <StepCard
              step="step 03"
              title="эталонная страница"
              body="В выбранном стиле собирается одна сильная страница, которая становится источником визуальной и структурной логики."
              result="hero page / canonical reference"
            />
            <StepCard
              step="step 04"
              title="разрезание на блоки"
              body="Страница раскладывается на reusable секции: hero, social proof, cases, pricing, faq, footer и так далее."
              result="block library"
            />
            <StepCard
              step="step 05"
              title="сборка через cms"
              body="Блоки загружаются в CMS или page builder layer. Отдельный markdown/spec описывает, из каких секций собрать новую страницу."
              result="repeatable page generation"
            />
            <StepCard
              step="step 06"
              title="ручная и агентная донастройка"
              body="Команда редактирует контент руками, а дальше можно подключать AI для адаптации языков, порядков блоков и отдельных гипотез."
              result="faster launches without rebuilding from scratch"
            />
          </div>
        </section>

        <section className="mb-48 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              title="для кого это особенно подходит"
              subtitle="Где система начинает окупаться быстро."
            />

            <ul className="space-y-6">
              <OutcomeItem>Компании, которые постоянно создают новые лендинги внутри одного бренда.</OutcomeItem>
              <OutcomeItem>Проекты с локализациями: разные языки, страны и аудитории, но общая структура продукта.</OutcomeItem>
              <OutcomeItem>Продукты, где нужно быстро тестировать офферы, блоки, credibility и pricing-структуры.</OutcomeItem>
              <OutcomeItem>Команды, где менеджерам и контенту нужен доступ к изменениям без постоянного bottleneck на дизайн и фронт.</OutcomeItem>
              <OutcomeItem>Организации, где дизайн уже должен работать как система, а не как цепочка разовых макетов.</OutcomeItem>
            </ul>
          </div>

          <div className="border border-white/20 bg-black/50 p-8">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[#00FF00]">outcomes</div>
            <div className="space-y-6">
              <div>
                <div className="mb-1 text-sm uppercase tracking-[0.2em] text-gray-200">скорость</div>
                <p className="text-2xl font-bold uppercase">новые страницы собираются из системы, а не с нуля</p>
              </div>
              <div>
                <div className="mb-1 text-sm uppercase tracking-[0.2em] text-gray-200">качество</div>
                <p className="text-2xl font-bold uppercase">брендовый стиль сохраняется даже при масштабировании</p>
              </div>
              <div>
                <div className="mb-1 text-sm uppercase tracking-[0.2em] text-gray-200">доступ</div>
                <p className="text-2xl font-bold uppercase">нетехнические люди получают контроль над контентом</p>
              </div>
              <div>
                <div className="mb-1 text-sm uppercase tracking-[0.2em] text-gray-200">экономика</div>
                <p className="text-2xl font-bold uppercase">меньше ручных итераций, меньше дорогих повторов</p>
              </div>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-48">
          <SectionHeader
            title="следующий уровень"
            subtitle="Когда система перестаёт только собирать страницы и начинает учиться на поведении людей."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <SystemCard
              icon={ScanSearch}
              title="смотрит аналитику"
              body="Агент видит, на каком блоке люди останавливаются, где падает внимание и какие секции реально не ведут дальше."
              tags={['scroll depth', 'clicks', 'drop-off']}
            />
            <SystemCard
              icon={Globe2}
              title="адаптирует рынки"
              body="Можно тестировать отличия под аудитории и языки: менять акценты, очередность секций и нюансы подачи."
              tags={['locales', 'audiences', 'variants']}
            />
            <SystemCard
              icon={Zap}
              title="предлагает гипотезы"
              body="Перестановка блоков, переработка слабых секций, изменение CTA, быстрые A/B идеи на базе реальных данных."
              tags={['cta', 'layout', 'experiments']}
            />
          </div>
        </section>

        <section className="mb-48">
          <SectionHeader
            title="как это можно покупать"
            subtitle="И как внедрение, и как сопровождение, и как системный переход команды."
          />

          <div className="grid gap-6 xl:grid-cols-3">
            <ServiceCard
              title="консультация"
              price="entry"
              desc="Разобрать текущий процесс, понять где ломается связка дизайн-фронт-контент и определить архитектуру системы."
              features={[
                'audit текущего пайплайна',
                'разбор узких мест',
                'рекомендация по design/CMS flow',
              ]}
            />
            <ServiceCard
              title="пилот"
              price="system sprint"
              desc="Собрать один реальный pipeline: стиль, эталонную страницу, библиотеку блоков и сборку новых страниц через систему."
              features={[
                'один master-style',
                'одна canonical page',
                'block library + page assembly',
                'контентный handoff для команды',
              ]}
              highlight
            />
            <ServiceCard
              title="сопровождение"
              price="ongoing"
              desc="Помогать команде проходить через несколько циклов реальных запусков и постепенно переводить всё в repeatable machine."
              features={[
                'итерации на живых страницах',
                'помощь команде и дизайнерам',
                'докрутка системы по аналитике',
              ]}
            />
          </div>
        </section>

        <section id="contact" className="border border-white/20 bg-black/60 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#00FF00]">contact / pilot / prototype</div>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-6xl">
                если у вас много похожих страниц, вам нужна не ещё одна страница, а система
              </h2>
              <p className="max-w-2xl text-xl font-light leading-relaxed text-gray-200">
                Я строю такие системы на стыке дизайна, design systems, CMS architecture, automation и AI workflows.
                Если у вас уже есть поток страниц, локализаций или тестов, это можно превратить в производственную машину,
                которая остаётся брендовой, но работает на порядок быстрее.
              </p>
            </div>

            <div className="flex flex-col justify-between border border-[#00FF00]/30 bg-[#00FF00]/5 p-8">
              <div>
                <div className="mb-2 text-sm uppercase tracking-[0.22em] text-gray-200">start point</div>
                <p className="mb-8 text-2xl font-bold uppercase">
                  один разговор, один pilot scope, одна живая страница как доказательство системы
                </p>
              </div>
              <a
                href="mailto:hello@example.com"
                className="flex items-center justify-center gap-3 bg-[#00FF00] px-6 py-4 text-lg font-bold uppercase text-black transition-colors hover:bg-white"
              >
                написать про проект
                <Cpu className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
