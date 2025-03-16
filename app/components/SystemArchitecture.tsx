'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono">
              <p className="text-green-500 mb-2">$ experience --list</p>
              <h2 className="text-3xl font-bold mb-8 text-gray-200">Work Experience</h2>

              {/* Dynamic Experience Cards */}
              {[
                {
                  title: 'Undergraduate Teaching Assistant',
                  company: 'University of Alberta',
                  location: 'Edmonton, AB 🇨🇦',
                  duration: 'Sep 2024 – Dec 2024',
                  impact: [
                    'Improved assignment grading consistency with clear evaluation rubrics.',
                    'Enhanced student understanding with customized guidance on CMPUT 300 concepts.'
                  ],
                  tech: ['Evaluation Criteria', 'CMPUT 300', 'Student Support']
                },
                {
                  title: 'Software Developer Intern',
                  company: 'Colaberry',
                  location: 'Boston, US 🇺🇸',
                  duration: 'May 2024 – Aug 2024',
                  impact: [
                    'Increased data processing speed by 60% using a Python + OpenAI pipeline.',
                    'Cut manual data transformation by 70% with SQL automation.',
                    'Deployed dynamic mapping tool on AWS Amplify to enhance user interaction.'
                  ],
                  tech: ['Python', 'OpenAI', 'Astro', 'AWS Amplify', 'SQL']
                },
                {
                  title: 'Software Developer Intern',
                  company: 'DigiHunk Technologies',
                  location: 'Delhi, India 🇮🇳',
                  duration: 'May 2023 – Aug 2023',
                  impact: [
                    'Enhanced page load speed by 30% with optimized React components.',
                    'Built a real-time chat system in Flutter with Firebase integration.',
                    'Reduced message delivery time by 60% via efficient REST API design.'
                  ],
                  tech: ['React', 'Flutter', 'Firebase', 'Django', 'PostgreSQL']
                }
              ].map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 mb-6"
                >
                  <h3 className="font-semibold text-xl md:text-2xl">{exp.title}</h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">{exp.company}</span> | {exp.location} | {exp.duration}
                  </p>
                  <p className="text-green-500">$ impact</p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    {exp.impact.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <p className="text-green-500 mt-4">$ tech-stack</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <p className="text-green-500 mt-8">$ uptime</p>
              <p className="text-gray-300">Active Developer Since: 2021</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
