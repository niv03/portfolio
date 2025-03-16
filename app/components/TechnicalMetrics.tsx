'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsSection() {
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
              <p className="text-green-500 mb-2">$ projects --list</p>
              <h2 className="text-3xl font-bold mb-8 text-gray-200">My Projects</h2>

              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                {/* Disaster Watch */}
                <div className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-xl md:text-2xl flex items-center">Disaster Watch
                    <a href="https://github.com/niv03/disaster-watch" target="_blank" className="ml-2 text-gray-400 hover:text-green-500">
                      <FaGithub />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">React, Express.js, Claude 3, Bedrock</span>
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    <li>Web app verifying disaster data using <span className="text-green-500">Logistic Regression</span> & <span className="text-green-500">RAG</span>.</li>
                    <li>Implemented <span className="text-green-500">SOS Chat Bot</span> with <span className="text-green-500">NLP</span> & Mapbox dynamic map.</li>
                    <li>Used <span className="text-green-500">AWS Bedrock</span> for LLM deployment & prompt engineering.</li>
                    <li>3rd Place Winner at <span className="text-green-500">AWS Wildfire Solution Hackathon</span>, Edmonton 2024.</li>
                  </ul>
                </div>

                {/* NexZones */}
                <div className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-xl md:text-2xl flex items-center">NexZones
                    <a href="https://github.com/niv03/nexzones" target="_blank" className="ml-2 text-gray-400 hover:text-green-500">
                      <FaGithub />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">TypeScript, Next.js, Vite, Rete.js, Django, Docker, CyberaRAC</span>
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    <li>Developed visual novel framework with video editor & asset manager.</li>
                    <li>Enhanced responsiveness with <span className="text-green-500">TypeScript</span>, <span className="text-green-500">Rete.js</span>, & <span className="text-green-500">Vite</span>.</li>
                    <li>Built on open-source <span className="text-green-500">Vue 3</span> editor with <span className="text-green-500">FFmpeg</span> for video processing.</li>
                    <li>Deployed using <span className="text-green-500">Docker</span>, <span className="text-green-500">CyberaRAC</span>, & <span className="text-green-500">GitHub Actions</span>.</li>
                  </ul>
                </div>

                {/* OneStopShop */}
                <div className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-xl md:text-2xl flex items-center">OneStopShop
                    <a href="https://github.com/niv03/skysync" target="_blank" className="ml-2 text-gray-400 hover:text-green-500">
                      <FaGithub />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">Java, Android Studio, Firebase, JUnit, Git</span>
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    <li>Developed an <span className="text-green-500">Android</span> app in <span className="text-green-500">Java</span> for inventory management with OAuth2 Google Sign-In and Firebase for
					secure data storage</li>
                    <li>Utilized <span className="text-green-500">Git</span> with branching strategies for version control and collaborative development.</li>
                    <li>Ensured reliability with <span className="text-green-500">JUnit</span> for unit testing and <span className="text-green-500">Espresso</span> for UI integration testing</li>
                  </ul>
                </div>

				{/* SkySync */}
                <div className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-xl md:text-2xl flex items-center">SkySync
                    <a href="https://github.com/niv03/skysync" target="_blank" className="ml-2 text-gray-400 hover:text-green-500">
                      <FaGithub />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">React, Leaflet, Bootstrap</span>
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    <li>Interactive weather app with real-time geospatial data visualization.</li>
                    <li>Integrated <span className="text-green-500">Leaflet</span> for mapping & <span className="text-green-500">Chart.js</span> for temperature charts.</li>
                    <li>City autocomplete feature via <span className="text-green-500">Google Places API</span>.</li>
                    <li>Responsive design with <span className="text-green-500">Bootstrap</span> & <span className="text-green-500">Axios</span> for HTTP requests.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
