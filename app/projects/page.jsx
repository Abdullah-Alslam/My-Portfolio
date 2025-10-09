
import PageWrapper from "../components/Loading/PageWarpper";
import BackgroundEffects from "../components/projects/BackgroundEffects";
import HeroSection from "../components/projects/HeroSection";
import ProjectCard from "../components/projects/ProjectCard";

//SEO Metadata
export const metadata = {
  title: "Projects | Abdullah Abdalsalam Portfolio",
  description:
    "Explore Abdullah Abdalsalam’s web development projects built using Next.js, TypeScript, Tailwind CSS, MongoDB, and more. Discover modern, responsive, and high-performance web apps.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Projects | Abdullah Abdalsalam Portfolio",
    description:
      "Explore Abdullah Abdalsalam’s latest web development projects using Next.js, TypeScript, Tailwind, and MongoDB.",
    url: "https://my-portfolio-beryl-nine-29.vercel.app/projects",
    type: "website",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Abdalsalam Portfolio Projects",
      },
    ],
  },
};

// ✅ Projects Data
const projects = [
  {
    title: "eCommerce App",
    description:
      "A full-stack eCommerce platform built with modern technologies for performance and scalability.",
    tags: ["Next.js", "MongoDB", "Tailwind", "TypeScript", "Redux"],
    image: "/e-commerce.png",
    demo: "https://e-commerce-lime-phi-53.vercel.app",
    code: "https://github.com/Abdullah-Alslam/E-commerce",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing all my professional projects and frontend skills.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "Responsive"],
    image: "/portfolio.png",
    demo: "https://my-portfolio-beryl-nine-29.vercel.app",
    code: "https://github.com/Abdullah-Alslam/My-Portfolio",
  },
  {
    title: "Game Project",
    description:
      "An interactive gaming website built using React.js, Firebase, and modern animations.",
    tags: ["React", "Firebase", "Vite", "Tailwind", "Animations"],
    image: "/gaming-website.png",
    demo: "https://game-abdullah.vercel.app",
    code: "https://github.com/Abdullah-Alslam/Game",
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <HeroSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* row 1 : 2 projects*/}
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            priority={index === 0} 
          />
        ))}

        {/* row 2 : 1 project*/}
        <div className="md:col-span-2 flex justify-center">
          <ProjectCard
            project={projects[2]}
            priority={false}
          />
        </div>
      </div>

      <BackgroundEffects />
    </PageWrapper>
  );
}
