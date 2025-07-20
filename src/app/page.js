import Hero from "@/components/Hero"
import ProjectSection from "@/components/ProjectSection"
import About from "@/components/About"
import Skills from "@/components/Skills"
import WhyHireMe from "@/components/WhyHireMe"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectSection />
      <Skills />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  )
}
