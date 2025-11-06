import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// A more detailed course card for the main courses page
const CourseCard: React.FC<{ title: string; description: string; icon: React.ReactNode; category: string; }> = ({ title, description, icon, category }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/10 text-orange-400 border-2 border-orange-500/20">
          {icon}
        </div>
        <span className="bg-gray-700 text-orange-400 text-xs font-semibold px-2.5 py-1 rounded-full">{category}</span>
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm flex-grow">{description}</p>
      <button disabled className="mt-6 bg-gray-700 text-gray-400 font-semibold px-5 py-2 rounded-md cursor-not-allowed w-full">
        Coming Soon
      </button>
    </div>
  );
};

const foundationalCourses = [
    {
        title: "How to Find Your Passion",
        description: "A step-by-step guide to discover your interests, strengths, and what truly excites you.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
        category: "Foundational"
    },
    {
        title: "How to Turn Passion into Skill",
        description: "Transform your passion into a valuable skill with practical projects and guided learning paths.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 11.25l-2.617 2.618a1.5 1.5 0 000 2.121l2.121 2.121a1.5 1.5 0 002.121 0l2.618-2.617z" /></svg>,
        category: "Foundational"
    },
    {
        title: "How to Turn Skill into Career",
        description: "Learn how to build a portfolio, find opportunities, and launch your dream career.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 00-12.04 0m12.04 0v-4.82m0 4.82l-5.84-2.56M12 2.25a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 0012 20.25a2.25 2.25 0 002.25-2.25V4.5A2.25 2.25 0 0012 2.25z" /></svg>,
        category: "Foundational"
    },
];

const advancedCourses = [
    {
        title: "Data Science for Beginners",
        description: "An introduction to the world of data, learning Python with Pandas, and creating insightful visualizations.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
        category: "Advanced"
    },
    {
        title: "Introduction to UI/UX Design",
        description: "Learn the fundamentals of user-centric design, wireframing, and prototyping with Figma.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
        category: "Advanced"
    },
    {
        title: "Digital Marketing Fundamentals",
        description: "Master the basics of SEO, content marketing, and social media strategy to grow any business online.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>,
        category: "Advanced"
    },
];

const OnlineCoursesPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
                <a href="/#" className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </a>
            </div>
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                    Explore Our Courses
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                    Our courses are designed to provide you with the clarity, skills, and confidence to build your dream career.
                </p>
            </div>
            
            <div className="mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white border-l-4 border-orange-500 pl-4">Foundational Courses</h2>
                <p className="mt-2 text-gray-400">Start here to discover your path and build a strong base for your future career.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {foundationalCourses.map(course => (
                        <CourseCard key={course.title} {...course} />
                    ))}
                </div>
            </div>
            
            <div className="mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white border-l-4 border-orange-500 pl-4">Advanced Skill Tracks</h2>
                <p className="mt-2 text-gray-400">Dive deeper into specific career paths with these specialized learning tracks.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advancedCourses.map(course => (
                        <CourseCard key={course.title} {...course} />
                    ))}
                </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineCoursesPage;