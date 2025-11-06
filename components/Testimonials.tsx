import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700/50">
            <p className="text-gray-300 italic">"{quote}"</p>
            <p className="mt-4 font-semibold text-white text-right">- {author}</p>
        </div>
    );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-400">(Future Add)</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard quote="I discovered I'm made for product design — never knew it before Aptrowin." author="Aisha, 11th Grade" />
            <TestimonialCard quote="It helped me choose the right degree & course confidently." author="Rohan, College Freshman" />
            <TestimonialCard quote="I built my first real project and got internship calls!" author="Priya, B.Tech Student" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
