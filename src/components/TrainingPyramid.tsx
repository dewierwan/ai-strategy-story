import React from 'react';
import { BookOpen, Target, Lightbulb, Shield, Globe, Settings, Server, Brain, Users, Wrench } from 'lucide-react';

const TrainingPyramid = () => {
  const level2Courses = [
    {
      title: "AGI Safety Strategy",
      icon: Shield,
      level3: [
        "Risk Assessment & Threat Modeling",
        "Safety Research Methodologies", 
        "Coordination & International Cooperation",
        "Policy Implementation Strategies"
      ]
    },
    {
      title: "AGI Futures",
      icon: Globe,
      level3: [
        "Scenario Planning & Forecasting",
        "Economic Impact Analysis",
        "Social Transformation Studies",
        "Long-term Governance Models"
      ]
    },
    {
      title: "AI Governance and Policy",
      icon: Settings,
      level3: [
        "Regulatory Framework Design",
        "International AI Treaties",
        "Corporate Governance Standards",
        "Ethics & Compliance"
      ]
    },
    {
      title: "AI Infrastructure",
      icon: Server,
      level3: [
        "Compute Security & Monitoring",
        "Data Center Governance",
        "Energy Systems for AI",
        "Supply Chain Risk Management"
      ]
    },
    {
      title: "AI Models",
      icon: Brain,
      level3: [
        "Interpretability Techniques",
        "Safety Evaluations",
        "Alignment Research",
        "Control Mechanisms"
      ]
    },
    {
      title: "AI Misuse Defences",
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
              <h3 className="text-2xl font-bold mb-2">Future of AI Course</h3>
              <p className="text-xl font-semibold">Foundation knowledge for everyone</p>
              <p className="text-blue-100 mt-2">Level 1 Course</p>
            </div>
          </div>

          {/* Level 2 & 3 Merged */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Advanced courses</h3>
              <p className="text-slate-600">Domain courses with optional advanced tracks</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {level2Courses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
                  {/* Level 2 Course */}
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg inline-flex mb-4">
                      <course.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{course.title}</h4>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Level 2 Course
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-200 mb-4"></div>

                  {/* Level 3 Specializations */}
                  <div>
                    <div className="text-center mb-3">
                      <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Level 3 Courses
                      </span>
                    </div>
                    <div className="space-y-2">
                      {course.level3.map((level3Course, level3Index) => (
                        <div key={level3Index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                          <span className="text-slate-400 text-sm mt-1">↳</span>
                          <span className="text-sm text-slate-600 leading-relaxed">{level3Course}</span>
                        </div>
                      ))}
                    </div>
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
