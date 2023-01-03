import Project from "./projectcard";
import { ProjectRouted } from "./projectcard";

function ProjectSection() {
  return (
    <section className="flex flex-row flex-wrap justify-center" id="projects">
      <h2 className=" mb-6 mt-24 text-white">Projects</h2>
      <div className="flex justify-center flex-wrap">
        <Project
          href="https://villokodehode.github.io/Job-simulator/"
          projectName="Job simulator"
          src={"./src/assets/First DOMS.png"}
          description="Et prosjekt for å prøve ut det jeg har lært"
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
          description="Selvinitiert mini prosjekt. Prøvde å se mulighetene med css"
          hrefCode="https://github.com/VilloKodeHode/CSS-art"
        />
        {/* Må ha "Link" på PokeAPI her */}
        <ProjectRouted
          to="/PokeAPI"
          projectName="PokeAPI"
          src={"./src/assets/PokeAPI.png"}
          description="Den første API'en jeg har laget. 151 Pokemon vises"
          hrefCode="https://github.com/VilloKodeHode/use-effect/tree/master/src/component/PokeAPI"
        />
        <Project
          href="https://villokodehode.github.io/strength-training-tips-app/"
          projectName="Strength training tips"
          src={"./src/assets/strength training tips.png"}
          description="Første forsøk på tailwind med noe av min kunnskap om trening"
          hrefCode="https://github.com/VilloKodeHode/strength-training-tips-app"
        />
        <Project
          href="https://villokodehode.github.io/daisy-and-tailwind/"
          projectName="V Strength Formula"
          src={"./src/assets/VStrengthFormula.png"}
          description="Første forsøk på tailwind + daisyUI"
          hrefCode="https://github.com/VilloKodeHode/daisy-and-tailwind"
        />
      </div>
    </section>
  );
}

export default ProjectSection;
