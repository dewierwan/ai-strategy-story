import React from 'react';
import { AlertTriangle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleLearnMore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-6 py-3 text-red-700">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-medium">Critical AI Safety Challenge</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Navigating the
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AGI </span>
          Transition
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Understanding the threats, building the solutions, and shaping the future of artificial general intelligence for humanity's benefit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleLearnMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
