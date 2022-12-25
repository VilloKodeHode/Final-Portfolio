import KnowledgeIcon from "./skillsicon.jsx";
import { KnowledgeIconLinked } from "./skillsicon.jsx";
import { MySkills } from "./skillsicon.jsx";
import Project from "../ProjectSection/projectcard.jsx";
import "./skills.css";

function SkillsAndKnowledgeSection() {
  return (
    <main id="main">
      <section className="knowledge my-24" id="knowledge">
        <div>
          <h2 className="mb-10">Knowledge</h2>
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
            <KnowledgeIcon src="./src/assets/VSC.png" alt="VSC" />
            <KnowledgeIcon
              src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
              alt="Vite"
            />
          </div>
          <div className="flex justify-center flex-wrap">
            <KnowledgeIcon
              src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
              alt="Tailwind"
            />
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
            <KnowledgeIcon src="./src/assets/Photoshop.png" alt="Photoshop" />
          </div>

          {/* <h3 className="text-2xl font-bold">Repository</h3> */}
          <div className="flex justify-center flex-wrap">
            <KnowledgeIcon src="./src/assets/Git.png" alt="Git" />
            <KnowledgeIconLinked
              src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
              alt="GitHub"
              href="https://github.com/VilloKodeHode"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="mb-10">My skills</h2>
          <div className="flex justify-center flex-wrap">
            <MySkills
              title="Gruppearbeid"
              src="https://cdn-icons-png.flaticon.com/512/8450/8450164.png"
              description="Jeg er veldig glad i å samarbeide med andre"
            />

            <MySkills
              title="Problemløsning"
              src="https://cdn-icons-png.flaticon.com/512/1352/1352004.png"
              description="Problemløsning synes jeg er veldig lærerikt"
            />

            <MySkills
              title="Responsive design"
              src="https://cdn-icons-png.flaticon.com/512/2696/2696459.png"
              description="Jeg jobber for at det jeg lager skal kunne være resposivt"
            />
          </div>
        </div>
      </section>

      <section
        className="flex flex-row flex-wrap mb-20 py-12 justify-center"
        id="projects"
      >
        <h2 className="mb-12">Projects</h2>
        <div className="flex justify-center flex-wrap">
          <Project
            href="https://villokodehode.github.io/Job-simulator/"
            projectName="Job simulator"
            src={"./src/assets/First DOMS.png"}
            description="Et prosjekt jeg har gradvis bygd mer og mer kompleks ettersom jeg har lært mer"
            hrefCode="https://villokodehode.github.io/Job-simulator/"
          />

          <Project
            href="https://villokodehode.github.io/Christmas-Calender/"
            projectName="Christmas Calender"
            src={"./src/assets/Christmas calendar.png"}
            description="Et samarbeidsprosjekt hvor jeg har laget min egen variant"
            hrefCode="https://github.com/VilloKodeHode/Christmas-Calender"
          />

          <Project
            href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
            projectName="Valhalla Beards"
            src={"./src/assets/Valhalla beards.png"}
            description="Figma prosjekt for en imaginær barbershop"
          />

          <Project
            href="https://villokodehode.github.io/CSS-art/"
            projectName="CSS Art"
            src={"./src/assets/Css art.png"}
            description="Prøvde å se mulighetene med css"
            hrefCode="https://github.com/VilloKodeHode/CSS-art"
          />
          <Project
            href="/PokeAPI"
            projectName="PokeAPI"
            src={"./src/assets/PokeAPI.png"}
            description="Første API'en jeg har lagd"
            hrefCode="https://github.com/VilloKodeHode/CSS-art"
          />
        </div>
      </section>
    </main>
  );
}

export default SkillsAndKnowledgeSection;
