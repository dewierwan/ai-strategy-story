import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';

const WhyThisMatters = () => {
  const trends = [
    "Timeline to AGI: Leading AI companies and prediction markets converge on AGI arriving by 2027-2035",
    "Accelerating AI race: US tech giants invest $200B+ annually whilst competing with China, prioritising speed over safety",
    "Declining international order: Weakening global cooperation undermines our ability to govern AI"
  ];

  const threats = [
    "Human/AI takeover: Malevolent actors could use superintelligence to seize unprecedented power, ending democracy",
    "Catastrophic terrorism: AI democratises weapons creation—from engineered pandemics to infrastructure attacks",
    "Great power conflict: AI arms race risks triggering aggression between nations and reducing de-escalation windows"
  ];

  return (
    <section className="py-20 px-6 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why This Matters
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The development of AGI presents unprecedented challenges that require immediate attention and coordinated global response.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Trends</h3>
            </div>
            <ul className="space-y-4">
              {trends.map((trend, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">{trend}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Threats</h3>
            </div>
            <ul className="space-y-4">
              {threats.map((threat, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">{threat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;
