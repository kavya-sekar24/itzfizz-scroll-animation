'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const headline = headlineRef.current;
    const stats = statsRef.current;
    const visual = visualRef.current;

    if (!container || !headline || !stats || !visual) return;

    // Timeline for initial load animation
    const tl = gsap.timeline();

    // Headline letter reveal animation
    const letters = headline.querySelectorAll('.letter');
    
    tl.from(letters, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.05,
      ease: 'back.out',
    }, 0);

    // Stats animation
    const statItems = stats.querySelectorAll('.stat-item');
    tl.from(
      statItems,
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
      },
      0.3
    );

    // Scroll-based animation
    gsap.to(visual, {
      y: -100,
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          // Parallax effect
          const progress = self.progress;
          gsap.set(visual, {
            y: -100 * progress,
            opacity: 1 - progress * 0.3,
          });
        },
      },
    });

    // Headline parallax on scroll
    gsap.to(headline, {
      y: 50,
      opacity: 0.5,
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center"
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Small intro text */}
        <div className="text-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-sm md:text-base font-semibold text-orange-400 tracking-widest uppercase">
            Welcome to the future
          </span>
        </div>

        {/* Main headline */}
        <div
          ref={headlineRef}
          className="text-center mb-12 cursor-default select-none"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider leading-tight">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {['W', 'E', 'L', 'C', 'O', 'M', 'E'].map((letter, idx) => (
                <span key={`letter-${idx}`} className="letter inline-block">
                  {letter}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-2">
              {['I', 'T', 'Z', 'F', 'I', 'Z', 'Z'].map((letter, idx) => (
                <span key={`letter-b-${idx}`} className="letter inline-block">
                  {letter}
                </span>
              ))}
            </div>
          </h1>
        </div>

        {/* Statistics section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 max-w-4xl"
        >
          {[
            { number: '98%', label: 'Smooth Animation' },
            { number: '60fps', label: 'Performance' },
            { number: '100%', label: 'Responsive' },
            { number: '∞', label: 'Scalable' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="stat-item text-center p-4 md:p-6 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-300 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Visual element for scroll parallax */}
        <div
          ref={visualRef}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-orange-400/30 flex items-center justify-center">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-orange-400/20 flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-400/10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-orange-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
