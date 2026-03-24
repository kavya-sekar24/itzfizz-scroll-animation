import LenisWrapper from '@/components/LenisWrapper';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <LenisWrapper>
      <main className="w-full bg-[#000000] min-h-[300vh]">
        <Hero />
        {/* Placeholder section to allow scrolling */}
        <section className="w-full h-screen bg-[#050505] flex items-center justify-center relative z-20 border-t border-white/5">
          <div className="max-w-4xl text-center px-6">
            <h2 className="text-4xl md:text-6xl font-black text-white/50 uppercase tracking-[0.2em] mb-8 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              Motion Beyond Limits
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              Experience the power of advanced scroll-driven animations built with Next.js, 
              GSAP, and Tailwind CSS. The motion feels natural, fluid, and premium, 
              responding precisely to your interactions. This section confirms the smooth integration 
              of initial loading animations scaling down to seamless scroll triggers.
            </p>
          </div>
        </section>
        <section className="w-full h-[50vh] bg-gradient-to-b from-[#050505] to-black flex items-center justify-center">
            <h3 className="text-xl md:text-3xl text-white/20 uppercase tracking-[0.5em] font-bold">The End</h3>
        </section>
      </main>
    </LenisWrapper>
  );
}
