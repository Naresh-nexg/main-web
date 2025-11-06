import React from 'react';
import Header from './Header';
import Footer from './Footer';

const CourseCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/10 text-orange-400 mb-5 border-2 border-orange-500/20 self-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white text-center">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm text-center flex-grow">{description}</p>
      <button disabled className="mt-6 bg-gray-700 text-gray-400 font-semibold px-5 py-2 rounded-md cursor-not-allowed w-full">
        Coming Soon
      </button>
    </div>
  );
};

const coursesData = [
    {
        title: "How to Find Your Passion",
        description: "A step-by-step guide to discover your interests, strengths, and what truly excites you.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
        title: "How to Turn Passion into Skill",
        description: "Transform your passion into a valuable skill with practical projects and guided learning paths.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 11.25l-2.617 2.618a1.5 1.5 0 000 2.121l2.121 2.121a1.5 1.5 0 002.121 0l2.618-2.617z" /></svg>
    },
    {
        title: "How to Turn Skill into Career",
        description: "Learn how to build a portfolio, find opportunities, and launch your dream career.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 00-12.04 0m12.04 0v-4.82m0 4.82l-5.84-2.56M12 2.25a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 0012 20.25a2.25 2.25 0 002.25-2.25V4.5A2.25 2.25 0 0012 2.25z" /></svg>
    },
];

const OnlineCourses: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
                <a href="" className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </a>
            </div>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    Start Your Journey With Our Courses
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    These foundational courses are designed to give you clarity and direction, no matter where you are in your career discovery journey.
                </p>
            </div>

            <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursesData.map(course => (
                <CourseCard key={course.title} {...course} />
            ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineCourses;