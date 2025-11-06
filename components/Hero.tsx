import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.2; // Parallax speed
      if (gradientRef.current) {
        gradientRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Animated Gradient Background - made larger to accommodate parallax movement */}
      <div ref={gradientRef} className="absolute inset-[-20vh] z-0 animated-gradient-bg"></div>
      <div className="absolute inset-0 z-1 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/10 via-gray-900/50 to-gray-900"></div>

      <div className="container mx-auto px-4 text-center relative z-10 py-24 sm:py-32 lg:py-40">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight md:leading-snug animated-headline"
        >
            <span style={{ animationDelay: '0.1s' }}>Discover</span>{' '}
            <span style={{ animationDelay: '0.2s' }}>Your</span>{' '}
            <span className="text-orange-500" style={{ animationDelay: '0.3s' }}>Passion.</span>
            <br/>
            <span style={{ animationDelay: '0.5s' }}>Build</span>{' '}
            <span style={{ animationDelay: '0.6s' }}>Your</span>{' '}
            <span className="text-orange-500" style={{ animationDelay: '0.7s' }}>Dream</span>{' '}
            <span className="text-orange-500" style={{ animationDelay: '0.8s' }}>Career.</span>
        </h1>
        <p 
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
            Aptrowin helps students find what they love, develop real-world skills, and turn passion into a successful career — with personalized AI guidance, learning paths, and hands-on mentorship.
        </p>
        <div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '1.4s' }}
        >
          <a
            href="#career-finder"
            className="group relative inline-block bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-white/10 rounded-md transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            🎯 Find My Career Path
          </a>
          <a
            href="#waitlist"
            className="inline-block bg-gray-700/50 border border-gray-600 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 w-full sm:w-auto"
          >
            📥 Join the Early Access Waitlist
          </a>
        </div>
        <p 
            className="mt-8 text-sm text-gray-400 animate-fade-in-up"
            style={{ animationDelay: '1.6s' }}
        >
            Students across India are discovering careers with Aptrowin. Be next.
        </p>
      </div>

      <style>{`
        @keyframes gradient-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animated-gradient-bg {
            background: linear-gradient(-45deg, #0f172a, #111827, #0f172a, #c2410c);
            background-size: 200% 200%;
            animation: gradient-animation 25s ease infinite;
            will-change: transform; /* Performance hint for the browser */
        }

        .animated-headline span {
            display: inline-block;
            opacity: 0;
            animation: word-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes word-in {
            from {
                opacity: 0;
                transform: translateY(2.5rem) rotate(-8deg) scale(0.8);
                filter: blur(8px);
            }
            to {
                opacity: 1;
                transform: translateY(0) rotate(0deg) scale(1);
                filter: blur(0px);
            }
        }

        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(2rem);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
