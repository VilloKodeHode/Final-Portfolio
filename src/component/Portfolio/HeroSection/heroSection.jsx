import Cv from "../CvWithEffectsAndLink/Cv";
import PitchWindow from "../Pitch/pitch";
import { PitchText } from "../Pitch/pitch";
import "../Pitch/pitch.css";

//styles:
import "../../Portfolio/CvWithEffectsAndLink/CvEffectsAndLink.css";

function HeroSection() {
  return (
    <>
      <header className="m-h-screen pt-36 grid grid-rows-2 grid-cols-2 px-8">
        <article className="m-auto">
          <h1 id="home">
            <span className="text-red-600 text-7xl">Joakim Villo</span>
          </h1>
          <p>
            For tiden går jeg på kurs om Front-End-Development og bruker
            endeløse timer på å lære så mye jeg kan om koding og design. Jeg
            nyter hvert eneste sekund og blir bare mer og mer interessert i å
            lære mer!
          </p>
        </article>
        <div className="flex justify-center h-fit">
          <img className="h-80" src={"./src/assets/JVlogo.png"} />
        </div>
        <div className="wrapper cv-wrapper">
          <Cv
            href="./src/assets/Standard CV space.pdf"
            src="./src/assets/Standard CV pic space.png"
            className="cv standard"
          />
          <Cv
            href="./src/assets/Fancy CV space.png"
            src="./src/assets/Fancy CV space.png"
            className="cv fancy"
          />
        </div>
        <div className="m-auto">
          <article className="m-auto">
            <PitchText
              title="Jeg elsker å kode."
              text="Jeg koder masse på fritiden og synes det er kjempegøy å lære noe
              nytt. Mestringsfølelsen av å få til noe som jeg har sittet fast
              med lenge er helt fantastisk!"
            />
            <PitchText
              title="Å bidra i arbeidsmiljøet er for meg veldig viktig."
              text="Det å hjelpe andre og motta hjelp med åpne hender synes jeg er
              utrolig viktig i et team."
            />
            <PitchText
              title="Mitt ønske er å jobbe med UI og UX."
              text="Jeg har som mål å lære så mye som mulig om dette. JavaScript med React og Vite lærer
              jeg nå, men jeg har et veldig sterkt ønske å utvide repertoaret
              mitt med andre kode-språk."
            />
          </article>
          <PitchWindow />
        </div>
      </header>
    </>
  );
}

export default HeroSection;
