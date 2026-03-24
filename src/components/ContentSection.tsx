'use client';

export default function ContentSection() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Scroll-Driven Animation
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Experience the power of scroll-based animations with GSAP and React. 
          As you scroll down, the hero section responds smoothly with parallax effects and opacity transitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: 'Smooth Performance',
              description: 'Optimized animations using transform properties for 60fps performance.',
            },
            {
              title: 'Scroll Integration',
              description: 'Animations triggered by scroll position for immersive interactions.',
            },
            {
              title: 'Responsive Design',
              description: 'Works flawlessly on mobile, tablet, and desktop devices.',
            },
            {
              title: 'Modern Stack',
              description: 'Built with Next.js, React, Tailwind CSS, and GSAP.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-orange-400/30 bg-slate-800/50 backdrop-blur hover:bg-slate-800/70 transition-all"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-lg bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-400/30">
          <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-start">
              <span className="text-orange-400 mr-3">→</span>
              <span>Initial load animation with staggered letter reveal</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3">→</span>
              <span>Parallax effect on headline and visual elements</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3">→</span>
              <span>Opacity transitions based on scroll progress</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3">→</span>
              <span>Performance optimized with CSS transforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3">→</span>
              <span>Fully responsive and mobile-friendly</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
