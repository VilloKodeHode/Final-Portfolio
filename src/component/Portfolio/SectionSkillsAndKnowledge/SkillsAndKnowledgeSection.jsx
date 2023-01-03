import KnowledgeIcon from "./skillsicon.jsx";
import { KnowledgeIconLinked } from "./skillsicon.jsx";
import { MySkills } from "./skillsicon.jsx";
import "./skills.css";

//images:
import Git from "./assets/Git.png";
import Photoshop from "./assets/Photoshop.png";
import Tailwind from "./assets/Tailwind.png";
import VSC from "./assets/VSC.png";

function SkillsAndKnowledgeSection() {
  return (
    <section className="knowledge" id="knowledge">
      <div className="flex flex-col justify-start">
        <h2 className="mb-10 knowledge-header">Knowledge</h2>
        {/* <h3 className="text-2xl font-bold">Code</h3> */}
        <div className="flex justify-center flex-wrap">
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/136/136528.png"
            alt="HyperText Markup Language"
          />
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/136/136527.png"
            alt="Cascading StyleSheets"
          />
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/136/136530.png"
            alt="JavaScript"
          />
        </div>

        {/* <h3 className="text-2xl font-bold">Tools</h3> */}
        <div className="flex justify-center flex-wrap">
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
            alt="React"
          />
          <KnowledgeIcon src={VSC} alt="VSC" />
          <KnowledgeIcon
            src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
            alt="Vite"
          />
        </div>
        <div className="flex justify-center flex-wrap">
          <KnowledgeIcon src={Tailwind} alt="Tailwind" />
          <KnowledgeIcon
            src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg"
            alt="DaisyUI"
          />
        </div>

        {/* <h3 className="text-2xl font-bold">Design</h3> */}
        <div className="flex justify-center flex-wrap">
          <KnowledgeIconLinked
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="Figma"
            href="https://www.figma.com/files/project/74340755/Joakim?fuid=1166284176523730225"
          />
          <KnowledgeIcon
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
            alt="Canva"
          />
          <KnowledgeIcon src={Photoshop} alt="Photoshop" />
        </div>

        {/* <h3 className="text-2xl font-bold">Repository</h3> */}
        <div className="flex justify-center flex-wrap">
          <KnowledgeIcon src={Git} alt="Git" />
          <KnowledgeIconLinked
            src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
            alt="GitHub"
            href="https://github.com/VilloKodeHode"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start">
        <h2 className="mb-10 myskills-header">My skills</h2>
        <div className="flex justify-center flex-wrap">
          <MySkills
            title="Lede gruppe-prosjekter"
            src="https://cdn-icons-png.flaticon.com/512/8101/8101423.png"
            description="Jeg trives i rollen som leder har ofte blitt valgt av gruppen"
          />

          <MySkills
            title="Problemløser"
            src="https://cdn-icons-png.flaticon.com/512/4406/4406319.png"
            description="Å løse problemer synes jeg er veldig lærerikt"
          />

          <MySkills
            title="UI/UX"
            src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png"
            description="Design og brukervennlighet er noe jeg liker å jobbe med"
          />

          <MySkills
            title="Lærevillig"
            src="https://cdn-icons-png.flaticon.com/512/2490/2490396.png"
            description="Jeg elsker å lære om nye måter å gjøre ting på"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsAndKnowledgeSection;
