import AboutPageInfo from "../components/about/AboutPageInfo";

// ✅ تعريف metadata
export const metadata = {
  title: "About | Abdullah Abdalsalam Portfolio",
  description:
    "Learn about Abdullah Abdalsalam, a passionate Frontend Developer. Explore his journey, skills, and technologies he works with.",
  keywords:
    "Frontend Developer, About, React, Next.js, Tailwind CSS, Skills, Portfolio",
  robots: "index, follow",
  openGraph: {
    title: "About | Abdullah Abdalsalam Portfolio",
    description: "Learn about Abdullah Abdalsalam, a passionate Frontend Developer.",
    url: "https://my-portfolio-beryl-nine-29.vercel.app/about",
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
    title: "About | Abdullah Abdalsalam Portfolio",
    description: "Learn about Abdullah Abdalsalam, a passionate Frontend Developer.",
    image: "https://my-portfolio-beryl-nine-29.vercel.app/og-image.png",
  },
};

export default function AboutPage() {
  return <AboutPageInfo />;
}
