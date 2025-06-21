
import React from 'react';
import { BookOpen, Users, Lightbulb, Target } from 'lucide-react';

const TrainingPyramid = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How You Can Contribute
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A structured learning pathway to build expertise and contribute to AI safety efforts.
          </p>
        </div>

        <div className="space-y-8">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AGI safety strategy",
              "AGI futures", 
              "AI governance and policy",
              "AI infrastructure (data, data centres, compute, energy)",
              "AI models (interpretability, evals, alignment, control)",
              "AI misuse defences (CBRN, CNI, psych)"
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
                <div className="flex items-start gap-3">
                  <div className="bg-slate-100 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Level 2</h4>
                    <p className="text-slate-700">{course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Level 3 */}
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl p-8 border-2 border-slate-300">
            <div className="text-center mb-6">
              <Lightbulb className="w-10 h-10 mx-auto mb-3 text-slate-600" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Level 3</h3>
              <p className="text-slate-600">Specialized expertise and practical skills</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Deep Dives</h4>
                <p className="text-slate-700">Multiple specialized courses for each Level 2 topic, providing in-depth knowledge and practical applications.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Skills Development</h4>
                <div className="flex flex-wrap gap-2">
                  {["ML", "Writing", "Policy", "Advocacy", "Leadership"].map((skill, index) => (
                    <span key={index} className="bg-slate-300 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                  <span className="text-slate-500">...</span>
                </div>
              </div>
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
