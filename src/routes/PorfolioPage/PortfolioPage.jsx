import CompanyLogo from "/src/component/Portfolio/NavBar/companyLogo.jsx";
// import Card from "/src/components/Portfolio/Card";
import PitchWindow, {
  PitchText,
} from "/src/component/Portfolio/Pitch/pitch.jsx";
import Navlink from "/src/component/Portfolio/NavBar/navlink.jsx";
import Cv from "/src/component/Portfolio/CvWithEffectsAndLink/Cv.jsx";
import Project from "/src/component/Portfolio/ProjectSection/projectcard.jsx";
import KnowledgeIcon from "/src/component/Portfolio/SectionSkillsAndKnowledge/skillsicon.jsx";
import { KnowledgeIconLinked } from "/src/component/Portfolio/SectionSkillsAndKnowledge/skillsicon.jsx";
import { MySkills } from "/src/component/Portfolio/SectionSkillsAndKnowledge/skillsicon.jsx";
import ClickCounter from "/src/component/Portfolio/ClickCounterButton/ClickCounterButton.jsx";
import PortfolioNavBar from "../../component/Portfolio/NavBar/portfolioNavBar";
import HeroSection from "../../component/Portfolio/HeroSection/heroSection";
import SkillsAndKnowledgeSection from "../../component/Portfolio/SectionSkillsAndKnowledge/SkillsAndKnowledgeSection";
import FooterSection from "../../component/Portfolio/FooterSection/FooterSection";

function PorfolioPage() {
  return (
    <div className="bg-slate-50" id="top">
      <PortfolioNavBar />
      <HeroSection />
      <SkillsAndKnowledgeSection />
      <FooterSection />
    </div>
  );
}
export default PorfolioPage;

// function LifeCycle(props) {
//   return <div className="lifeCycle">{props.children}</div>;
// }
