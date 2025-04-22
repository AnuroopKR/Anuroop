import About from "@/components/About";
import BlogSection from "@/components/Blog";
import Contact from "@/components/Contact";
import ProjectsSection from "@/components/Projectsession";
import SkillsSection from "@/components/Skill";

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen overflow-hidden">
      {/* Fixed Sticky Background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: 'url("/hero.png")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Scrollable Content */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row  justify-between px-6 md:px-32 py-52 text-white">
        
        {/* Text Block */}
        <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Anuroop K R</h1>
        <h2 className="text-2xl font-semibold mb-4">
            Full Stack Developer | React | Node.js | MongoDB
          </h2>
          <p className="text-lg mb-6">
            I craft clean and scalable web applications using modern technologies. <br />
            Passionate about turning complex problems into elegant digital experiences.
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              💼 View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
            >
              📨 Contact Me
            </a>
          </div>
        </div>

     
      </div>
    </section>
    <About/>
    <SkillsSection/>
    <ProjectsSection/>
    <BlogSection/>
    <Contact/>
    </>
  );
}
