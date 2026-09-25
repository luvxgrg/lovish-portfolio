import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Experience />
      <About />
      <TechStack />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}