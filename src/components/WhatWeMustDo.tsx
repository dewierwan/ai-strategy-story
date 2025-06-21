import React from 'react';
import { Shield, Search, Lock, Users, Globe, Sparkles } from 'lucide-react';

const WhatWeMustDo = () => {
  const actions = [
    {
      title: "Prevent the training of dangerous AI models",
      icon: Shield,
      items: [
        "Compute governance/nonproliferation",
        "International cooperation and deterrence", 
        "Agent foundations",
        "Regulations, laws, corporate governance, licensing"
      ],
      color: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-100",
      iconBg: "bg-emerald-600"
    },
    {
      title: "Detect dangerous AI capabilities and actions",
      icon: Search,
      items: [
        "Evaluations",
        "Interpretability",
        "Honeypots", 
        "ELK",
        "Incident reporting and disclosures",
        "Whistleblower protections"
      ],
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      title: "Constrain dangerous AI actions",
      icon: Lock,
      items: [
        "Cloud/data centre security",
        "AI alignment for users, developers, and humanity",
        "Robustness, output filtering, trust and safety"
      ],
      color: "from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-600"
    },
    {
      title: "Withstand dangerous AI actions",
      icon: Users,
      items: [
        "CBRN defence",
        "CNI defence",
        "Psychological defence"
      ],
      color: "from-orange-50 to-amber-50",
      borderColor: "border-orange-100",
      iconBg: "bg-orange-600"
    },
    {
      title: "Adapt to AGI",
      icon: Globe,
      items: [
        "Economic system",
        "Social contract",
        "Democracy and power concentration",
        "Global peace"
      ],
      color: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-100",
      iconBg: "bg-teal-600"
    },
    {
      title: "Thrive in the age of AGI",
      icon: Sparkles,
      items: [
        "Building a future where humanity flourishes alongside artificial general intelligence",
        "Maximizing human potential and wellbeing",
        "Preserving human agency and purpose",
        "Creating abundant opportunities for growth"
      ],
      color: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-100",
      iconBg: "bg-yellow-600"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What We Must Do
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive strategy to address AI safety challenges across multiple dimensions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div key={index} className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 border ${action.borderColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`${action.iconBg} p-3 rounded-lg flex-shrink-0`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{action.title}</h3>
              </div>
              <ul className="space-y-3">
                {action.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeMustDo;
