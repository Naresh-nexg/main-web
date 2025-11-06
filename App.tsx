import React from 'react';
import HomePage from './pages/HomePage';
import OnlineCoursesPage from './pages/OnlineCoursesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FeaturesPage from './pages/FeaturesPage';

const App: React.FC = () => {
  // Switch to hash-based routing for compatibility with the preview environment
  const { hash } = window.location;

  if (hash === '#/online-courses') {
    return <OnlineCoursesPage />;
  }
  
  if (hash === '#/how-it-works') {
    return <HowItWorksPage />;
  }
  
  if (hash === '#/features') {
    return <FeaturesPage />;
  }

  // Default to HomePage for the root path or an empty hash
  return <HomePage />;
};

export default App;