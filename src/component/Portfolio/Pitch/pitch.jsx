import { useState } from "react";
import Button from "../../Buttons/Button";

export function PitchText(props) {
  const { title, text } = props;
  return (
    <>
      <p className="p-2">
        <span className="text-blue-600">{title}</span>
        <br />
        {text}
      </p>
    </>
  );
}

const PitchWindow = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Button
        idAndClass="pitch-btn"
        text="Mer om meg"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <div class="pitch">
          <Button
            idAndClass="pitch-close-btn"
            text="❌"
            onClick={() => setToggle(!toggle)}
          />
          <div className="pitch-text">
            <PitchText
              title="Hva jeg liker med koding:"
              text="Nye kode utfordringer er noe jeg gleder meg til. Mulighetene som
              åpner seg når man forstår noe nytt gjør at man så å si aldri kan
              klare å lære alt, som jeg synes er utrolig motiverende. Det vil si
              at jeg alltid kan lære noe nytt i dette faget!"
            />
            <PitchText
              title="Å bidra i arbeidsmiljøet er for meg veldig viktig:"
              text="Jeg ønsker å jobbe et sted hvor man bidrar til hverandres
              utvikling. Å hjelpe andre er en veldig fin måte å lære på, men
              samtidig får man sett problemer og løsninger fra en annen side og
              kanskje lærer man selv enn bedre måte å gjøre ting på."
            />
            <PitchText
              title="Jeg ønsker å jobbe med UI og UX:"
              text="Dette er for meg veldig interessant og lærerikt å jobbe med. Jeg
              gleder meg til å lære meg flere kode-språk for å kunne gjøre dette
              bedre. Jeg håper å komme i et arbeidsmiljø som liker kode, design,
              team-arbeid, kompetanse-heving og kvalitet."
            />
            <PitchText
              title="Personlighet:"
              text="Jeg er kreativ, utadvendt, har stå-på vilje og er en god
              lag-spiller. I tillegg er jeg ekstremt motivert og har brukt
              hundrevis av timer utenom mitt nåværende kurs på å lære meg
              koding. På KodeHode-kurset sier mine medstudenter at jeg i tillegg
              er kunnskapsrik, hjelpsom, lærevillig og gir alltid det lille
              ekstra."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PitchWindow;
