import AboutSection from "./components/Home/AboutSection";
import ContactCTA from "./components/Home/ContactCTA";
import HeroSection from "./components/Home/HeroSection";
import ProjectsSection from "./components/Home/ProjectsSection";
import SkillsSection from "./components/Home/SkillsSection";


export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactCTA/>
    </div>
  );
}
