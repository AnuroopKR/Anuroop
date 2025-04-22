// pages/about-details.tsximg

import Image from 'next/image';
import React from 'react';

const AboutDetails = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-orange-500 mb-4">More About Me</h1>
          <p className="text-lg text-gray-600">
            A deeper dive into my journey, values, and the tech that excites me.
          </p>
        </div>

        {/* Section: Background */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">My Journey</h2>
            <p className="mb-4">
              I began my coding journey with no formal background, fueled purely by curiosity and determination.
              Through consistent self-learning, building real-world projects, and solving problems, I transitioned from
              a beginner to a confident full-stack developer.
            </p>
            <p>
              I believe in continuous growth and always strive to stay updated with new technologies and best practices in the development world.
            </p>
          </div>
          <div className='p-30 rounded-xl shadow-lg m-10'>
            <Image src={'/aboutpage.svg'} alt='/aboutpage'/>
          </div>
        </div>

        {/* Section: Technologies */}
        <div className="bg-orange-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-orange-400 mb-6">Tech Stack I Love 💻</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm font-medium text-gray-700">
            {[
              "JavaScript (ES6+)",
              "React & Next.js",
              "Node.js & Express",
              "MongoDB",
              "TypeScript",
              "Tailwind CSS",
              "Docker",
              "AWS & Firebase",
              "RESTful APIs",
              "JWT & Auth",
              "Git & GitHub",
              "CI/CD Pipelines",
            ].map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-orange-500 text-lg">✔️</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Values */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">What Drives Me 🚀</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Clean Code:</strong> I value writing readable and maintainable code that scales well.</li>
            <li><strong>User Experience:</strong> I strive to build products that are intuitive and enjoyable to use.</li>
            <li><strong>Problem Solving:</strong> I love challenges and am passionate about solving real-world problems with code.</li>
            <li><strong>Learning &amp; Sharing:</strong> Whether it’s through blogs or helping others, knowledge grows when shared.</li>
            </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-orange-400 mb-2">Want to collaborate or just say hello?</h3>
          <p className="text-gray-600 mb-4">
  Feel free to reach out &mdash; I'm always open to new opportunities and conversations!
</p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-200"
          >
            📩 Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
