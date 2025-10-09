import ContactPageInfo from "../components/contact/ContactPageInfo";

// metadata
export const metadata = {
  title: "Contact | Abdullah Abdalsalam Portfolio",
  description:
    "Get in touch with Abdullah Abdalsalam, Frontend Developer. Send a message or find contact info via phone, Telegram, WhatsApp, email, or Instagram.",
  keywords:
    "Frontend Developer, Contact, Next.js, Portfolio, Email, WhatsApp, Telegram, Instagram",
  robots: "index, follow",
  openGraph: {
    title: "Contact | Abdullah Abdalsalam Portfolio",
    description: "Get in touch with Abdullah Abdalsalam, Frontend Developer.",
    url: "https://my-portfolio-beryl-nine-29.vercel.app/contact",
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
    title: "Contact | Abdullah Abdalsalam Portfolio",
    description: "Get in touch with Abdullah Abdalsalam, Frontend Developer.",
    image: "https://my-portfolio-beryl-nine-29.vercel.app/og-image.png",
  },
};

export default function ContactPage() {
  return <ContactPageInfo />;
}
