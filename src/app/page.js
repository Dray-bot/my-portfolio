import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Preloader />
      <CustomCursor />
      <Hero />
      <About />
      <ProjectSection />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
