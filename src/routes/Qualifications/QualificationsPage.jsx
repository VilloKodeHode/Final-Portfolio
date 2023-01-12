import HamburgerBar from "../../component/NavBar/HamburgerBar";
import NavBar from "../../component/NavBar/NavBar";
import SkillsAndKnowledgeSection from "../../component/Portfolio/SectionSkillsAndKnowledge/SkillsAndKnowledgeSection";

function Qualifications() {
  return (
    <>
      <HamburgerBar />
      <div className="text-slate-100" id="main">
        <SkillsAndKnowledgeSection />
      </div>
    </>
  );
}

export default Qualifications;
