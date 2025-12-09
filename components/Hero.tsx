import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { RESUME_LINK, EMAIL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Hello World, I'm
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Dev <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Jariwala</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">
            Software Engineer
          </h2>
          
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Specializing in building exceptional digital experiences. Currently focused on 
            full-stack development, machine learning, and neuroimaging tools at NJIT.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Interview Me
            </a>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 text-slate-300 transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - Code Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Window Title Bar */}
            <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="flex-1 text-center text-xs text-slate-500 font-mono">developer.py</div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto bg-[#0d1117] text-slate-300">
              <div className="flex flex-col space-y-1">
                <div><span className="text-purple-400">class</span> <span className="text-yellow-300">DevJariwala</span>:</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="text-green-400">"Dev Jariwala"</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="text-green-400">"Software Engineer"</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.location = <span className="text-green-400">"Jersey City, NJ"</span></div>
                <div className="h-2"></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">get_skills</span>(self):</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> [</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Python"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"TypeScript"</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Machine Learning"</span>, <span className="text-green-400">"AWS"</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div>
                <div className="h-2"></div>
                <div><span className="text-slate-500"># Ready for the next challenge</span></div>
                <div>dev = DevJariwala()</div>
                <div>dev.work()</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;