import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white pt-16' >
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8  shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-1">Anuroop K R</h2>
          <p className="text-sm text-gray-400">Full Stack Developer | Crafting Web Experiences</p>
        </div>

        <div className="flex space-x-6 text-lg">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-red-400 transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {currentYear} Anuroop K R. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
