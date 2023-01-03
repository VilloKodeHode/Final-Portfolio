import PortfolioNavBar from "../../component/Portfolio/NavBar/portfolioNavBar";
import HeroSection from "../../component/Portfolio/HeroSection/heroSection";
import SkillsAndKnowledgeSection from "../../component/Portfolio/SectionSkillsAndKnowledge/SkillsAndKnowledgeSection";
import ProjectSection from "../../component/Portfolio/ProjectSection/Projects";
import ContactSection from "../../component/Portfolio/ContactSection/ContactSection";

function PorfolioPage() {
  return (
    <div className="bg-black border-8 border-white" id="top">
      <PortfolioNavBar />
      <HeroSection />
      <main className="text-slate-100" id="main">
        <SkillsAndKnowledgeSection />
        <ProjectSection />
      </main>
      <ContactSection />
    </div>
  );
}
export default PorfolioPage;

// function LifeCycle(props) {
//   return <div className="lifeCycle">{props.children}</div>;
// }
