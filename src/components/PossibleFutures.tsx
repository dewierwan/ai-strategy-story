
import React from 'react';
import { Atom, Shield, Network, Zap, Scale } from 'lucide-react';

const PossibleFutures = () => {
  const futures = [
    {
      title: "CERN for AI",
      subtitle: "International Research Collaboration",
      description: "Democracies pool resources in shared AI research facility",
      details: "Think: Manhattan Project but internationally governed",
      requirements: "International cooperation, technical standardisation, trust-building",
      icon: Atom,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "IAEA Model", 
      subtitle: "Verified Nonproliferation Regime",
      description: "Global monitoring and inspection of AI development",
      details: "Compute tracking enforces agreed limits",
      requirements: "Compute governance, international treaties, verification tech",
      icon: Shield,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Protected Pluralism",
      subtitle: "Defense Dominance", 
      description: "AI widely accessible but defensive tech outpaces offensive",
      details: '"d/acc" - decentralised defensive acceleration',
      requirements: "Massive investment in biosecurity, cybersecurity, democratic resilience",
      icon: Network,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Allied Superintelligence",
      subtitle: "Aligned AI Solves Coordination",
      description: "First aligned AGI helps prevent dangerous systems", 
      details: "Technical solution enables governance",
      requirements: "Solving alignment, maintaining control, wise deployment",
      icon: Zap,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Great Power Balance",
      subtitle: "Strategic Deterrence",
      description: "US-China mutual restraint through verified agreements",
      details: "Similar to nuclear arms control during Cold War", 
      requirements: "Diplomatic breakthroughs, domestic controls, verification systems",
      icon: Scale,
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Possible Futures
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Five potential pathways for navigating the AGI transition, each with distinct approaches and requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {futures.map((future, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${future.color} mb-6`}>
                <future.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{future.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4 italic">{future.subtitle}</p>
              
              <p className="text-slate-300 mb-4 leading-relaxed">{future.description}</p>
              <p className="text-slate-400 text-sm mb-6 italic">{future.details}</p>
              
              <div className="border-t border-slate-700 pt-4">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide font-medium">Requires:</p>
                <p className="text-slate-400 text-sm">{future.requirements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PossibleFutures;
