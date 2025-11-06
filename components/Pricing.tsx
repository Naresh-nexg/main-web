import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="waitlist" className="py-20 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-gray-800 p-10 rounded-lg border-2 border-dashed border-orange-500/50 shadow-2xl shadow-orange-500/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Early-Bird Access
            </h2>
            <p className="mt-4 text-lg text-gray-300">
                🚀 <span className="font-bold">Free during beta</span> 🎁 Extra bonuses for first 500 users
            </p>
            <div className="mt-8">
                <a href="#" className="inline-block bg-orange-500 text-white font-bold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out">
                    Join Waitlist
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
