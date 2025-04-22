"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const webprojects = [
  {
    title: "Social Media App",
    description: "A try at creating a social media app using Next.js and TailwindCSS.\n It uses a PostgreSQL database and Clerk for authentication.",
    image: "/Images/socialnetwork.jpg",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Clerk", "Prisma", "React"],
    demoUrl: "https://socialnetwork-git-main-nolannmoisis-projects.vercel.app",
    githubUrl: "https://github.com/nolannmoisis/socialnetwork",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Booking App (no demo available)",
    description: "A booking app, used to learn php.\n It uses a MySQL database and is hosted on WAMP. ",
    image: "/Images/booking.jpg",
    tags: ["PHP", "MySQL", "WAMP"],
    githubUrl: "https://github.com/nolannmoisis/reservation",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Restaurant App",
    description: "A restaurant app, used to learn bootstrap.\n It is a static website, mostly visual.",
    image: "/Images/restaurant.jpg",
    tags: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://nolannmoisis.github.io/restaurant.github.io/",
    githubUrl: "https://github.com/nolannmoisis/restaurant.github.io",
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "First Portfolio",
    description: "A simple portfolio website, used to learn web basics.\n Also made me learn the creation of wireframes etc...",
    image: "/Images/portfolio.jpg",
    tags: ["HTML", "CSS"],
    demoUrl: "https://nolannmoisis.github.io/portfolio.github.io/",
    githubUrl: "https://github.com/nolannmoisis/portfolio.github.io",
    color: "from-blue-500 to-fuchsia-500"
  },
  {
    title: "Fast API",
    description: "A farm stack app, used to learn fastapi.\n It uses a MongoDB database and docker.",
    image: "/Images/fastapi.jpg",
    tags: ["FastAPI", "MongoDB", "Docker"],
    demoUrl: "https://fastapi-nolannmoisis-projects.vercel.app",
    githubUrl: "https://github.com/nolannmoisis/FARM",
    color: "from-blue-500 to-red-500"
  },
  {
    title: "GDP App (no demo available)",
    description: "A project management app, used to learn more about docker, Synfony and php.\n Needs to be updated (not totally finished).",
    image: "/Images/gdp.jpg",
    tags: ["PHP", "Symfony", "Docker"],
    githubUrl: "https://github.com/nolannmoisis/TP6-appgdp",
    color: "from-blue-500 to-orange-500"
  }
];

export default function WebProjects() {
  return (
    <section id="webprojects" className="relative py-20 bg-[#f5f7fa] dark:bg-[#0f172a]">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-blue-200/10 dark:from-blue-900/10 via-transparent to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"
          >
            My WebClass Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 dark:text-gray-300"
          >
            Showcasing some of my recent work in web development
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {webprojects.map((webprojects, index) => (
            <motion.div
              key={webprojects.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative rounded-2xl overflow-hidden border 
                border-gray-200 dark:border-slate-700/50 
                bg-gradient-to-br ${webprojects.color} p-[1px] 
                hover:shadow-xl hover:shadow-blue-500/20 transition-shadow`}
            >
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden backdrop-blur-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={webprojects.image}
                    alt={webprojects.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 
                              group-hover:opacity-30" />

                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {webprojects.tags.map((tag) => (
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
                    bg-gradient-to-r ${webprojects.color} group-hover:brightness-110 transition-all`}>
                    {webprojects.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3 whitespace-pre-line">
                    {webprojects.description}
                  </p>

                  <div className="flex gap-4 flex-col md:flex-row">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={webprojects.demoUrl}
                      className="px-6 py-2.5 bg-blue-600 dark:bg-blue-500 text-white 
                             rounded-lg flex items-center gap-2 hover:bg-indigo-700 
                             dark:hover:bg-blue-600 transition-colors shadow-lg 
                             shadow-blue-500/20"
                    >
                      Live Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={webprojects.githubUrl}
                      className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-800 
                             dark:text-white rounded-lg flex items-center gap-2 
                             hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors 
                             shadow-lg shadow-gray-200/20 dark:shadow-gray-900/20 
                             border border-gray-200 dark:border-gray-700"
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