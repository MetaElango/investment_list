import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function About() {
  return (
    <>
      <Hero firstLine="About" secondLine={null} thirdLine={null} />
      <AboutSection />
    </>
  );
}
