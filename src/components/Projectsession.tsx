

"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  github: string;
  demoEmbed: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Shoevibe",
    description:
      "Shoevibe is a stylish and user-friendly eCommerce website for shoes and footwear, built with Node.js, Express, MongoDB, and EJS for server-side rendering.",
    techStack: ["Node.js", "Express", "MongoDB", "EJS"],
    role: "Full Stack Developer",
    github: "https://github.com/your-username/shoevibe",
    demoEmbed: "https://shoevibe.onrender.com",
    image: "/project/shoevibe.png",
  },
  {
    title: "React Movie App (Netflix Clone)",
    description:
      "A Netflix clone built with React, Redux, and Firebase for the authentication system.",
    techStack: ["React", "Redux", "Firebase"],
    role: "Full Stack Developer",
    github: "https://github.com/your-username/netflix-clone",
    demoEmbed: "https://mynetflix-ashy.vercel.app",
    image: "/project/mynetflix.png",
  },
  {
    title: "OLX Clone",
    description:
      "An OLX clone for classifieds with features like user authentication, profile management, and item listing.",
    techStack: ["React", "useContext", "MongoDB", "Node.js", "Express"],
    role: "Full Stack Developer",
    github: "https://github.com/your-username/olx-clone",
    demoEmbed: "https://olxclone-rho.vercel.app",
    image: "/olx-clone.png",
  },
  {
    title: "CRUD Application",
    description:
      "A full-stack CRUD application with user authentication and role-based access.",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    role: "Full Stack Developer",
    github: "https://github.com/your-username/crud-app",
    demoEmbed: "https://rins.vercel.app",
    image: "/crud-app.png",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      className="py-20 bg-gradient-to-br from-teal-50 to-white"
      id="projects"
    >
      <div className="container mx-auto px-6 md:px-16 bg">
        <h2 className="text-5xl font-bold text-center text-indigo-800 mb-16">
          🚀 Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
  {project.techStack.map((tech, i) => (
    <span
      key={i}
      className="border border-orange-300 text-orange-300 px-3 py-1 text-sm rounded-full shadow-sm  transition duration-200"
    >
      {tech}
    </span>
  ))}
</div>


                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-medium text-gray-800">Role:</span>{" "}
                  {project.role}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-indigo-600 px-4 py-1.5 rounded-full hover:bg-indigo-700 transition"
                  >
                    GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-emerald-600 border border-green-500 px-4 py-1.5 rounded-full hover:bg-indigo-50 transition"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-6xl w-full h-[85vh] rounded-xl overflow-hidden relative shadow-2xl border">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold text-indigo-700">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-3xl text-gray-400 hover:text-red-500"
              >
                &times;
              </button>
            </div>
            <div className="w-full h-full overflow-y-auto">
              <iframe
                src={selectedProject.demoEmbed}
                title="Live Demo"
                width="100%"
                height="100%"
                className="w-full h-[calc(85vh-64px)]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
