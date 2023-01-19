import Project from "./projectcard";
import { ProjectRouted } from "./projectcard";

//images
import XMasCalendar from "./assets/Christmas calendar.png";
import CssArt from "./assets/Css art.png";
import JobSimulator from "./assets/Job Simulator.png";
import PokeAPI from "./assets/PokeAPI.png";
import STT from "./assets/strength training tips.png";
import ValhallaBeards from "./assets/Valhalla beards.png";
import VSF from "./assets/VStrengthFormula.png";
import RPS from "./assets/RPS.png";

//css
import "./assets/Projects.css";
import { RenderLessParticles } from "../../Particles/Particles";

function ProjectSection() {
  return (
    <>
      <RenderLessParticles />

      <div className="w-full absolute top-16 left-1/2 -translate-x-1/2 z-20">
        <section
          className="flex flex-row flex-wrap justify-center mx-24 xl:mx-80 z-20"
          id="projects"
        >
          <h2 className=" mb-2 text-white font-Roboto">Prosjekter</h2>
          <div className="flex justify-center flex-wrap">
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

            {/* <Project
              href="https://villokodehode.github.io/CSS-art/"
              projectName="CSS kunst"
              src={CssArt}
              description="Selvinitiert mini prosjekt. Prøvde å se mulighetene med css"
              hrefCode="https://github.com/VilloKodeHode/CSS-art"
            /> */}
            <ProjectRouted
              to="/PokeAPI"
              projectName="PokeAPI"
              src={PokeAPI}
              description="Den første API'en jeg har laget. Generasjon 1-3 Pokemon vises"
              hrefCode="https://github.com/VilloKodeHode/use-effect/tree/master/src/component/PokeAPI"
            />
            <Project
              href="https://villokodehode.github.io/strength-training-tips-app/"
              projectName="Styrketrenings tips"
              src={STT}
              description="Første forsøk på tailwind med noe av min kunnskap om trening"
              hrefCode="https://github.com/VilloKodeHode/strength-training-tips-app"
            />
            {/* <Project
              href="https://villokodehode.github.io/daisy-and-tailwind/"
              projectName="V Styrke Formula"
              src={VSF}
              description="Første forsøk på tailwind + daisyUI"
              hrefCode="https://github.com/VilloKodeHode/daisy-and-tailwind"
            /> */}
            <ProjectRouted
              to="/RockPaperScissors"
              projectName="Rock, Paper, Scissors"
              src={RPS}
              description="Stein, saks papir spill"
              hrefCode="https://github.com/VilloKodeHode/use-effect/tree/master/src/component/PokeAPI"
            />
          </div>
        </section>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen QualificationsBG"></div>
    </>
  );
}

export default ProjectSection;
