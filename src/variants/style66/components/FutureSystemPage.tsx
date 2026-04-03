import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCw, Check, ArrowUpRight, Terminal, Cpu, Brain, Zap, ChevronDown } from 'lucide-react';

// --- Assets & Styles ---
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

const WireframeGlobe = () => (
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="w-32 h-32 rounded-full border-2 border-[#00FF00] relative flex items-center justify-center"
  >
    <div className="absolute inset-0 border-2 border-[#00FF00] rounded-full rotate-45" />
    <div className="absolute inset-0 border-2 border-[#00FF00] rounded-full -rotate-45" />
    <div className="w-full h-2 bg-[#00FF00]/20 absolute top-1/2 -translate-y-1/2" />
    <div className="h-full w-2 bg-[#00FF00]/20 absolute left-1/2 -translate-x-1/2" />
  </motion.div>
);

const NavLink = ({ text, active = false, href = "#" }: { text: string, active?: boolean, href?: string }) => (
  <a href={href} className={`hover:text-[#00FF00] transition-colors uppercase text-xs md:text-sm font-bold tracking-wider ${active ? 'text-[#00FF00]' : 'text-white'}`}>
    {text}
  </a>
);

const LabsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      title: "Current Labs",
      items: [
        { name: "Spring Main Lab", href: "#" },
        { name: "{personal OS}", href: "https://aimindset.org/sprint-pos" },
        { name: "{ai-native orgs}", href: "https://ai-native.aimindset.org/" }
      ]
    },
    {
      title: "Future Labs",
      items: [
        { name: "Music Lab", href: "#" },
        { name: "Summer Main Lab", href: "#" }
      ]
    },
    {
      title: "Lab Archive",
      items: [
        { name: "Winter Main Lab", href: "https://aimindset.org/ai-mindset" }
      ]
    }
  ];

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={`flex items-center gap-1 hover:text-[#00FF00] transition-colors uppercase text-xs md:text-sm font-bold tracking-wider ${isOpen ? 'text-[#00FF00]' : 'text-white'}`}>
        {`{labs}`} <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-64 bg-black/95 border border-white/10 backdrop-blur-xl z-[100] p-6 shadow-2xl"
          >
            <div className="space-y-8">
              {categories.map((cat, idx) => (
                <div key={idx}>
                  <div className="text-[10px] text-gray-200 uppercase tracking-[0.2em] mb-3 font-mono">{cat.title}</div>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item, i) => (
                      <a 
                        key={i} 
                        href={item.href} 
                        className="text-sm text-gray-200 hover:text-[#00FF00] transition-colors font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 border-b-2 border-red-600 pb-6">
    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{title}</h2>
    {subtitle && <p className="text-xl text-gray-200 mt-4 font-light">{subtitle}</p>}
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-4 mb-4">
    <ArrowRight className="text-[#00FF00] mt-1 shrink-0 w-5 h-5" />
    <span className="text-gray-200 text-lg">{children}</span>
  </li>
);

const ProgramCard = ({ week, dates, title, subtitle, result, tools, speaker, icon: Icon }: any) => (
  <div className="border border-white/20 bg-black/50 p-6 md:p-8 relative overflow-hidden group hover:border-[#00FF00]/50 transition-colors">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon className="w-24 h-24 text-white" />
    </div>
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-[#00FF00] font-mono text-sm mb-2">WEEK {week} // {dates}</div>
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">{title}</h3>
          <p className="text-gray-200 text-lg">{subtitle}</p>
        </div>
      </div>
      
      <div className="space-y-6 mt-8">
        <div>
          <div className="text-xs text-gray-200 uppercase tracking-widest mb-2">Результат</div>
          <p className="text-gray-200">{result}</p>
        </div>
        <div>
          <div className="text-xs text-gray-200 uppercase tracking-widest mb-2">Инструменты</div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t: string, i: number) => (
              <span key={i} className="px-2 py-1 bg-white/10 text-xs font-mono text-gray-200">{t}</span>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-white/10">
          <div className="text-xs text-gray-200 uppercase tracking-widest mb-1">Спикер</div>
          <p className="font-bold">{speaker}</p>
        </div>
      </div>
    </div>
  </div>
);

const PriceCard = ({ title, price, desc, features, highlight = false, cta }: any) => (
  <div className={`p-8 border ${highlight ? 'border-[#00FF00] bg-[#00FF00]/5' : 'border-white/20 bg-black/50'} flex flex-col h-full`}>
    <h3 className="text-2xl font-bold uppercase mb-2">{title}</h3>
    <div className="text-4xl font-black mb-4">{price}</div>
    <p className="text-gray-200 mb-8 min-h-[60px]">{desc}</p>
    
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-start gap-3">
          <Check className={`w-5 h-5 shrink-0 ${highlight ? 'text-[#00FF00]' : 'text-gray-200'}`} />
          <span className="text-sm text-gray-200">{f}</span>
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-4 font-bold uppercase tracking-wider transition-colors ${highlight ? 'bg-[#00FF00] text-black hover:bg-white' : 'bg-white text-black hover:bg-[#00FF00]'}`}>
      {cta || `Выбрать ${title}`}
    </button>
  </div>
);

export default function AiMindsetLabW26RussianPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-future selection:bg-[#00FF00] selection:text-black relative">
      <FutureFont />
      <div className="fixed inset-0 scanline z-[100] opacity-10 pointer-events-none" />
      <div className="fixed inset-0 bg-grid pointer-events-none" />

      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-8 items-center">
          <LabsDropdown />
          <NavLink text="community {space}" href="https://aimindset.org/ai-mindset-community" />
          <NavLink text="{for-teams}" href="https://aimindset.org/ai-mindset-consulting" />
          <NavLink text="non-profit" href="#" />
        </div>
        <a href="https://join.aimindset.org/waitlist" className="border border-[#00FF00] text-[#00FF00] px-6 py-2 text-sm font-bold uppercase hover:bg-[#00FF00] hover:text-black transition-colors tracking-widest">
          apply
        </a>
      </nav>

      {/* Hero Section (Split Layout) */}
      <div className="flex flex-col lg:flex-row min-h-[90vh] border-b border-white/20 relative z-10">
        {/* Left Visual */}
        <div className="w-full lg:w-1/2 relative border-b lg:border-b-0 lg:border-r-4 border-blue-600 overflow-hidden flex flex-col bg-[#111]">
          <div className="absolute inset-0 curved-grid opacity-30" />
          
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block border border-white/20 px-4 py-1 rounded-full text-sm font-mono mb-8 text-gray-200 uppercase tracking-widest">
                batch: winter 26
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-4">
                AI<br/>
                MINDSET<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">MAIN LAB</span>
              </h1>
              
              <div className="flex justify-center my-12">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <RotateCw size={64} className="text-[#00FF00]" />
                </motion.div>
              </div>

              <h3 className="text-2xl md:text-3xl font-light border-b border-white/30 pb-2 inline-block uppercase tracking-widest">
                WINTER 26
              </h3>
            </motion.div>
          </div>

          <div className="relative z-10 border-t border-white/20 p-4 overflow-hidden whitespace-nowrap bg-black/50">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 text-2xl md:text-4xl font-thin text-white/55 font-mono"
            >
              <span>PROMPT</span><span>CONTEXT</span><span>MIND</span><span>LIFE</span><span>ENGINEERING</span>
              <span>PROMPT</span><span>CONTEXT</span><span>MIND</span><span>LIFE</span><span>ENGINEERING</span>
            </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#0a0a0a]">
          <div className="p-8 md:p-12 border-b-4 border-red-600 flex justify-between items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-gray-200">AI mindset MAIN LAB W26</h2>
            <div className="hidden md:block w-12 h-12 border border-white/20 flex items-center justify-center">
              <ArrowUpRight className="text-gray-200" />
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
            <div className="relative z-10 max-w-xl">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="inline-block bg-white/10 text-white px-3 py-1 font-mono text-sm border border-white/20 uppercase tracking-widest">
                  applications: close
                </div>
                <div className="inline-block bg-[#00FF00]/10 text-[#00FF00] px-3 py-1 font-mono text-sm border border-[#00FF00]/30 uppercase tracking-widest">
                  следующий поток: 20 апреля
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight uppercase">
                лаборатория нового мышления в эпоху AI
              </h3>
              
              <div className="font-mono text-[#00FF00] mb-8 text-lg uppercase tracking-widest">
                старт 19 января 2026 — завершение 16 февраля 2026
              </div>

              <div className="border-l-4 border-red-600 pl-6 mb-12">
                <p className="text-xl leading-relaxed text-gray-200 font-light">
                  <strong className="text-white font-bold">AI mindset winter main lab w26</strong> — это лаборатория, где вы не просто изучаете инструменты, а собираете свою AI-first систему под реальные задачи. от хаоса запросов и FOMO к понятному процессу, рабочим артефактам и новому способу думать.
                </p>
              </div>

              <a href="https://join.aimindset.org/context?utm_source=website&utm_medium=cta&utm_campaign=w26&utm_content=hero" className="bg-white text-black px-8 py-4 text-xl font-bold hover:bg-[#00FF00] transition-colors w-full md:w-auto flex items-center justify-center gap-3 group uppercase">
                подать заявку →
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="absolute bottom-12 right-12 hidden xl:block opacity-50">
              <WireframeGlobe />
              <div className="text-center mt-2 text-[#00FF00] font-mono text-xs">
                SYSTEM<br/>ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        
        {/* Target Audience */}
        <section className="mb-48">
          <SectionHeader 
            title="для кого эта лаборатория" 
            subtitle="Мы не учим программировать. Мы учим думать с помощью AI."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white/5 border border-white/10 p-12">
              <div className="text-[#00FF00] font-mono text-sm mb-6">PRIMARY TARGET</div>
              <h3 className="text-4xl font-bold mb-8 uppercase">Non-tech специалисты</h3>
              <p className="text-gray-200 mb-12 text-xl leading-relaxed">
                для HR, L&D, коммуникаций, менеджмента, операционных ролей — тех, кто хочет внедрить AI в работу <strong className="text-white">без входа в IT</strong>.
              </p>
              
              <div className="mb-12">
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Если вы сейчас в таком состоянии:</h4>
                <ul className="space-y-4">
                  <ListItem>инструменты уже пробовали, но системы нет</ListItem>
                  <ListItem>боитесь, что «я не технический человек, не справлюсь»</ListItem>
                  <ListItem>не понимаете, с чего начать, чтобы получить реальный результат</ListItem>
                </ul>
              </div>

              <div>
                <h4 className="text-[#00FF00] font-bold mb-6 uppercase tracking-wider text-sm">Лаба поможет:</h4>
                <ul className="space-y-4">
                  <ListItem>снять барьер первого шага</ListItem>
                  <ListItem>перейти к рабочему процессу, а не хаотичным экспериментам</ListItem>
                  <ListItem>встроить AI в ежедневные задачи</ListItem>
                </ul>
              </div>
            </div>

            <div className="space-y-12">
              <div className="border border-white/10 p-12">
                <h4 className="text-2xl font-bold mb-6 uppercase">Также подойдет:</h4>
                <ul className="space-y-6">
                  <li className="text-gray-200 text-lg"><strong className="text-white uppercase">advanced users</strong> — если нужен следующий уровень: структура, framework, глубина</li>
                  <li className="text-gray-200 text-lg"><strong className="text-white">фаундерам и лидерам команд</strong> — если важны скорость, масштабирование и ROI</li>
                  <li className="text-gray-200 text-lg"><strong className="text-white">технарям</strong> — если хотите прокачать контекстный подход и ускорить реализацию</li>
                </ul>
              </div>

              <div className="border border-red-900/50 bg-red-950/20 p-12">
                <h4 className="text-2xl font-bold mb-6 text-red-400 uppercase">Кому не подойдет:</h4>
                <ul className="space-y-4 mb-8 text-gray-200 text-lg">
                  <li>— если нужен формат «сделайте за меня»</li>
                  <li>— если вы не готовы выделять время на практику</li>
                  <li>— если ждете одинаковый гарантированный результат для всех</li>
                </ul>
                <p className="text-base text-gray-200 italic leading-relaxed">
                  мы не «водим за ручку» и не обещаем одинаковый финал. мы даем среду, маршрут, поддержку и практику, в которой у каждого рождается свой результат.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Outcomes */}
        <section className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <SectionHeader title="философия лаборатории" />
            <div className="space-y-12">
              <div className="border-l-4 border-[#00FF00] pl-8">
                <h4 className="text-2xl font-bold mb-3 uppercase">mindset важнее инструментов</h4>
                <p className="text-gray-200 text-lg">технологии меняются, а новый способ мышления остаётся с вами.</p>
              </div>
              <div className="border-l-4 border-[#00FF00] pl-8">
                <h4 className="text-2xl font-bold mb-3 uppercase">практика встроена в процесс</h4>
                <p className="text-gray-200 text-lg">каждая неделя это эксперимент с реальными задачами и артефактами.</p>
              </div>
              <div className="border-l-4 border-[#00FF00] pl-8">
                <h4 className="text-2xl font-bold mb-3 uppercase">сообщество усиливает обучение</h4>
                <p className="text-gray-200 text-lg">вы учитесь не только у экспертов, но и друг у друга.</p>
              </div>
              <div className="border-l-4 border-[#00FF00] pl-8">
                <h4 className="text-2xl font-bold mb-3 uppercase">персонализация через треки</h4>
                <p className="text-gray-200 text-lg">углубляйтесь в то, что нужно именно вам.</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader title="что вы получите на выходе" />
            <p className="text-2xl text-gray-200 mb-12 font-light leading-relaxed">
              не «конспект и вдохновение», а рабочую основу под вашу роль.
            </p>
            <ul className="space-y-8 mb-12">
              <ListItem>собранный контекст: AI лучше понимает ваши задачи, стиль и ограничения</ListItem>
              <ListItem>1–3 рабочих артефакта (ассистент, автоматизация, прототип или система)</ListItem>
              <ListItem>понятный следующий шаг после лабы: что развивать дальше</ListItem>
              <ListItem>shift мышления: от «что за инструмент выбрать?» к «как собрать процесс под задачу?»</ListItem>
            </ul>
            <div className="bg-white/5 p-8 border border-white/10 text-base text-gray-200 leading-relaxed italic">
              какой именно проект получится у вас — зависит от вашего контекста и вовлечения. но у большинства участников к 2-3 неделе появляется ясность и первый рабочий результат.
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="mb-32">
          <SectionHeader 
            title="как устроена MAIN LAB" 
            subtitle="19 января – 16 февраля • 4 недели. От разрозненных запросов к единой AI-системе."
          />
          
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 mb-12 text-center">
            <p className="text-xl md:text-2xl font-mono text-gray-200 uppercase tracking-widest">
              prompt <span className="text-[#00FF00]">{'>>'}</span> context <span className="text-[#00FF00]">{'>>'}</span> mind <span className="text-[#00FF00]">{'>>'}</span> life <strong className="text-white uppercase">{`{engineering}`}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProgramCard 
              week="1" dates="19–25 JAN"
              title="Prompt Engineering" subtitle="AI как интерфейс мышления"
              result="Персональный GPT-ассистент, библиотека промптов (20+), понимание основ AI"
              tools={['ChatGPT', 'Claude', 'Custom GPTs', 'Gemini', 'Perplexity']}
              speaker="Александр Поваляев"
              icon={Terminal}
            />
            <ProgramCard 
              week="2" dates="26 JAN – 1 FEB"
              title="Context Engineering" subtitle="Автоматизация и агенты"
              result="2–3 работающие автоматизации, интегрированная система знаний, настройка агентов"
              tools={['Obsidian', 'MCP', 'n8n', 'Make', 'Claude Projects']}
              speaker="Сергей Хабаров"
              icon={Cpu}
            />
            <ProgramCard 
              week="3" dates="2–8 FEB"
              title="Mind Engineering" subtitle="Продуктивность и ритуалы"
              result="Персональный AI-коуч, система трекинга привычек, ритуалы рефлексии"
              tools={['Claude', 'Notion', 'Obsidian', 'Taskade', 'Custom GPTs']}
              speaker="Анна Лозицкая"
              icon={Brain}
            />
            <ProgramCard 
              week="4" dates="9–15 FEB"
              title="Life Engineering" subtitle="Творчество и реализация"
              result="Рабочий прототип, задеплоенный проект, vibe-coding workflow"
              tools={['Cursor', 'Windsurf', 'Claude Projects', 'V0', 'Replit']}
              speaker="Анка Ставенски"
              icon={Zap}
            />
          </div>
        </section>

        {/* Advanced Tracks */}
        <section className="mb-32">
          <SectionHeader 
            title="TRACKS (advanced)" 
            subtitle="Основная программа даёт фундамент. Треки — это углубление в конкретный домен."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
              <div className="text-[#00FF00] font-mono text-sm mb-4 uppercase">WEEK 1 · 21 JAN · WED 18:00</div>
              <h3 className="text-2xl font-bold uppercase mb-2">AI Coaching</h3>
              <p className="text-gray-200 mb-6">Для тех, кто выгорел и ищет баланс. AI для коучинга, рефлексии, персональных ритуалов.</p>
              <div className="text-sm text-gray-200 mb-2 uppercase">Спикер: Анна Лозицкая</div>
            </div>
            
            <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
              <div className="text-[#00FF00] font-mono text-sm mb-4 uppercase">WEEK 2 · 28 JAN · WED 18:00</div>
              <h3 className="text-2xl font-bold uppercase mb-2">AI Agents</h3>
              <p className="text-gray-200 mb-6">Автономные AI-системы. Проектирование и запуск AI-агентов, которые работают автономно.</p>
              <div className="text-sm text-gray-200 mb-2 uppercase">Спикеры: Сергей Хабаров, Александр Поваляев</div>
            </div>

            <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
              <div className="text-[#00FF00] font-mono text-sm mb-4 uppercase">WEEK 3 · 4 FEB · WED 18:00</div>
              <h3 className="text-2xl font-bold uppercase mb-2">Vibe-Coding</h3>
              <p className="text-gray-200 mb-6">Творческое программирование. От идеи до прототипа за часы без технического бэкграунда.</p>
              <div className="text-sm text-gray-200 mb-2 uppercase">Спикер: Сережа Рис</div>
            </div>

            <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
              <div className="text-[#00FF00] font-mono text-sm mb-4 uppercase">WEEK 4 · 11 FEB · WED 18:00</div>
              <h3 className="text-2xl font-bold uppercase mb-2">AI Creative</h3>
              <p className="text-gray-200 mb-6">Для музыкантов, художников и креативщиков. Генерация музыки, визуального контента.</p>
              <div className="text-sm text-gray-200 mb-2 uppercase">Спикер: Анка Ставенски</div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="mb-48">
          <SectionHeader title="ДОКАЗАТЕЛЬСТВА" subtitle="кейсы, результаты, отзывы и цифры" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            {[
              { val: "15", label: "интервью после потока" },
              { val: "20%", label: "стали амбассадорами" },
              { val: "3-5", label: "инструментов внедряют" },
              { val: "34+", label: "кейсов автоматизации" }
            ].map((stat, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <div className="text-5xl font-black tracking-tighter mb-2">{stat.val}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { name: "Екатерина Грачева", role: "HR-коммуникации, Avito", quote: "Раньше слово вайб-кодинг я даже в сторону не смотрела. Сейчас я верю, что могу это делать", result: "начала вайб-кодить, ведет AI-направление для 700+ коллег" },
              { name: "Сергей Петров", role: "Unix developer", quote: "Сделал parser через Cursor чисто визуальными промптами. Это изменило мою работу", result: "полный анализ Jira за 1 день вместо недель" },
              { name: "Роман Максимов", role: "Product Manager", quote: "У меня исчезло ощущение страха перед первым шагом в куче инструментов", result: "выросла уверенность, появилась рабочая AI-логика" },
              { name: "Руслан Богушев", role: "Юридическая практика", quote: "Это не классическое обучение. Это технологическая инициация — опыт прозрения и трансформации", result: "сформирован roadmap внедрения AI-агентов" }
            ].map((c, i) => (
              <div key={i} className="border border-white/10 p-12 hover:bg-white/5 transition-colors duration-500 group">
                <h4 className="text-3xl font-bold mb-2 uppercase tracking-tight">{c.name}</h4>
                <div className="text-xs font-mono uppercase tracking-widest text-[#00FF00] mb-6">{c.role}</div>
                <p className="text-xl italic mb-8 leading-relaxed text-gray-200">"{c.quote}"</p>
                <div className="text-sm border-t border-white/10 pt-6 text-gray-200">
                  <span className="font-bold uppercase text-[10px] tracking-widest block mb-2 text-white">Результат:</span>
                  {c.result}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-48">
          <SectionHeader title="WHO WE ARE" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Александр Поваляев", role: "Основатель проекта AI Mindset, стратег, эксперт по AI-интеграциям. 15+ лет соединяет технологии, бизнес и людей." },
              { name: "Сергей Хабаров", role: "Системный архитектор на стыке AI, образования и бизнес-процессов. 6+ лет в образовании, 500+ обученных специалистов." },
              { name: "Степан Гершуни", role: "Технологический стратег, founder нескольких проектов, инвестор и исследователь AI/web3." },
              { name: "Алексей Иванов", role: "Executive-коуч для фаундеров и IT-лидеров. ведёт advanced-трек AI-coaching." },
              { name: "Серёжа Рис", role: "AI-евангелист, ex Yandex, билдер в комьюнити vibe-coding." },
              { name: "Анна Ставенски", role: "Продуктовый архитектор и визуальный сторителлер. ведёт Life Engineering." },
              { name: "Анна Лозицкая", role: "Фоундер, исследователь практик мышления и AI для рефлексии, продуктивности и целей." },
            ].map((p, i) => (
              <div key={i} className="border-t border-white/20 pt-8">
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{p.name}</h3>
                <p className="text-base text-gray-200 leading-relaxed">{p.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-32">
          <SectionHeader title="PRICE" subtitle="Скидки: Alumni (-20%), Bring a Friend (-10% каждому)." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PriceCard 
              title="BASE"
              price="€590"
              desc="Четырёхнедельная трансформация: prompt → context → mind → life."
              features={[
                "4 live-воркшопа + 4 коворкинга",
                "Закрытый чат участников",
                "Трек prompt → context → mind → life",
                "Демо-день и публичная защита",
                "Доступ к библиотеке материалов"
              ]}
              cta="ВЫБРАТЬ BASE"
            />
            <PriceCard 
              title="ADVANCED"
              price="€890"
              desc="MAIN LAB + четыре дополнительных трека. Расширенная программа."
              highlight={true}
              features={[
                "Всё из тарифа BASE",
                "4 advanced трека (coaching, agents, vibe coding, creative)",
                "Приоритетные Buddy slots",
                "Еженедельные закрытые разборы",
                "Приоритетная обратная связь"
              ]}
              cta="ВЫБРАТЬ ADVANCED"
            />
            <PriceCard 
              title="PREMIUM"
              price="€1,490"
              desc="Индивидуальный маршрут: фиксируем данные, проектируем roadmap."
              features={[
                "Всё из тарифа ADVANCED",
                "Две сессии 1:1: стратегия и tech-set up",
                "Аудит процессов и подбор экосистемы",
                "Персональный канал и priority support",
                "Личный трекинг"
              ]}
              cta="ВЫБРАТЬ PREMIUM"
            />
            <PriceCard 
              title="FOR TEAMS"
              price="€3,500+"
              desc="Командное обучение. Работа над реальными задачами бизнеса."
              features={[
                "MAIN LAB для всех участников",
                "2+ командные стратсессии",
                "Tech set-up под инфраструктуру",
                "Еженедельные прогресс-отчёты",
                "Финальная ретро-сессия + roadmap",
                "Post-lab поддержка 2–12 недель"
              ]}
              cta="УЗНАТЬ БОЛЬШЕ"
            />
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter">
            AI MINDSET<br/>
            <span className="text-gray-200 uppercase">MAIN LAB W26</span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-gray-200 font-mono uppercase tracking-widest">
            <a href="https://www.youtube.com/@A-I-Mindset" className="hover:text-white transition-colors">Подкаст</a>
            <a href="https://t.me/ai_mind_set" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
            <a href="https://aimindset.org/confpolicy" className="hover:text-white transition-colors">Конфиденциальность</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
