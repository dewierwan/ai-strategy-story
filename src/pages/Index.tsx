
import React from 'react';
import { AlertTriangle, Shield, Users, Zap, Globe, BookOpen } from 'lucide-react';
import Hero from '../components/Hero';
import WhyThisMatters from '../components/WhyThisMatters';
import WhatWeMustDo from '../components/WhatWeMustDo';
import PossibleFutures from '../components/PossibleFutures';
import TrainingPyramid from '../components/TrainingPyramid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero />
      <WhyThisMatters />
      <WhatWeMustDo />
      <PossibleFutures />
      <TrainingPyramid />
    </div>
  );
};

export default Index;
