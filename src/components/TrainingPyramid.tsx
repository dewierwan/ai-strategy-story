import React from 'react';
import { BookOpen, Target, Lightbulb, Shield, Globe, Settings, Server, Brain, Users, Wrench } from 'lucide-react';

const TrainingPyramid = () => {
  const level2Courses = [
    {
      title: "AGI safety strategy",
      icon: Shield,
      level3: [
        "Risk Assessment & Threat Modeling",
        "Safety Research Methodologies", 
        "Coordination & International Cooperation",
        "Policy Implementation Strategies"
      ]
    },
    {
      title: "AGI futures",
      icon: Globe,
      level3: [
        "Scenario Planning & Forecasting",
        "Economic Impact Analysis",
        "Social Transformation Studies",
        "Long-term Governance Models"
      ]
    },
    {
      title: "AI governance and policy",
      icon: Settings,
      level3: [
        "Regulatory Framework Design",
        "International AI Treaties",
        "Corporate Governance Standards",
        "Ethics & Compliance"
      ]
    },
    {
      title: "AI infrastructure",
      icon: Server,
      level3: [
        "Compute Security & Monitoring",
        "Data Center Governance",
        "Energy Systems for AI",
        "Supply Chain Risk Management"
      ]
    },
    {
      title: "AI models",
      icon: Brain,
      level3: [
        "Interpretability Techniques",
        "Safety Evaluations",
        "Alignment Research",
        "Control Mechanisms"
      ]
    },
    {
      title: "AI misuse defences",
      icon: Users,
      level3: [
        "CBRN Threat Detection",
        "Critical Infrastructure Protection",
        "Psychological Defense Systems",
        "Information Security"
      ]
    },
    {
      title: "Skills",
      icon: Wrench,
      level3: [
        "Machine Learning",
        "Policy Writing",
        "Technical Writing",
        "Advocacy & Communication"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How You Can Contribute
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A structured learning pathway to build expertise and contribute to AI safety efforts.
          </p>
        </div>

        <div className="space-y-12">
          {/* Level 1 */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-lg max-w-md w-full">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Level 1</h3>
              <p className="text-xl font-semibold">Future of AI Course</p>
              <p className="text-blue-100 mt-2">Foundation knowledge for everyone</p>
            </div>
          </div>

          {/* Level 2 */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Level 2</h3>
              <p className="text-slate-600">Specialized domain knowledge</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {level2Courses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md text-center">
                  <div className="bg-slate-100 p-3 rounded-lg inline-flex mb-4">
                    <course.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{course.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Level 3 */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Level 3</h3>
              <p className="text-slate-600">Specialized expertise and practical skills</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {level2Courses.map((course, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg p-3 inline-flex mb-2">
                      <course.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm">{course.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {course.level3.map((level3Course, level3Index) => (
                      <div key={level3Index} className="bg-slate-50 rounded-lg p-3 border border-slate-200 hover:border-slate-300 transition-colors">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700 leading-tight">{level3Course}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingPyramid;
