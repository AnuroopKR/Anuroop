import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex items-center gap-6 text-4xl mt-6 mx-1 ">
      <Link href="https://linkedin.com" target="_blank">
        <FaLinkedin className="bg-white text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110 rounded-md" />
      </Link>
      <Link href="https://github.com" target="_blank">
        <FaGithub className="bg-white text-gray-800 hover:text-black transition-transform duration-300 hover:scale-110 rounded-md" />
      </Link>
      <Link href="https://instagram.com" target="_blank">
        <FaInstagram className="bg-white text-pink-500 hover:text-pink-700 transition-transform duration-300 hover:scale-110 rounded-md" />
      </Link>
    </div>
  )
}

export default SocialLink;


