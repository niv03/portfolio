'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {/* Disaster Watch */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">Disaster Watch</h3>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-gray-300">React, Express.js, Claude 3, Bedrock</h4>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>• Created a web application to verify disaster-related information using Logistic Regression and Retrieval-Augmented Generation (RAG) as part of a team.</li>
                <li>• Implemented an SOS Chat Bot with NLP and a dynamic disaster impact map using Mapbox.</li>
                <li>• Used AWS Bedrock to deploy a LLM for generating comprehensive disaster reports and prompt engineering.</li>
                <li>• Won 3rd Place at the AWS Wildfire Solution Hackathon, Edmonton, July 2024.</li>
              </ul>
            </div>
          </div>

          {/* NexZones */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">NexZones</h3>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-gray-300">TypeScript, Next.js, Vite, Rete.js, Django, Docker, CyberaRAC</h4>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>• Collaborated with a team to develop a visual novel game framework with an integrated video editor, custom asset management system, and scene-based visual scripting system.</li>
                <li>• Enhanced frontend responsiveness using TypeScript, Rete.js for node-based scripting, and Vite for efficient bundling and hot reloading.</li>
                <li>• Built on an open-source Vue 3 video editor, implementing draggable attributes, media import/export, and utilizing FFmpeg for video processing.</li>
                <li>• Set up a deployment pipeline with Docker, CyberaRAC, and GitHub Actions.</li>
              </ul>
            </div>
          </div>

          {/* SkySync */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">SkySync</h3>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-gray-300">React, Leaflet, Bootstrap</h4>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>• Engineered an interactive weather application using React for real-time geospatial weather data visualization.</li>
                <li>• Integrated Leaflet for geospatial mapping and Chart.js for dynamic temperature charts.</li>
                <li>• Implemented user-centric features like city autocomplete using Google Places API.</li>
                <li>• Utilized Bootstrap for responsive design, Axios for asynchronous HTTP requests, and jQuery for DOM manipulation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
