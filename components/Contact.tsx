import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            I'm currently looking for full-time opportunities. Whether you have a question
            or just want to say hi, feel free to drop me a message!
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 mb-12"
          >
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Dev Jariwala. Built with React & Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;