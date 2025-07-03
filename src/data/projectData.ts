
export interface Project {
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
  title: "Rins Marketing & Services",
  description:
    "A freelance project for a medical equipment dealer, built using React.js. It showcases products and services with a professional interface.",
  techStack: ["React", "JavaScript", "CSS", "HTML"],
  role: "Frontend Developer",
  github: "", 
  demoEmbed: "https://rinsmarketing.com",
  image: "/project/rins-marketing.png", 
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
    image: "/project/olx-clone.png",
  },
  {
  title: "Gemini Clone",
  description:
    "A Gemini AI clone built using React, Tailwind CSS, and the Gemini API to simulate conversational AI interactions.",
  techStack: ["React", "Gemini API"],
  role: "Full Stack Developer",
  github: "https://github.com/your-username/gemini-clone",
  demoEmbed: "https://yourgeminiclone.vercel.app",
  image: "/project/geminiclone.png",
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
export default projects
