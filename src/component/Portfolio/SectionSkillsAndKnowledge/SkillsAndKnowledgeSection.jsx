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
import { RenderLessParticles } from "../../Particles/Particles.jsx";

function SkillsAndKnowledgeSection() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <RenderLessParticles />
      <section
        className="z-20 knowledge w-3/4 absolute top-16 left-1/2 -translate-x-1/2"
        id="knowledge"
      >
        <div className="flex flex-col  h-fit">
          {/* border-2 border-fairy-400 bg-fairy-300 bg-opacity-90 rounded-3xl */}
          <div className="w-full flex justify-center">
            <h2 className="mb-8 text-white text-5xl font-Roboto">Kunnskap</h2>
          </div>
          <Button
            idAndClass="bg-accent btn p-4 mb-8 rounded-2xl border-2 shadow-xl w-fit m-auto text-black"
            text="Skills"
            onClick={() => setToggle(!toggle)}
          />

          <div className="flex justify-center flex-wrap xl:gap-16 md:gap-12 sm:gap-8 gap-4">
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

            <KnowledgeIcon
              src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png"
              alt="PHP"
            />

            <KnowledgeIcon
              src="https://cdn-icons-png.flaticon.com/512/5815/5815421.png"
              alt="Python"
            />

            <KnowledgeIcon
              src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
              alt="React"
            />
            <KnowledgeIcon src={VSC} alt="VSC" />
            <KnowledgeIcon
              src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
              alt="Vite"
            />

            <KnowledgeIcon src={Tailwind} alt="Tailwind" />

            <KnowledgeIcon
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="Figma"
            />

            <KnowledgeIcon
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
              alt="Canva"
            />
            <KnowledgeIcon src={Photoshop} alt="Photoshop" />

            <KnowledgeIcon src={Git} alt="Git" />
            <KnowledgeIcon
              src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
              alt="GitHub"
            />
          </div>
        </div>

        {toggle && (
          <div className="bg-earth-100 bg-opacity-90 shadow-2xl shadow-black rounded-l-xl p-8 overflow-y-scroll scrollbar scrollbar-thumb-base-300 scrollbar-track-transparent fixed md:w-[95%] w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <button
              className="absolute top-4 right-8 bg-transparent p-0"
              onClick={() => setToggle(!toggle)}
            >
              ❌
            </button>
            <div className="flex flex-col justify-start">
              <div className="w-full flex justify-center">
                <h2 className="mb-10 myskills-header p-4 border-2 border-water-400 bg-water-100 text-water-600 w-fit rounded-xl">
                  My skills
                </h2>
              </div>

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
      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen QualificationsBG"></div>
    </>
  );
}

export default SkillsAndKnowledgeSection;
