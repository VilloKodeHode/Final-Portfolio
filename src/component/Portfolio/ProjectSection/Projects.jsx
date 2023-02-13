import Project from "./projectcard";
import { useContext } from "react";
import ThemeContext from "../../ThemeSwitch/ThemeContext.js";

//images
import XMasCalendar from "./assets/Christmas calendar.png";
import JobSimulator from "./assets/Job Simulator.png";
import PokeAPI from "./assets/PokeAPI.png";
import STYRKETRENINGSTIPS from "./assets/strength training tips.png";
import ValhallaBeards from "./assets/Valhalla beards.png";
import ROCKPAPERSCISSORS from "./assets/RPS.png";
import ADVICEGENERATOR from "./assets/Advice generator.png";
import MULTIPAGEFORM from "./assets/Multi page form.png";

//css
import "./assets/Projects.css";
import { RenderLessParticles } from "../../Particles/Particles";
import PageTitle from "../../base components/PageTitle";

function ProjectSection() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <>
      {selectedTheme === "Tranquil" && <RenderLessParticles />}

      <div className="">
        <section
          className="flex flex-row flex-wrap justify-center content-center sm:mx-[10%] mx-[5%] z-20"
          id="projects"
        >
          <PageTitle title="Projects" />
          <div className="flex justify-center m-auto content-center flex-wrap">
            <Project
              href="https://villokodehode.github.io/Rock--Paper--Scissors--Lizard--Spock-game/#/"
              projectName="Rock, Paper, Scissors"
              src={ROCKPAPERSCISSORS}
              description="Stein, saks papir +++...."
              hrefCode="https://github.com/VilloKodeHode/Rock--Paper--Scissors--Lizard--Spock-game"
            />
            <Project
              href="https://villokodehode.github.io/multi-step-form/"
              projectName="Multi step form"
              src={MULTIPAGEFORM}
              description="Bestillingsskjema med flere steg"
              hrefCode="https://github.com/VilloKodeHode/multi-step-form"
            />
            <Project
              href="https://villokodehode.github.io/advice-generator/"
              projectName="Advice generator"
              src={ADVICEGENERATOR}
              description="App for gode råd"
              hrefCode="https://github.com/VilloKodeHode/advice-generator"
            />
            <Project
              href="https://villokodehode.github.io/PokeAPI/"
              projectName="PokeAPI"
              src={PokeAPI}
              description="Den første API'en jeg har laget. Generasjon 1-3 Pokemon vises"
              hrefCode="https://github.com/VilloKodeHode/PokeAPI"
            />
            <Project
              href="https://villokodehode.github.io/Job-simulator/"
              projectName="Jobb simulator"
              src={JobSimulator}
              description="Mitt første JS prosjekt"
              hrefCode="https://villokodehode.github.io/Job-simulator/"
            />

            <Project
              href="https://villokodehode.github.io/Christmas-Calender/"
              projectName="Julekalender"
              src={XMasCalendar}
              description="Et samarbeidsprosjekt hvor jeg har laget min egen variant"
              hrefCode="https://github.com/VilloKodeHode/Christmas-Calender"
            />

            <Project
              href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
              projectName="Valhalla Beards"
              src={ValhallaBeards}
              description="Figma prosjekt for en imaginær barbershop"
            />

            <Project
              href="https://villokodehode.github.io/strength-training-tips-app/"
              projectName="Styrke-trenings tips"
              src={STYRKETRENINGSTIPS}
              description="Første forsøk på tailwind med noe av min kunnskap om trening"
              hrefCode="https://github.com/VilloKodeHode/strength-training-tips-app"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectSection;
