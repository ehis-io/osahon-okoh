import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import PolicyAdvisory from "@/components/PolicyAdvisory";
import AiGovernance from "@/components/AiGovernance";
import Books from "@/components/Books";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PolicyAdvisory />
      <AiGovernance />
      <Books />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}
