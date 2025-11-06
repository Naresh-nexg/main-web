import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-bold">Aptrowin</div>
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            </div>
        </div>
        <div className="mt-6 border-t border-gray-800 pt-6 text-center text-gray-500">
            <p>© 2024 Aptrowin. Find Your Passion. Build Your Future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
