import React from 'react';
import { Building2, Globe, Users, BookOpen, Shield, Search } from 'lucide-react';

const JobsAndOrganisations = () => {
  const organizations = [
    {
      title: "Governments",
      description: "Shaping policy, security, and regulation",
      examples: "e.g. US OSTP, UK DSIT, EU AI Office",
      icon: Shield,
      color: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-100",
      iconBg: "bg-emerald-600"
    },
    {
      title: "International Bodies",
      description: "Building governance and standards",
      examples: "e.g. UN, OECD, GPAI, IAEA-style proposals",
      icon: Globe,
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      title: "AI Companies",
      description: "Researching alignment, building evals, improving security",
      examples: "e.g. Anthropic, DeepMind, OpenAI, Mistral",
      icon: Building2,
      color: "from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-600"
    },
    {
      title: "Nonprofits and Think Tanks",
      description: "Developing strategy and interventions",
      examples: "e.g. GovAI, Rethink Priorities, RAND, Convergence",
      icon: Users,
      color: "from-orange-50 to-amber-50",
      borderColor: "border-orange-100",
      iconBg: "bg-orange-600"
    },
    {
      title: "Research Institutes",
      description: "Doing foundational technical work",
      examples: "e.g. Redwood, Apollo Research, AISI, METR, ARC, FAR",
      icon: Search,
      color: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-100",
      iconBg: "bg-teal-600"
    },
    {
      title: "Fellowships and Training Programmes",
      description: "Launching careers and collaborations",
      examples: "e.g. BlueDot, SERI MATS, ISF, Century Fellowship",
      icon: BookOpen,
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
            Jobs and Organisations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Work on AI safety is growing fast. You can contribute by joining or collaborating with:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className={`bg-gradient-to-br ${org.color} rounded-2xl p-6 border ${org.borderColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`${org.iconBg} p-3 rounded-lg flex-shrink-0`}>
                  <org.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{org.title}</h3>
                  <p className="text-slate-700 mb-2">{org.description}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">{org.examples}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200 shadow-sm">
            <span className="text-lg">👉</span>
            <span className="text-slate-800 font-medium">Want to explore your path? Start here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsAndOrganisations;
