"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "K3Web3D",
    description: "An Interactive 3D Keycube Visualization System using Three.js.\n Check the Wiki on GitHub for more details on how it works.",
    image: "/Images/keycube.jpg",
    tags: ["Three.js", "Blender"],
    githubUrl: "https://github.com/keycube/k3web3d",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Schmup",
    description: "A Shoot 'em up in C. Used to learn SDL2 and apply math theory.\n Learned to create bullet patterns and enemy mechanics.",
    image: "/Images/schmup.jpg",
    tags: ["C", "SDL2"],
    githubUrl: "https://github.com/nolannmoisis/Shmup",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Pathfinding",
    description: "A working solution finder for the Travelling salesman problem.\n Implemented using Ant Colony Optimization and Dijkstra's algorithm.",
    image: "/Images/pathfinding.jpg",
    tags: ["C", "SDL2", "Ant Colony Optimization", "Dijkstra"],
    githubUrl: "https://github.com/nolannmoisis/ProjetS4SDL2",
    color: "from-blue-500 to-fuchsia-500"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-[#f5f7fa] dark:bg-[#0f172a]">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-blue-200/10 dark:from-blue-900/10 via-transparent to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 dark:text-gray-300"
          >
            Showcasing some of my recent work in different domains
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative rounded-2xl overflow-hidden border 
                border-gray-200 dark:border-slate-700/50 
                bg-gradient-to-br ${project.color} p-[1px] 
                hover:shadow-xl hover:shadow-blue-500/20 transition-shadow`}
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden backdrop-blur-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-30" />

                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-transparent text-white rounded-lg 
                                backdrop-blur-sm border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent 
                    bg-gradient-to-r ${project.color} group-hover:brightness-110 transition-all`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3 whitespace-pre-line">
                    {project.description}
                  </p>

                  <div className="flex gap-4 flex-col md:flex-row">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.githubUrl}
                      className="px-6 py-2.5 bg-white dark:bg-slate-800 text-gray-800 
                              dark:text-white rounded-lg flex items-center gap-2 
                              hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors 
                              border border-gray-200 dark:border-slate-700"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
