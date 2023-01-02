import NavBar from "../../component/NavBar/NavBar";
import SkillsAndKnowledgeSection from "../../component/Portfolio/SectionSkillsAndKnowledge/SkillsAndKnowledgeSection";

function Qualifications() {
  return (
    <>
      <NavBar />
      <div className="text-slate-100" id="main">
        <SkillsAndKnowledgeSection />
      </div>
    </>
  );
}

export default Qualifications;
