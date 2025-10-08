import AboutSection from "./components/Home/AboutSection";
import HeroSection from "./components/Home/HeroSection";
import ProjectsSection from "./components/Home/ProjectsSection";


export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
