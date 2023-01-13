import KnowledgeIcon from "./skillsicon.jsx";
import { KnowledgeIconLinked } from "./skillsicon.jsx";
import { MySkills } from "./skillsicon.jsx";
import Button from "../../Buttons/Button.jsx";
import { useState } from "react";
import "./skills.css";

//images:
import Git from "./assets/Git.png";
import Photoshop from "./assets/Photoshop.png";
import Tailwind from "./assets/Tailwind.png";
import VSC from "./assets/VSC.png";

function SkillsAndKnowledgeSection() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="knowledge" id="knowledge">
      <div className="flex flex-col m-auto ">
        <h2 className="mb-10 knowledge-header">Kunnskap</h2>
        <Button
          idAndClass="bg-accent btn p-4 rounded-2xl border-2 shadow-xl w-fit m-auto text-black"
          text="Skills"
          onClick={() => setToggle(!toggle)}
        />
        {/* <h3 className="text-2xl font-bold">Code</h3> */}
        <div className="flex justify-center flex-wrap gap-16">
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
          {/* </div> */}

          {/* <div> */}
          {/* <div className="indicator">
            <span className="indicator-item badge badge-primary">novice</span> */}
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png"
            alt="PHP"
          />
          {/* </div> */}

          {/* <div className="indicator">
            <span className="indicator-item badge badge-primary">novice</span> */}
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/5815/5815421.png"
            alt="Python"
          />
          {/* </div> */}
          {/* </div> */}

          {/* <h3 className="text-2xl font-bold">Tools</h3> */}
          {/* <div className="flex justify-center flex-wrap"> */}
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
            alt="React"
          />
          <KnowledgeIcon src={VSC} alt="VSC" />
          <KnowledgeIcon
            src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
            alt="Vite"
          />
          {/* </div> */}

          {/* <div className="flex justify-center flex-wrap"> */}
          <KnowledgeIcon src={Tailwind} alt="Tailwind" />
          {/* <KnowledgeIcon
            src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg"
            alt="DaisyUI"
          /> */}
          {/* </div> */}

          {/* <h3 className="text-2xl font-bold">Design</h3> */}
          {/* <div className="flex justify-center flex-wrap"> */}
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="Figma"
          />
          {/* <KnowledgeIconLinked
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="Figma"
            href="https://www.figma.com/files/project/74340755/Joakim?fuid=1166284176523730225"
          /> */}
          <KnowledgeIcon
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
            alt="Canva"
          />
          <KnowledgeIcon src={Photoshop} alt="Photoshop" />
          {/* </div> */}

          {/* <h3 className="text-2xl font-bold">Repository</h3> */}
          {/* <div className="flex justify-center flex-wrap"> */}
          <KnowledgeIcon src={Git} alt="Git" />
          <KnowledgeIcon
            src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
            alt="GitHub"
          />
          {/* <KnowledgeIconLinked
            src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
            alt="GitHub"
            href="https://github.com/VilloKodeHode"
          /> */}
        </div>
      </div>

      {toggle && (
        <div className="bg-base-100 shadow-2xl shadow-black rounded-tl-[200px] rounded-bl-xl p-8 overflow-y-scroll scrollbar scrollbar-thumb-base-300 scrollbar-track-transparent fixed w-2/3 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Button
            idAndClass="pitch-close-btn"
            text="❌"
            onClick={() => setToggle(!toggle)}
          />
          <div className="flex flex-col justify-start">
            <h2 className="mb-10 myskills-header">My skills</h2>
            {/* On load: Ha en knapp som viser innholdet istedet */}
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

              <MySkills
                title="Nysgjerrig"
                src="https://cdn-icons-png.flaticon.com/512/8738/8738602.png"
                description="Jeg liker å utforske muligheter og spør når jeg trenger hjelp"
              />
              <MySkills
                title="Idèrik"
                src="https://cdn-icons-png.flaticon.com/512/5863/5863097.png"
                description="Jeg kommer lett på idèer for å utføre arbeid"
              />
              <MySkills
                title="Initiativrik"
                src="https://cdn-icons-png.flaticon.com/512/3514/3514735.png"
                description="Jeg går raskt igang og gjør gjerne mye mer hvis det er tid"
              />
              <MySkills
                title="Entusiastisk"
                src="https://cdn-icons-png.flaticon.com/512/4214/4214085.png"
                description="Det skal veldig lite til for at jeg blir ekstremt motivert"
              />
              <MySkills
                title="Kreativ"
                src="https://cdn-icons-png.flaticon.com/512/3940/3940179.png"
                description="Kreativitet er en av mine sterkeste egenskaper"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SkillsAndKnowledgeSection;
