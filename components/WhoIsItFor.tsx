import React from 'react';

const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Who is Aptrowin For?
          </h2>
        </div>
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50">🎓 School Students (8th–12th)</div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50">👨‍🎓 College Students</div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50">🧠 Students confused about career options</div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50">🚀 Students who want guidance + skills + roadmap</div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50">🤯 Students tired of generic counsellors and boring courses</div>
        </div>
        <div className="mt-10 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 border-l-4 border-orange-500 pl-4 italic">
                Whether you dream of tech, design, business, arts or something unique — Aptrowin helps you build the right path.
            </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
