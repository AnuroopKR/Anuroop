'use client';

import Image from 'next/image';

const skills = {
  'Front-End': [
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Redux', icon: '/icons/redux.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'CSS3', icon: '/icons/css3.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  ],
  'Back-End': [
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Express.js', icon: '/icons/express.svg' },
    { name: 'JWT', icon: '/icons/jwt.svg' },
  ],
  'Database': [
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'Firebase', icon: '/icons/firebase.svg' },
  ],
  'Tools & Platforms': [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Postman', icon: '/icons/postman.svg' },
    { name: 'VS Code', icon: '/icons/vscode.svg' },
    { name: 'Netlify', icon: '/icons/netlify.svg' },
    { name: 'Vercel', icon: '/icons/vercel.svg' },
  ],
};

export default function SkillsSection() {
  return (
    <section className="py-12 px-4  md:px-12 bg-white" id="skills">
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-600">Tech Stack</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mx-20 mb-10" >
          <h3 className="text-xl font-semibold text-orange-500 mb-4">{category}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {items.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
              >
                <div className="w-12 h-12 relative mb-2">
                  <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                </div>
                <span className="text-sm text-orange-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
