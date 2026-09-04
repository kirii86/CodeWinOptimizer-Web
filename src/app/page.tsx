import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Preview from "@/components/Preview";
import TechStack from "@/components/TechStack";
import Faq from "@/components/Faq";
import Discord from "@/components/Discord";
import Footer from "@/components/Footer";
import en from "@/i18n/en";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: en.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Discord />
        <Features />
        <Stats />
        <Preview />
        <TechStack />
        <Faq />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </main>
      <Footer />
    </>
  );
}
