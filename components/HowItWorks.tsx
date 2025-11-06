import React from 'react';

const StepCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-700 text-orange-400 font-bold text-xl rounded-full border-2 border-orange-500/50">
                    {number}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

const HowItWorks: React.FC = () => {
    const steps = [
        { number: '01', title: 'Discover Yourself', description: 'Take aptitude, passion & personality tests + AI analysis' },
        { number: '02', title: 'Explore Careers', description: 'Compare career paths, salary insights, skills needed, growth' },
        { number: '03', title: 'Personalized Roadmap', description: 'Get a custom learning & career plan based on your strengths' },
        { number: '04', title: 'Learn Skills', description: 'Learn industry-relevant skills with curated content & assignments' },
        { number: '05', title: 'Get Mentorship', description: 'Get guidance from industry experts & AI career mentor' },
        { number: '06', title: 'Build Portfolio', description: 'Work on real-world projects to build your portfolio' },
    ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How Aptrowin Works
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map(step => <StepCard key={step.number} {...step} />)}
        </div>
        <div className="mt-12 text-center">
            <a href="#career-finder" className="inline-block bg-orange-600 text-white font-bold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
                Try Aptrowin Free
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
