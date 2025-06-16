"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import About from "@/components/About";
import BlogSection from "@/components/Blog";
import Contact from "@/components/Contact";
import ProjectsSection from "@/components/Projectsession";
import SkillsSection from "@/components/Skill";
import SocialLink from "@/components/SocialLink";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
    },
  },
};

export default function Home() {
  const contactRef = useRef(null);
  const projectRef=useRef(null)

  const scrollToContact = (param:any) => {
    param.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-black/50">
        {/* Background */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url("/hero.png")',
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-32 py-52 text-white">
          <motion.div
            className="text-center md:text-left max-w-xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hi, I&apos;m Anuroop K R
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-2xl font-semibold mb-4"
            >
              Full Stack Developer | React | Node.js | MongoDB
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg mb-6">
              I craft clean and scalable web applications using modern
              technologies. <br />
              Passionate about turning complex problems into elegant digital
              experiences.
            </motion.p>

            <motion.div variants={fadeUp}>
              <SocialLink />
            </motion.div>

            <motion.div variants={fadeUp} className="space-x-4 mt-8">
              <button onClick={()=>scrollToContact(projectRef)}
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-orange-600 transition">
                💼 View My Work
              </button>
             
              {/* Changed here to button for smooth scroll */}
              <button
                onClick={()=>scrollToContact(contactRef)}
                className="bg-blue-400 font-semibold px-6 py-3 rounded-md hover:bg-blue-500 transition"
              >
                📨 Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about"><About /></section>
<section id="skills"><SkillsSection /></section>
<section id="projects" ref={projectRef}><ProjectsSection /></section>
<section id="blogs"><BlogSection /></section>
<section id="contact" ref={contactRef}><Contact /></section>

      {/* <About />
      <SkillsSection />
      <div ref={projectRef}>
        <ProjectsSection />
      </div>
      <BlogSection />
      {/* Wrap Contact in a div with the ref */}
      {/* <div ref={contactRef}>
        <Contact />
      </div> */} 
    </>
  );
}
