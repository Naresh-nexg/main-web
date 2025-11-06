import React from 'react';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const WhatIsAptrowin: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                A Career Discovery & Skill-Building Platform for Students
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Choosing a career shouldn't feel confusing or overwhelming. Aptrowin uses AI + psychology-based assessments to help students:
            </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start gap-3"><CheckIcon /> <span className="text-gray-300">Discover their true strengths & interests</span></div>
            <div className="flex items-start gap-3"><CheckIcon /> <span className="text-gray-300">Explore different career paths</span></div>
            <div className="flex items-start gap-3"><CheckIcon /> <span className="text-gray-300">Learn real skills for the real world</span></div>
            <div className="flex items-start gap-3"><CheckIcon /> <span className="text-gray-300">Get personalized career roadmap</span></div>
            <div className="flex items-start gap-3"><CheckIcon /> <span className="text-gray-300">Access mentors and hands-on guidance</span></div>
        </div>
        <div className="mt-12 text-center">
            <a href="#career-finder" className="inline-block bg-orange-500 text-white font-bold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out">
                Start Your Career Journey 🚀
            </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAptrowin;
