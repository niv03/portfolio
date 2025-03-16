// 'use client';

// import { motion } from 'framer-motion';

// export default function SystemArchitecture() {
// 	return (
// 		<section className="py-20 px-4">
// 			<div className="max-w-6xl mx-auto">
// 				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
// 					Experience
// 				</motion.h2>

// 				<div className="grid grid-cols-1 gap-8">
// 					{[
// 						{
// 							title: 'Software Developer Intern',
// 							description: 'Designed and implemented a microservices architecture handling 1M+ daily requests with 99.99% uptime',
// 							details: [
// 								'Containerized microservices with Docker and Kubernetes',
// 								'Implemented service mesh with Istio',
// 								'Designed event-driven architecture using Apache Kafka',
// 								'Achieved 40% reduction in response times',
// 							],
// 							tech: ['Kubernetes', 'Docker', 'Istio', 'Kafka', 'MongoDB', 'Redis'],
// 						},
// 						{
// 							title: 'Software Developer Intern',
// 							description: 'Built a robust data processing pipeline handling 5TB+ daily data with sub-second latency',
// 							details: [
// 								'Implemented stream processing with Apache Flink',
// 								'Designed fault-tolerant architecture with automatic failover',
// 								'Optimized data throughput by 60%',
// 								'Implemented comprehensive monitoring with Prometheus & Grafana',
// 							],
// 							tech: ['Apache Flink', 'AWS Kinesis', 'Prometheus', 'Grafana', 'Python', 'PostgreSQL'],
// 						},
// 					].map((project, index) => (
// 						<motion.div
// 							key={index}
// 							initial={{ opacity: 0, y: 20 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							viewport={{ once: true }}
// 							transition={{ delay: index * 0.2 }}
// 							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
// 						>
// 							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
// 							<p className="text-gray-400 mb-6">{project.description}</p>
// 							<div className="mb-6">
// 								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
// 								<ul className="list-disc list-inside space-y-2 text-gray-300">
// 									{project.details.map((detail, i) => (
// 										<li key={i}>{detail}</li>
// 									))}
// 								</ul>
// 							</div>
// 							<div className="flex flex-wrap gap-2">
// 								{project.tech.map((tech, i) => (
// 									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
// 										{tech}
// 									</span>
// 								))}
// 							</div>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

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

              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                {/* University of Alberta Experience */}
                <div className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-xl md:text-2xl">Undergraduate Teaching Assistant</h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">University of Alberta</span>  | <span className="text-green-500">Edmonton, AB</span> 🇨🇦| Sep 2024 – Dec 2024
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    <li>Guided students in <span className="text-green-500">CMPUT 300</span> concepts.</li>
                    <li>Assessed assignments using <span className="text-green-500">evaluation criteria</span> for consistent grading.</li>
                  </ul>
                </div>

                {/* Colaberry Experience */}
                <div className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-xl md:text-2xl">Software Developer Intern</h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">Colaberry</span>  | <span className="text-green-500">Boston, US</span> 🇺🇸| May 2024 – Aug 2024
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    <li>Built a <span className="text-green-500">CSV analysis pipeline</span> with <span className="text-green-500">Python</span> and <span className="text-green-500">OpenAI</span>, increasing processing speed by 60%.</li>
                    <li>Developed a <span className="text-green-500">capability mapping tool</span> with <span className="text-green-500">Astro</span>, hosted on <span className="text-green-500">AWS Amplify</span>.</li>
                    <li>Created a <span className="text-green-500">SQL-based data transformation system</span>, cutting manual processing by 70%.</li>
                  </ul>
                </div>

                {/* DigiHunk Technologies Experience */}
                <div className="p-6 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-xl md:text-2xl">Software Developer Intern</h3>
                  <p className="text-sm text-gray-400 mb-2 md:text-base">
                    <span className="text-green-500 font-semibold">DigiHunk Technologies</span> | <span className="text-green-500">Delhi, India</span> 🇮🇳 | May 2023 – Aug 2023
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg">
                    <li>Developed a <span className="text-green-500">React e-commerce app</span> with <span className="text-green-500">Node.js</span> and <span className="text-green-500">MongoDB</span>.</li>
                    <li>Built a <span className="text-green-500">real-time messaging system</span> in <span className="text-green-500">Flutter</span> with <span className="text-green-500">Firebase</span>.</li>
                    <li>Created <span className="text-green-500">RESTful APIs</span> using <span className="text-green-500">Django</span> and <span className="text-green-500">PostgreSQL</span>.</li>
                    <li>Enhanced <span className="text-green-500">UI/UX</span> using <span className="text-green-500">Figma</span>.</li>
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
