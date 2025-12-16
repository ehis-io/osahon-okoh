import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="about">
        {/* About content is mostly covered in Hero/Summary, but could add a dedicated section if needed. 
             For now, relying on Hero + Experience intro. */}
      </div>
      <Skills />
      <Experience />
      <Education />
      <Publications />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
