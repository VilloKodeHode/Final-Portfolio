import { useContext } from "react";
import ThemeContext from "../../ThemeSwitch/ThemeContext";
import PitchWindow, { AboutWindow } from "../Pitch/pitch";
import { RenderLessParticles } from "../../Particles/Particles";

//images:

import Cv from "../CvWithEffectsAndLink/Cv";
import StandardCV from "./assets/Standard CV space.pdf";
import StandardCVPic from "./assets/Standard CV pic space.png";
import FancyCV from "./assets/Fancy CV space.png";
import JOAKIM from "./assets/Villo.png";

//styles:
import "../../Portfolio/CvWithEffectsAndLink/CvEffectsAndLink.css";
import "../Pitch/pitch.css";

function HeroSection() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <>
      {selectedTheme === "Tranquil" && <RenderLessParticles />}
      <header className="absolute top-0 left-0 h-screen px-8 grid sm:grid-rows-2 grid-cols-1 mt-12 sm:mt-0 sm:grid-cols-2 text-secondary z-20 xl:mx-24 md:mx-12 sm:mx-4 ">
        <article className="m-auto">
          <h1 className="my-4" id="home">
            <span
              className={`text-water-100 font-Roboto text-7xl ${
                selectedTheme === "Tranquil"
                  ? " text-water-100"
                  : " text-superDry-accent"
              }`}
            >
              Joakim Villo
            </span>
          </h1>

          <p
            className={` md:w-2/3 mx-auto ${
              selectedTheme === "Tranquil"
                ? " text-water-200"
                : " text-superDry-primary"
            }`}
          >
            For tiden går jeg på kurs om Front-End-Development og bruker
            endeløse timer på å lære så mye jeg kan om koding og design. Jeg
            nyter hvert eneste sekund og blir bare mer og mer interessert i å
            lære mer!
          </p>
        </article>
        <div className="m-auto">
          <img
            className={`md:h-80 h-64 ${
              selectedTheme === "Tranquil"
                ? "border-earth-400 rounded-full"
                : "border-superDry-effect mask mask-parallelogram-2"
            }`}
            src={JOAKIM}
          />
        </div>
        <div className="wrapper cv-wrapper">
          <Cv href={StandardCV} src={StandardCVPic} className="cv standard" />
          <Cv href={FancyCV} src={FancyCV} className="cv fancy" />
        </div>
        <div className="md:w-2/3 mx-auto">
          <AboutWindow />
          <PitchWindow />
        </div>
      </header>

      {selectedTheme === "Tranquil" && (
        <div className="absolute top-0 bottom-0 left-0 right-0 h-screen HeroBG"></div>
      )}
      {selectedTheme === "Professional" && (
        <div className="absolute top-0 bottom-0 left-0 right-0 h-screen bg-superDry-bg"></div>
      )}
    </>
  );
}

export default HeroSection;
