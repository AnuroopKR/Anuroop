import React from "react";
import Image from "next/image"; // Importing the Image component for optimized images
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Right Side - Content */}
        <div className="md:w-1/2">
          <p className="text-yellow-500 font-semibold uppercase mb-2">
            About Me
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Self-Taught Developer Turning Ideas Into Real Products
          </h2>

          <p className="text-gray-600 mb-4">
            I am a self-taught Full Stack Developer with expertise in front-end
            and back-end technologies. My journey into tech began from scratch,
            and I am now passionate about building clean, scalable web
            applications that solve real problems.
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm mb-6">
            {[
              "JavaScript (ES6+)",
              "React & Next.js",
              "Node.js & Express",
              "MongoDB",
              "Docker & AWS",
              "Tailwind CSS",
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-yellow-500 text-lg">✔️</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href={"/aboutdetails"}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium">
                Read More
              </button>
            </Link>
            <a
              href="/Anuroop_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white hover:bg-blue-600 bg-blue-400 px-6 py-3 rounded-lg font-medium"
            >
              View Resume
            </a>

            {/* <div className="border border-yellow-400 px-6 py-3 rounded-lg flex items-center space-x-3">
              <div className="text-yellow-500 text-xl">📞</div>
              <span className="text-gray-800 font-medium">+012 345 6789</span>
            </div> */}
          </div>
        </div>
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <Image
            src="/mypic.png" // Replace with your image path or external URL
            alt="Developer at work"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
