import HeroSection from "../../component/Portfolio/HeroSection/heroSection";
import HamburgerBar from "../../component/NavBar/HamburgerBar";
import { RenderLessParticles } from "../../component/Particles/Particles";

function AboutPage() {
  return (
    <>
      <HamburgerBar />
      <RenderLessParticles />
      <HeroSection />
    </>
  );
}

export default AboutPage;
