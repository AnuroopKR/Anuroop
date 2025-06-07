
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutDetails = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-orange-500 mb-4">
            More About Me
          </h1>
          <p className="text-lg text-gray-600">
            I’m Anuroop, a full stack developer who turns ideas into web experiences using React, Node.js, and MongoDB.
          </p>
        </motion.div>

        {/* My Journey */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-orange-400 mb-4">My Journey</h2>
            <p className="mb-4">
              I began my coding journey with no formal background, driven by curiosity and a passion for solving problems. Through consistent self-learning, real-world projects, and problem-solving, I transitioned into a confident full-stack developer.
            </p>
            <p>
              I believe in continuous growth and strive to stay updated with modern technologies and best practices in software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl shadow-lg bg-white flex justify-center items-center w-full max-w-md mx-auto"
          >
            <Image
              src="/aboutpage.svg"
              alt="About page illustration"
              width={350}
              height={250}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Experience Timeline</h2>
          <ul className="space-y-4">
            <li>
              <strong>2024 – Present:</strong> Freelance Developer – Built CRUD and E-commerce apps using MERN stack.
            </li>
            <li>
              <strong>2023 – 2024:</strong> Learning Phase – Built Netflix and OLX clones to master full stack concepts.
            </li>
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-orange-50 p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6">Tech Stack I Love 💻</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm font-medium text-gray-700">
            {["JavaScript (ES6+)", "React & Next.js", "Node.js & Express", "MongoDB", "TypeScript", "Tailwind CSS", "Docker", "AWS & Firebase", "RESTful APIs", "JWT & Auth", "Git & GitHub", "CI/CD Pipelines"].map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-orange-500 text-lg">✔️</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-4">What Drives Me 🚀</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Clean Code:</strong> Writing scalable and readable code is a top priority.</li>
            <li><strong>User Experience:</strong> Crafting intuitive interfaces brings joy.</li>
            <li><strong>Problem Solving:</strong> Tackling challenges with technology motivates me.</li>
            <li><strong>Learning & Sharing:</strong> Sharing what I learn helps me grow and help others.</li>
          </ul>
        </motion.div>

        {/* Testimonials */}
       

        {/* Contact & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-2">
            Want to collaborate or just say hello?
          </h3>
          <p className="text-gray-600 mb-4">
            I'm always open to exciting opportunities or just a friendly chat — feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:anuroopkr13@gmail.com"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-200 hover:scale-105"
            >
              📩 Contact Me
            </a>
            <a
              href="/Anuroop_Resume.pdf"
              download
              className="bg-white border border-orange-500 text-orange-500 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-orange-50 transition"
            >
              📄 Download Resume
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/anuroop" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/anuroop" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
