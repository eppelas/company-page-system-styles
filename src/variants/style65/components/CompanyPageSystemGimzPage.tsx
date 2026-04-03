import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-50 mix-blend-difference text-white text-xs md:text-sm font-medium tracking-wide">
    <div className="flex flex-col">
      <span className="font-black text-xl tracking-tighter uppercase">SYSTEM</span>
      <span className="opacity-50">Page factory</span>
    </div>
    <div className="flex flex-col items-end gap-1">
      <div className="flex gap-6">
        {['Brand', 'Blocks', 'CMS', 'Launch'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
            {item}
          </a>
        ))}
      </div>
      <div className="flex gap-2 mt-2 opacity-50">
        <span>Style 65</span>
        <span className="text-white">EN</span>
      </div>
    </div>
  </header>
);

const ProjectRow = ({ id, title, description, color }: { id: string; title: string; description: string; color: string }) => (
  <div className="relative border-t border-white/20 group cursor-pointer">
    <div className={`absolute inset-0 ${color} z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between py-12 md:py-20 px-4 md:px-8">
      <div className="flex items-baseline gap-8">
        <span className="text-sm md:text-base opacity-50 group-hover:text-white transition-colors">{id}</span>
        <h3 className="text-4xl md:text-7xl uppercase tracking-tighter font-black group-hover:text-white transition-colors">{title}</h3>
      </div>
      <div className="flex items-center gap-8 mt-4 md:mt-0">
        <p className="text-sm md:text-base max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          {description}
        </p>
        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
      </div>
    </div>
  </div>
);

export default function CompanyPageSystemGimzPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <section className="min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 md:px-8">
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full max-w-[90vw] mx-auto">
            <div className="aspect-square border-[20px] md:border-[40px] border-white flex items-start justify-center relative overflow-hidden">
              <div className="w-[20px] md:w-[40px] h-1/2 bg-white absolute top-0" />
            </div>
            <div className="aspect-square bg-white flex items-center justify-center">
              <div className="w-1/2 h-full bg-[#0A0A0A]" />
            </div>
            <div className="aspect-square border-[20px] md:border-[40px] border-white relative">
              <div className="absolute top-0 left-0 w-full h-full bg-white transform -skew-x-12 origin-bottom-left scale-x-50" />
            </div>
            <div className="aspect-square border-[20px] md:border-[40px] border-white rounded-r-full" />
          </div>
        </div>
        <div className="mt-12 md:mt-24 max-w-[90vw] mx-auto">
          <h1 className="text-5xl md:text-8xl uppercase tracking-tighter leading-none font-black">
            WE BUILD
            <br />
            PAGE SYSTEMS
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-40 px-4 md:px-8 border-t border-white/20">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-3xl md:text-6xl lg:text-7xl uppercase leading-tight tracking-tight text-center md:text-left font-black">
            One master style. <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Many pages.</span> One system that survives
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}> launches, edits and tests.</span>
          </h2>
        </div>
      </section>

      <section className="border-b border-white/20">
        <ProjectRow id="01" title="BRAND" description="Research the company and lock the tone before touching layout." color="bg-[#0044FF]" />
        <ProjectRow id="02" title="BLOCKS" description="Turn the flagship page into sections reusable across offers and markets." color="bg-[#FF4400]" />
        <ProjectRow id="03" title="CMS" description="Store the system where operators can rebuild pages visually." color="bg-[#00CC44]" />
        <ProjectRow id="04" title="AGENT" description="Use analytics to suggest new ordering, rewrites and test ideas." color="bg-[#FFCC00]" />
      </section>

      <section className="py-24 md:py-40 px-4 md:px-8 bg-white text-black">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-4xl md:text-7xl uppercase leading-none tracking-tighter font-black">
            Stop rebuilding
            <br />
            every landing.
            <br />
            Build a <span className="bg-black text-white px-2">factory</span>
            <br />
            that keeps the
            <br />
            brand intact.
          </h2>
        </div>
      </section>
    </div>
  );
}
