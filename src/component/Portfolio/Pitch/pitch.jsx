import { useState, useContext } from "react";
import ThemeContext from "../../ThemeSwitch/ThemeContext";
import Button from "../../Buttons/Button";

export function PitchText(props) {
  const { selectedTheme } = useContext(ThemeContext);
  const { title, text } = props;
  return (
    <>
      <p className="md:p-4">
        <span
          className={`text-xl underline" ${
            selectedTheme === "Tranquil"
              ? " text-water-300"
              : " text-superDry-primary"
          }`}
        >
          {title}
        </span>
        <br />
        {text}
      </p>
    </>
  );
}

const PitchWindow = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className={`pitch-btn -skew-x-12  ${
          selectedTheme === "Tranquil"
            ? " bg-water-100 text-fairy-300"
            : " bg-superDry-accent text-superDry-primary rounded-none"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="skew-x-12">Hva motiverer meg?</div>
      </button>
      {toggle && (
        <div class="absolute h-[90%] md:h-fit w-[90%] md:text-sm text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Button
            idAndClass="pitch-close-btn"
            text="❌"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`h-full grid p-12 rounded-md shadow-2xl animate-RPSPopUp ${
              selectedTheme === "Tranquil"
                ? " bg-water-100 text-fairy-300"
                : " bg-superDry-accent text-superDry-primary"
            }`}
          >
            <PitchText
              title="Hva jeg liker med koding:"
              text="Nye kode utfordringer er noe jeg gleder meg til. Mulighetene som
              åpner seg når man forstår noe nytt gjør at man så å si aldri kan
              klare å lære alt, som jeg synes er utrolig motiverende. Det vil si
              at jeg alltid kan lære noe nytt i dette faget!"
            />
            {/* <PitchText
              title="Å bidra i arbeidsmiljøet er for meg veldig viktig:"
              text="Jeg ønsker å jobbe et sted hvor man bidrar til hverandres
              utvikling. Å hjelpe andre er en veldig fin måte å lære på, men
              samtidig får man sett problemer og løsninger fra en annen side og
              kanskje lærer man selv enn bedre måte å gjøre ting på."
            /> */}
            <PitchText
              title="Jeg ønsker å jobbe med UI og UX:"
              text="Dette er for meg veldig interessant og lærerikt å jobbe med. Jeg
              gleder meg til å lære meg flere kode-språk for å kunne gjøre dette
              bedre. Jeg håper å komme i et arbeidsmiljø som liker kode, design,
              team-arbeid, kompetanse-heving og kvalitet."
            />
            <PitchText
              title="Jeg har spesialisert meg på React"
              text="Etter å ha lært react har jeg hovedsakelig fokusert på å lære det best mulig."
            />
            <PitchText
              title="Personlighet:"
              text="Jeg er kreativ, sosial, har en indre motivasjon til å lære og er en god lagspiller. Jeg har brukt hundrevis av timer utenom front-end-kurset for å lære så mye som mulig om koding. På kurset jeg har deltatt på, bekreftes dette av mine medstudenter som sier at jeg også er kunnskapsrik, hjelpsom, villig til å lære og alltid yter det lille ekstra."
            />
            <PitchText
              title="Interesser:"
              text="Jeg er kreativ, sosial, har en indre motivasjon til å lære og er en god lagspiller. Jeg har brukt hundrevis av timer utenom front-end-kurset for å lære så mye som mulig om koding. På kurset jeg har deltatt på, bekreftes dette av mine medstudenter som sier at jeg også er kunnskapsrik, hjelpsom, villig til å lære og alltid yter det lille ekstra."
            />
          </div>
        </div>
      )}
    </>
  );
};

export const AboutWindow = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className={`pitch-btn -skew-x-12 ${
          selectedTheme === "Tranquil"
            ? " bg-water-100 text-fairy-300"
            : " bg-superDry-accent text-superDry-primary rounded-none"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="skew-x-12">Om meg</div>
      </button>
      {toggle && (
        <div class="absolute md:w-fit h-fit w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Button
            idAndClass="pitch-close-btn"
            text="❌"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`h-full grid p-12 rounded-md shadow-2xl animate-RPSPopUp ${
              selectedTheme === "Tranquil"
                ? " bg-water-100 text-fairy-300"
                : " bg-superDry-accent text-superDry-primary"
            }`}
          >
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
          </div>
        </div>
      )}
    </>
  );
};

export default PitchWindow;
