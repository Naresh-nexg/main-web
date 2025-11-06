import React, { useState, useRef, useEffect } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

const Header: React.FC = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setIsFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const featureLinks = [
    { name: 'Online Courses', href: '/#/online-courses' },
    { name: 'AI Mentor', href: '/#/features' },
    { name: 'AI Roadmapper', href: '/#/features' },
    { name: 'AI Skill Teacher', href: '/#/features' },
    { name: 'AI Skill & Job Match', href: '/#/features' },
  ];

  const allLinks = [
    ...featureLinks,
    { name: 'How It Works', href: '/#/how-it-works' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <a href="/#" className="text-2xl font-extrabold text-white tracking-wider hover:text-orange-400 transition-colors">
                APTROWIN
              </a>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <div ref={featuresRef} className="relative">
                <button
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                  onMouseLeave={() => setIsFeaturesOpen(false)}
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Features
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
                {isFeaturesOpen && (
                  <div 
                    onMouseEnter={() => setIsFeaturesOpen(true)}
                    onMouseLeave={() => setIsFeaturesOpen(false)}
                    className="absolute -left-4 top-full mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2"
                  >
                    {featureLinks.map(link => (
                      <a key={link.name} href={link.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-500 hover:text-white">
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="/#/how-it-works" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">How It Works</a>
            </nav>
          </div>

          {/* Right side: CTA and Mobile Menu Toggle */}
          <div className="flex items-center">
            <a href="#waitlist" className="hidden lg:block bg-orange-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600 transition-all duration-300">Join Waitlist</a>
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700/50 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {allLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">{link.name}</a>
            ))}
            <a href="#waitlist" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center bg-orange-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600 transition-all duration-300">Join Waitlist</a>
          </nav>
        </div>
      )}
    </header>
  );
};

// Fix: Add default export to the Header component.
export default Header;