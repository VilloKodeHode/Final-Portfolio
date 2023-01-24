import Project from "./projectcard";
import { ProjectRouted } from "./projectcard";
import { useState, useContext } from "react";
import ThemeContext from "../../ThemeSwitch/ThemeContext.js";

//images
import XMasCalendar from "./assets/Christmas calendar.png";
import CssArt from "./assets/Css art.png";
import JobSimulator from "./assets/Job Simulator.png";
import PokeAPI from "./assets/PokeAPI.png";
import STYRKETRENINGSTIPS from "./assets/strength training tips.png";
import ValhallaBeards from "./assets/Valhalla beards.png";
import VSF from "./assets/VStrengthFormula.png";
import ROCKPAPERSCISSORS from "./assets/RPS.png";

//css
import "./assets/Projects.css";
import { RenderLessParticles } from "../../Particles/Particles";
import { ProjectDrawer } from "./ProjectDrawer";

function ProjectSection() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <>
      {selectedTheme === "Tranquil" && <RenderLessParticles />}

      <div className="w-screen h-screen absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <section
          className="flex flex-row h-full flex-wrap justify-center content-center sm:mx-[10%] mx-[5%] z-20"
          id="projects"
        >
          {/* Lag component ut av denne for å bruke på de forskjellige sidene: */}
          <div className="absolute top-4 md:left-1/2 left-6 md:-translate-x-1/2 text-black h-fit text-3xl font-Roboto bg-superDry-accent p-2 skew-x-12">
            <h2 className="-skew-x-12">Prosjekter</h2>
          </div>
          <div className="flex justify-center m-auto content-center flex-wrap">
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
              href="https://villokodehode.github.io/Rock--Paper--Scissors--Lizard--Spock-game/#/"
              projectName="Rock, Paper, Scissors"
              src={ROCKPAPERSCISSORS}
              description="Stein, saks papir +++...."
              hrefCode="https://github.com/VilloKodeHode/Rock--Paper--Scissors--Lizard--Spock-game"
            />
            <Project
              href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
              projectName="Valhalla Beards"
              src={ValhallaBeards}
              description="Figma prosjekt for en imaginær barbershop"
            />

            <Project
              href="https://villokodehode.github.io/PokeAPI/"
              projectName="PokeAPI"
              src={PokeAPI}
              description="Den første API'en jeg har laget. Generasjon 1-3 Pokemon vises"
              hrefCode="https://github.com/VilloKodeHode/PokeAPI"
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
      {selectedTheme === "Tranquil" && (
        <div className="absolute top-0 bottom-0 left-0 right-0 h-screen QualificationsBG"></div>
      )}
      {selectedTheme === "Professional" && (
        <div className="absolute top-0 bottom-0 left-0 right-0 h-screen bg-superDry-bg"></div>
      )}
    </>
  );
}

export default ProjectSection;
