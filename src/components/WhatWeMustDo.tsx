import React from 'react';
import { Shield, Search, Lock, Users, Globe, Sparkles } from 'lucide-react';

const WhatWeMustDo = () => {
  const actions = [
    {
      title: "Prevent the training of dangerous AI models",
      description: "Prevent AI systems which threaten human civilisation from being built in the first place through compute controls, governance frameworks, and international cooperation. This defensive line focuses on tracking AI development globally, setting safety standards, and ensuring only beneficial AI systems are trained.",
      icon: Shield,
      courses: [
        "International AI governance",
        "National AI governance",
        "Compute governance",
        "AI capability forecasting and early warning",
        "Safe by design AI models"
      ],
      color: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-100",
      iconBg: "bg-emerald-600"
    },
    {
      title: "Detect dangerous AI capabilities and actions",
      description: "Build the technical and institutional infrastructure to identify dangerous AI capabilities before they cause harm. This includes developing evaluation methods, interpretability tools, and early warning systems to understand what AI systems can do and communicate risks to decision-makers.",
      icon: Search,
      courses: [
        "AI Interpretability",
        "AI Evaluations and Red-Teaming",
        "Risk Communications",
        "Compute Governance",
        "Incident Response and Whistleblower Systems"
      ],
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      title: "Constrain dangerous AI actions",
      description: "Create multiple layers of protection to ensure AI systems cannot cause catastrophic harm, even if they're misaligned or compromised. This last line of defense includes alignment techniques, control mechanisms, security measures, and robustness against misuse.",
      icon: Lock,
      courses: [
        "AI Alignment",
        "AI Control",
        "Model Parameter Security",
        "AI Robustness and Jailbreak Defence"
      ],
      color: "from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-600"
    },
    {
      title: "Withstand dangerous AI actions",
      description: "Prepare society to survive and recover from AI-enabled attacks by building resilient defenses across all domains. This includes protecting against engineered pandemics, securing critical infrastructure from cyberattacks, defending democratic institutions from manipulation, and developing crisis response capabilities.",
      icon: Users,
      courses: [
        "Biodefence and Pandemic Preparedness",
        "Cybersecurity for Critical National Infrastructure",
        "Cognitive Security",
        "Political Security: Hardening Democracy from AI Takeover",
        "Crisis Response"
      ],
      color: "from-orange-50 to-amber-50",
      borderColor: "border-orange-100",
      iconBg: "bg-orange-600"
    },
    {
      title: "Adapt and thrive in the age of AGI",
      description: "Navigate the profound societal transformation that AGI will bring while ensuring humanity flourishes. This involves reimagining economics and governance for a post-work world, preventing power concentration, and helping humanity find meaning and purpose when AI surpasses human capabilities.",
      icon: Globe,
      courses: [
        "Managing the AGI Transition",
        "Reimagining Governance and the Social Contract",
        "Post-AGI Economics and Wealth Distribution",
        "Pursuing Human Flourishing"
      ],
      color: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-100",
      iconBg: "bg-teal-600"
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div key={index} className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 border ${action.borderColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`${action.iconBg} p-3 rounded-lg flex-shrink-0`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{action.title}</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">{action.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">Courses</h4>
                <ul className="space-y-2">
                  {action.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeMustDo;
