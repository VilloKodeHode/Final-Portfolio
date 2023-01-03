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

function ProjectSection() {
  return (
    <section className="flex flex-row flex-wrap justify-center" id="projects">
      <h2 className=" mb-6 mt-24 text-white">Projects</h2>
      <div className="flex justify-center flex-wrap">
        <Project
          href="https://villokodehode.github.io/Job-simulator/"
          projectName="Job simulator"
          src={JobSimulator}
          description="Et prosjekt for å prøve ut det jeg har lært"
          hrefCode="https://villokodehode.github.io/Job-simulator/"
        />

        <Project
          href="https://villokodehode.github.io/Christmas-Calender/"
          projectName="Christmas Calender"
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
          href="https://villokodehode.github.io/CSS-art/"
          projectName="CSS Art"
          src={CssArt}
          description="Selvinitiert mini prosjekt. Prøvde å se mulighetene med css"
          hrefCode="https://github.com/VilloKodeHode/CSS-art"
        />
        {/* Må ha "Link" på PokeAPI her */}
        <ProjectRouted
          to="/PokeAPI"
          projectName="PokeAPI"
          src={PokeAPI}
          description="Den første API'en jeg har laget. 151 Pokemon vises"
          hrefCode="https://github.com/VilloKodeHode/use-effect/tree/master/src/component/PokeAPI"
        />
        <Project
          href="https://villokodehode.github.io/strength-training-tips-app/"
          projectName="Strength training tips"
          src={STT}
          description="Første forsøk på tailwind med noe av min kunnskap om trening"
          hrefCode="https://github.com/VilloKodeHode/strength-training-tips-app"
        />
        <Project
          href="https://villokodehode.github.io/daisy-and-tailwind/"
          projectName="V Strength Formula"
          src={VSF}
          description="Første forsøk på tailwind + daisyUI"
          hrefCode="https://github.com/VilloKodeHode/daisy-and-tailwind"
        />
      </div>
    </section>
  );
}

export default ProjectSection;
