import React, { useState } from 'react';
import { getPassionRecommendations } from '../services/geminiService';
import { GeminiResponse, PassionRecommendation } from '../types';
import LoadingSpinner from './LoadingSpinner';

const ResultCard: React.FC<{ item: PassionRecommendation }> = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700/50 transform hover:-translate-y-1 transition-transform duration-300">
      <h3 className="text-2xl font-bold text-orange-400">{item.passion}</h3>
      <p className="mt-3 text-gray-300">{item.description}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-white mb-2">Skills to Develop</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {item.skills_to_develop.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Potential Careers</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {item.potential_careers.map((career, i) => <li key={i}>{career}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Learning Resources</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {item.learning_resources_suggestions.map((res, i) => <li key={i}>{res}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CareerFinder: React.FC = () => {
  const [interests, setInterests] = useState('');
  const [result, setResult] = useState<GeminiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!interests.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await getPassionRecommendations(interests);
      setResult(response);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="career-finder" className="py-20 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Your Career Journey Starts Here
          </h2>
          <p className="mt-4 text-lg text-gray-400">Stop guessing your future — build it with clarity.</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <textarea
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="Tell us about your hobbies, interests, and what you enjoy doing to get started..."
              className="w-full h-40 p-4 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
              disabled={isLoading}
            />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 disabled:bg-orange-800 disabled:cursor-not-allowed disabled:scale-100"
                >
                {isLoading ? (
                    <>
                    <LoadingSpinner />
                    <span className="ml-2">Analyzing...</span>
                    </>
                ) : (
                    '🎯 Start Free Test'
                )}
                </button>
                <a
                    href="#waitlist"
                    className="w-full flex items-center justify-center bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    📥 Join Waitlist
                </a>
            </div>
          </form>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          {error && <p className="text-center text-red-400 bg-red-900/50 p-4 rounded-md">{error}</p>}
          {result && (
            <div className="space-y-8">
              {result.recommendations.map((item, index) => (
                <ResultCard key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerFinder;
