import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ResumeSection from "../components/ResumeSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import SocialDock from "../components/SocialDock";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <SocialDock />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
