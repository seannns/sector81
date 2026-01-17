// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import FadeIn from './components/FadeIn';
import SkillsDial from './components/SkillsDial';

export default function Home() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroTranslateY, setHeroTranslateY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Fade out as we scroll through the first viewport
      const opacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.5)));
      setHeroOpacity(opacity);
      // Move hero content up at 30% of scroll speed (parallax)
      setHeroTranslateY(scrollY * 0.3);
      // Check if we're past the hero section
      setIsPastHero(scrollY > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-[200vh]">
      {/* Hover trigger zone for navbar */}
      <div 
        className="fixed top-0 left-0 right-0 h-16 z-[60] pointer-events-none"
        style={{ pointerEvents: isPastHero ? 'auto' : 'none' }}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      />
      
      {/* Navbar - fixed and above everything */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[70] flex w-full justify-between items-center p-4 bg-[#111] transition-all duration-300 ${
          isPastHero && !isNavHovered ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div>
          <a className="p-1">BRISBANE 3:19PM</a>
        </div>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`absolute left-1/2 -translate-x-1/2 p-1 hover:bg-white hover:text-black cursor-pointer transition-opacity duration-300 ${
            isPastHero && isNavHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          HOME
        </a>
        <div className="flex gap-6">
          <a href="#about" className="p-1 hover:bg-white hover:text-black cursor-pointer">ABOUT</a>
          <a href="#works" className="p-1 hover:bg-white hover:text-black cursor-pointer">WORKS</a>
          <a href="#contact" className="p-1 hover:bg-white hover:text-black cursor-pointer">CONTACT</a>
        </div>
      </nav>

      {/* Hero section - fixed in place */}
      <section className="fixed inset-0 h-screen flex flex-col z-0 pt-14">

        <div 
          className="flex-1 flex flex-col lg:flex-row justify-center lg:justify-between items-center px-8 overflow-hidden"
          style={{ opacity: heroOpacity, transform: `translateY(-${heroTranslateY}px)` }}
        >
            <h1 className="font-[family-name:var(--font-bricolage)] text-[20vw] lg:text-[10rem] font-light leading-none whitespace-nowrap">Sector52</h1>
            <p className="text-center lg:text-right text-sm leading-relaxed mt-6 lg:mt-0">
              <span className="opacity-50">by Sean Newman Shiels</span>
              <span className="block h-6"></span>
              aesthetics without filler.<br />
              <span className="block h-2"></span>
              turning complex systems into<br />
              human-first experiences.
            </p>
        </div>
      </section>

      {/* Spacer for the hero section */}
      <div className="h-screen snap-start" />

      {/* About section - scrolls over hero */}
      <section id="about" className="relative z-10 min-h-screen bg-[#111] border-t border-white/20 snap-start">
        <div className="px-16 lg:px-24 py-8 h-screen flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-12">
          <div className="lg:flex-1 max-w-xl">
            <p className="text-sm leading-relaxed text-center lg:text-left">
              My name is Sean.<br /><br />
              I'm a designer with a passion for balancing<br />
              accessibility and aesthetics.<br /><br />
              I have a strong belief that good design is<br />
              not just frictionless, but exciting and memorable.
            </p>
          </div>
          <div className="lg:flex-1 flex justify-center lg:justify-end lg:pr-8">
            <SkillsDial />
          </div>
        </div>
      </section>

      {/* Works section */}
      <section id="works" className="relative z-10 min-h-screen bg-[#111] border-t border-white/20 snap-start">
        <div className="px-16 lg:px-24 py-8 h-screen flex flex-col justify-center items-center">
          {/* Add your works content here */}
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="relative z-10 min-h-screen bg-[#111] border-t border-white/20 snap-start">
        <div className="px-16 lg:px-24 py-8 h-screen flex flex-col justify-center items-center gap-8">
          <h2 className="text-4xl lg:text-6xl font-light font-[family-name:var(--font-bricolage)]">Work with me.</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="p-2 hover:bg-white hover:text-black">LINKEDIN</a>
            <a href="#" className="p-2 hover:bg-white hover:text-black">INSTAGRAM</a>
            <a href="#" className="p-2 hover:bg-white hover:text-black">BEHANCE</a>
            <a href="#" className="p-2 hover:bg-white hover:text-black">EMAIL</a>
          </div>
        </div>
      </section>

    </main>
  );
}