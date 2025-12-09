import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Star } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Degree Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-200 flex items-center gap-2 mb-6">
              <GraduationCap className="text-blue-500" /> Degrees
            </h3>
            {EDUCATION_DATA.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                </div>
                <div className="text-slate-300 font-medium mb-3">{edu.degree}</div>
                <div className="flex justify-between items-center text-sm text-slate-400 mt-2">
                  <span>{edu.location}</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold shadow-sm shadow-emerald-900/20">
                    <Star size={14} className="fill-current" />
                    {edu.details}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications List */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 flex items-center gap-2 mb-6">
              <Award className="text-blue-500" /> Certifications
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <ul className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className="mt-1 p-1 bg-blue-500/10 rounded-full text-blue-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                    <span>{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;