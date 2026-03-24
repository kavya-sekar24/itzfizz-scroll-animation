'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const backgroundTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Load Animations
      const tl = gsap.timeline();

      // Headline fade in and slide up
      tl.fromTo(headlineRef.current, 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }
      )
      // Stats stagger in
      .fromTo(statsRef.current?.children ?? [], 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }, 
        "-=0.6"
      )
      // Main image scale up slightly on load
      .fromTo(imageContainerRef.current,
        { scale: 0.9, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
        "-=1"
      );

      // 2. Scroll-Based Animations
      
      // Pin the hero section text to create a parallax text effect
      gsap.to(textContainerRef.current, {
        y: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%",
          scrub: 1,
        }
      });

      // Scale up the image as user scrolls down, making it fill the screen
      gsap.to(imageContainerRef.current, {
        scale: 1.6,
        y: 100,
        borderRadius: "0px", // remove rounded corners to fill screen
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
          pin: true,
        }
      });

      // Move the background text laterally for a parallax feeling
      gsap.to(backgroundTextRef.current, {
        x: "-20vw",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 2,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#000000] text-white flex flex-col items-center justify-start overflow-hidden pt-32 z-10">
      
      {/* Background massive text */}
      <div 
        ref={backgroundTextRef}
        className="absolute top-[20%] left-0 w-[200vw] text-[15vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none tracking-widest z-0 leading-none"
      >
        ITZ FIZZ SCROLL MOTION
      </div>

      {/* Hero Content */}
      <div ref={textContainerRef} className="z-20 flex flex-col items-center w-full px-6 mix-blend-difference mb-12">
        <h1 
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.3em] text-center text-white"
        >
          W E L C O M E <br className="md:hidden" /> I T Z F I Z Z
        </h1>

        <div ref={statsRef} className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">300%</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest mt-2">Growth Rate</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">1.2M</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest mt-2">Active Users</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">99.9%</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest mt-2">Uptime</span>
          </div>
        </div>
      </div>

      {/* Main Visual Element */}
      <div 
        ref={imageContainerRef}
        className="absolute top-[50%] md:top-[60%] w-[90vw] md:w-[70vw] h-[40vh] md:h-[60vh] z-10 rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10"
      >
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium aesthetic car"
          className="w-full h-full object-cover rounded-[40px]"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
      </div>

    </section>
  );
}
