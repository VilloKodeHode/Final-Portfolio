import { useState } from "react";
import Button from "../../Buttons/Button";

export function PitchText(props) {
  const { title, text } = props;
  return (
    <>
      <p className="p-2">
        <span className="text-water-300 text-xl underline">{title}</span>
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
        idAndClass="pitch-btn bg-accent text-success"
        text="Mer om meg"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Button
            idAndClass="pitch-close-btn"
            text="❌"
            onClick={() => setToggle(!toggle)}
          />
          <div className="h-full grid bg-info p-12 rounded-md shadow-2xl">
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
              title="Jeg har spesialisert meg på React"
              text="Etter å ha lært react har jeg hovedsakelig fokusert på å lære det best mulig."
            />
            <PitchText
              title="Personlighet:"
              text="Jeg er kreativ, sosial, har en indre motivasjon til å lære og er en god lagspiller. Jeg har brukt hundrevis av timer utenom front-end-kurset for å lære så mye som mulig om koding. På kurset jeg har deltatt på, bekreftes dette av mine medstudenter som sier at jeg også er kunnskapsrik, hjelpsom, villig til å lære og alltid yter det lille ekstra."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PitchWindow;
