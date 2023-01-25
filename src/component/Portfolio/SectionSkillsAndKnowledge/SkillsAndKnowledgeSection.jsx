import KnowledgeIcon, {
  KnowledgeContent,
  SkillsContent,
} from "./skillsicon.jsx";
import { MySkills } from "./skillsicon.jsx";
import Button from "../../Buttons/Button.jsx";
import { useState, useContext } from "react";
import ThemeContext from "../../ThemeSwitch/ThemeContext.js";

//images:

import { RenderLessParticles } from "../../Particles/Particles.jsx";

function SkillsAndKnowledgeSection() {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <>
      <RenderLessParticles />
      <section
        className="z-20 knowledge w-[90%] absolute top-16 left-1/2 -translate-x-1/2"
        id="knowledge"
      >
        <KnowledgeContent />

        <SkillsContent />
      </section>
      {selectedTheme === "Tranquil" && (
        <div className="absolute top-0 bottom-0 left-0 right-0 h-screen QualificationsBG"></div>
      )}
      {selectedTheme === "Professional" && (
        <div className="absolute top-0 bottom-0 left-0 right-0 h-screen bg-superDry-bg"></div>
      )}
    </>
  );
}

export default SkillsAndKnowledgeSection;
