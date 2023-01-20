import Cv from "../CvWithEffectsAndLink/Cv";
import PitchWindow, { AboutWindow } from "../Pitch/pitch";
import { PitchText } from "../Pitch/pitch";
import "../Pitch/pitch.css";

//images:

import StandardCV from "./assets/Standard CV space.pdf";
import StandardCVPic from "./assets/Standard CV pic space.png";
import FancyCV from "./assets/Fancy CV space.png";
import JOAKIM from "./assets/Villo.png";

//styles:
import "../../Portfolio/CvWithEffectsAndLink/CvEffectsAndLink.css";

function HeroSection() {
  return (
    <>
      <header className="absolute top-0 left-0 h-screen px-8 grid grid-rows-2 grid-cols-2 text-secondary z-20 xl:mx-24 md:mx-12 sm:mx-4 ">
        <article className="m-auto">
          <h1 className="my-4" id="home">
            <span className="text-water-100 text-7xl">Joakim Villo</span>
          </h1>
          <p className="text-water-200 md:w-2/3 mx-auto">
            For tiden går jeg på kurs om Front-End-Development og bruker
            endeløse timer på å lære så mye jeg kan om koding og design. Jeg
            nyter hvert eneste sekund og blir bare mer og mer interessert i å
            lære mer!
          </p>
        </article>
        <div className="m-auto">
          <img
            className="md:h-80 sm:h-64 h-44 border-b-8 border-earth-400 rounded-full"
            src={JOAKIM}
          />
        </div>
        <div className="wrapper cv-wrapper">
          <Cv href={StandardCV} src={StandardCVPic} className="cv standard" />
          <Cv href={FancyCV} src={FancyCV} className="cv fancy" />
        </div>
        <div className="md:w-2/3 mx-auto">
          {/* <article className="m-auto">
            <PitchText
              title="Jeg elsker å kode."
              text="Jeg koder masse på fritiden og synes det er kjempegøy å lære noe
              nytt. Mestringsfølelsen av å få til noe som jeg har sittet fast
              med lenge er helt fantastisk!"
            />
            <PitchText
              title="Jeg ønsker å lære og elsker å lære bort."
              text="Kunnskap er ment for å deles og jeg mener at alle parter tjener på å lære bort det man kan"
            />
            <PitchText
              title="Mitt ønske er å jobbe med UI og UX."
              text="Jeg har som mål å lære så mye som mulig om dette. JavaScript med React og Vite lærer
              jeg nå, men jeg har et veldig sterkt ønske å utvide repertoaret
              mitt med andre kode-språk."
            />
          </article> */}
          <AboutWindow />
          <PitchWindow />
        </div>
      </header>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen HeroBG z-10"></div>
    </>
  );
}

export default HeroSection;
