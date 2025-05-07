import AboutSection from "@/components/About/AboutSection";
import ContactSection from "@/components/Contact/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/Project/ProjectSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
