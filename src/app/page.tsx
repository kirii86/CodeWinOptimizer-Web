import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Preview from "@/components/Preview";
import TechStack from "@/components/TechStack";
import Discord from "@/components/Discord";
import Footer from "@/components/Footer";

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
      </main>
      <Footer />
    </>
  );
}
