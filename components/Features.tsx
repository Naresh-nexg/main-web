import React, { useState } from 'react';

const FeatureCard: React.FC<{ title: string; description: string, icon: React.ReactNode }> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 ease-in-out flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/10 text-orange-400 mb-5 border-2 border-orange-500/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const featuresData = [
    {
        title: "AI Mentor",
        description: "Personalized advice, answers to your career questions, and clarity 24/7.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
        title: "AI Roadmapper",
        description: "Get a custom learning plan and career timeline based on your unique strengths.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 3v4.5A2.25 2.25 0 011.5 9.75V8.25A2.25 2.25 0 013.75 6v-3m16.5 0v4.5A2.25 2.25 0 0022.5 9.75V8.25A2.25 2.25 0 0020.25 6v-3" /></svg>
    },
    {
        title: "AI Skill & Job Match",
        description: "Explore 200+ careers and see how your skills match to real-time job openings.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
    },
    {
        title: "AI Skill Teacher & Courses",
        description: "Learn industry skills through AI-guided projects and curated online courses.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 18.375c.503 0 .985-.093 1.436-.275M8.25 12.75a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM12 21.75c-4.142 0-7.5-3.358-7.5-7.5S7.858 6.75 12 6.75s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    },
    {
        title: "Strength & Passion Test",
        description: "Psychology-backed assessments to discover your unique abilities and interests.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008c0-.414.336-.75.75-.75z" /></svg>
    },
    {
        title: "Portfolio Builder",
        description: "Showcase your real-world projects, certificates, and achievements.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    }
];

const Features: React.FC = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <section id="features" className="py-20 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                The Aptrowin AI Engine
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Our platform is built on a powerful set of AI tools designed to give you clarity and a competitive edge. Explore our core features to see how it works.
            </p>
        </div>

        {!showFeatures && (
            <div className="mt-12 text-center">
                <button
                    onClick={() => setShowFeatures(true)}
                    className="inline-block bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500"
                >
                    Explore Core Features
                </button>
            </div>
        )}

        {showFeatures && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in">
            {featuresData.map(feature => (
                <FeatureCard key={feature.title} {...feature} />
            ))}
            </div>
        )}
        <style>{`
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.6s ease-in-out forwards;
            }
        `}</style>
      </div>
    </section>
  );
};

export default Features;