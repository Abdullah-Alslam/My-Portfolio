import AboutSection from "./components/Home/AboutSection";
import HeroSection from "./components/Home/HeroSection";
import ProjectsSection from "./components/Home/ProjectsSection";

// ✅ SEO Metadata
export const metadata = {
  title: "Abdullah Abdalsalam | Frontend Developer Portfolio",
  description:
    "Explore Abdullah Abdalsalam's portfolio. Showcasing projects built with React, Next.js, Tailwind CSS, and modern web technologies.",
  keywords:
    "Frontend Developer, React, Next.js, Tailwind CSS, Portfolio, Web Development, Projects",
  robots: "index, follow",
  openGraph: {
    title: "Abdullah Abdalsalam | Frontend Developer Portfolio",
    description:
      "Explore Abdullah Abdalsalam's portfolio. Showcasing projects built with React, Next.js, Tailwind CSS, and modern web technologies.",
    url: "https://my-portfolio-beryl-nine-29.vercel.app",
    type: "website",
    images: [
      {
        url: "https://my-portfolio-beryl-nine-29.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Abdalsalam Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Abdalsalam | Frontend Developer Portfolio",
    description:
      "Explore Abdullah Abdalsalam's portfolio. Showcasing projects built with React, Next.js, Tailwind CSS, and modern web technologies.",
    image: "https://my-portfolio-beryl-nine-29.vercel.app/og-image.png",
  },
};

export default function HomePage() {
  return (
    <main className="pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
