import React from 'react';
import { BookOpen, Target, Lightbulb, Shield, Globe, Settings, Server, Brain, Users, Wrench } from 'lucide-react';

const TrainingPyramid = () => {
  const level2Courses = [
    {
      title: "AGI Strategy and Futures",
      description: "For strategists, entrepreneurs, and systems thinkers",
      icon: Shield,
      level3: [
        "Geopolitics of AGI",
        "AI capability forecasting and early warning",
        "Managing the AGI transition",
        "Reimagining governance and the social contract",
        "Post-AGI economics and wealth distribution",
        "Pursuing human flourishing"
      ]
    },
    {
      title: "AI Governance",
      description: "For policymakers, civil servants, and institutional leaders",
      icon: Settings,
      level3: [
        "International AI governance",
        "National AI governance",
        "Compute governance",
        "Corporate governance",
        "Crisis response",
        "Risk communications",
        "Advocacy skills"
      ]
    },
    {
      title: "Technical AI Safety",
      description: "For researchers, engineers, and ML practitioners",
      icon: Brain,
      level3: [
        "AI interpretability",
        "AI evaluations and red-teaming",
        "AI Alignment",
        "AI Control",
        "AI Robustness and Jailbreak Defence",
        "Safe by design AI models",
        "Model Parameter Security",
        "Training data filtering",
        "Machine Learning skills"
      ]
    },
    {
      title: "Security & Resilience",
      description: "For security professionals and resilience builders",
      icon: Users,
      level3: [
        "Biodefence and pandemic preparedness",
        "Cybersecurity for critical national infrastructure",
        "Cognitive security",
        "Political Security: Hardening democracy from AI takeover"
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
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-lg max-w-md w-full cursor-pointer hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl"
              onClick={() => window.open('https://bluedot.org/courses/future-of-ai', '_blank', 'noopener,noreferrer')}
            >
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
                <div key={index} className="space-y-6">
                  {/* Level 2 Course */}
                  <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg inline-flex mb-4">
                        <course.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{course.title}</h4>
                      <p className="text-sm text-slate-600 italic mb-3">{course.description}</p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Level 2 Course
                      </span>
                    </div>
                  </div>

                  {/* Level 3 Specializations */}
                  <div>
                    <div className="text-center mb-4">
                      <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Level 3 Courses
                      </span>
                    </div>
                    <div className="space-y-3">
                      {course.level3.map((level3Course, level3Index) => (
                        <div key={level3Index} className="group relative bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 border border-slate-200 hover:border-blue-300 rounded-lg p-3 transition-all duration-200 hover:shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{level3Index + 1}</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-tight">
                                {level3Course}
                              </h5>
                            </div>
                          </div>
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
          <a 
            href="https://bluedot.org/courses/future-of-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingPyramid;
