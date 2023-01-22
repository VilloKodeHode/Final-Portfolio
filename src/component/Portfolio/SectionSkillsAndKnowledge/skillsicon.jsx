import Button from "../../Buttons/Button";
import Git from "./assets/Git.png";
import Photoshop from "./assets/Photoshop.png";
import Tailwind from "./assets/Tailwind.png";
import VSC from "./assets/VSC.png";
import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../../ThemeSwitch/ThemeContext";

export function KnowledgeIcon(props) {
  const { selectedTheme } = useContext(ThemeContext);
  const { src, alt } = props;
  return (
    <>
      <div
        className={`relative skew-x-[10deg] odd:skew-y-[5deg] even:-skew-y-[5deg] hover:skew-x-[0deg] hover:odd:skew-y-[0deg] hover:even:-skew-y-[0deg] transition bg-black`}
      >
        <figure className="p-4 m-4 z-50 ">
          <img className="xl:h-16 h-10" src={src} alt={alt} />
        </figure>

        {/* <div className="mask mask-diamond bg-water-500 xl:h-36 h-24 xl:w-36 w-24 bg-opacity-70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10"></div> */}
        {/* <div className="bg-water-600 rounded-xl shadow-xl mask mask-parallelogram xl:h-36 h-24 xl:w-36 w-24 bg-opacity-70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-20"></div> */}
      </div>
    </>
  );
}

export function KnowledgeIconLinked(props) {
  const { src, alt, href } = props;

  return (
    <a
      className="[&>*]:hover:shadow-lg [&>*]:hover:scale-150"
      href={href}
      target="_blank"
    >
      <figure className="p-3 ml-4 border duration-500 ease-out rounded-full">
        <img className="h-12" src={src} alt={alt} />
      </figure>
    </a>
  );
}

export function MySkills(props) {
  const { selectedTheme } = useContext(ThemeContext);
  const { title, src, description } = props;
  return (
    <>
      <figure
        className={`w-52 p-2 my-4 mx-4 rounded border-t-4 border-b-4 shadow-xl  ${
          selectedTheme === "Tranquil"
            ? " bg-water-300 border-water-100"
            : " bg-superDry-accent text-superDry-primary border-superDry-accent2 rounded-none odd:skew-x-6 even:-skew-x-6"
        }`}
      >
        <div className="">
          <h3>{title}</h3>

          <img className="h-32 my-4 m-auto " src={src} />
          <p className="text-xs py-2">{description}</p>
        </div>
      </figure>
    </>
  );
}

export function KnowledgeContent() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col  h-fit">
      <div className="w-full flex justify-center">
        <h2
          className={`${
            selectedTheme === "Tranquil"
              ? " text-water-100"
              : " text-superDry-accent"
          } mb-8 text-water-100 text-5xl font-Roboto`}
        >
          Kunnskap
        </h2>
      </div>

      <div className="flex justify-center flex-wrap xl:gap-16 md:gap-12 sm:gap-8 gap-4">
        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/136/136528.png"
          alt="HyperText Markup Language"
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/136/136527.png"
          alt="Cascading StyleSheets"
        />
        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/136/136530.png"
          alt="JavaScript"
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png"
          alt="PHP"
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/5815/5815421.png"
          alt="Python"
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
          alt="React"
        />
        <KnowledgeIcon src={VSC} alt="VSC" />
        <KnowledgeIcon
          src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
          alt="Vite"
        />

        <KnowledgeIcon src={Tailwind} alt="Tailwind" />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
          alt="Figma"
        />

        <KnowledgeIcon
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
          alt="Canva"
        />
        <KnowledgeIcon src={Photoshop} alt="Photoshop" />

        <KnowledgeIcon src={Git} alt="Git" />
        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
          alt="GitHub"
        />
      </div>
    </div>
  );
}

export function SkillsContent() {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className={`m-8 border-2 shadow-xl w-fit font-bold -skew-x-12 ${
          selectedTheme === "Tranquil"
            ? " bg-water-100 text-fairy-300"
            : " bg-superDry-accent text-superDry-primary rounded-none"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="skew-x-12">Skills</div>
      </button>

      {toggle && (
        <div
          className={`${
            selectedTheme === "Tranquil"
              ? " bg-earth-100 text-water-100 scrollbar-thumb-water-400"
              : " bg-superDry-accent text-superDry-primary rounded-none scrollbar-thumb-superDry-accent2"
          } bg-opacity-90 shadow-2xl shadow-black rounded-l-xl p-8 overflow-y-scroll scrollbar  scrollbar-track-transparent fixed md:w-[95%] w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50`}
        >
          <button
            className="absolute top-4 right-8 bg-transparent p-0"
            onClick={() => setToggle(!toggle)}
          >
            ❌
          </button>
          <div className="flex flex-col justify-start">
            <div className="w-full flex justify-center">
              <h2
                className={`${
                  selectedTheme === "Tranquil"
                    ? "  border-water-400 bg-water-100 text-water-600"
                    : "border-superDry-effect bg-superDry-accent2 text-superDry-accent skew-x-[20deg] rounded-[0]"
                } mb-10 myskills-header p-4 border-2  w-fit rounded-xl`}
              >
                <div className="-skew-x-[20deg]">My skills</div>
              </h2>
            </div>

            <div className="flex justify-center flex-wrap">
              <MySkills
                title="Lede gruppe-prosjekter"
                src="https://cdn-icons-png.flaticon.com/512/8101/8101423.png"
                description="Jeg trives i rollen som leder har ofte blitt valgt av gruppen"
              />

              <MySkills
                title="Problemløser"
                src="https://cdn-icons-png.flaticon.com/512/4406/4406319.png"
                description="Å løse problemer synes jeg er veldig lærerikt"
              />

              <MySkills
                title="UI/UX"
                src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png"
                description="Design og brukervennlighet er noe jeg liker å jobbe med"
              />

              <MySkills
                title="Lærevillig"
                src="https://cdn-icons-png.flaticon.com/512/2490/2490396.png"
                description="Jeg elsker å lære om nye måter å gjøre ting på"
              />

              <MySkills
                title="Nysgjerrig"
                src="https://cdn-icons-png.flaticon.com/512/8738/8738602.png"
                description="Jeg liker å utforske muligheter og spør når jeg trenger hjelp"
              />
              <MySkills
                title="Idèrik"
                src="https://cdn-icons-png.flaticon.com/512/5863/5863097.png"
                description="Jeg kommer lett på idèer for å utføre arbeid"
              />
              <MySkills
                title="Initiativrik"
                src="https://cdn-icons-png.flaticon.com/512/3514/3514735.png"
                description="Jeg går raskt igang og gjør gjerne mye mer hvis det er tid"
              />
              <MySkills
                title="Entusiastisk"
                src="https://cdn-icons-png.flaticon.com/512/4214/4214085.png"
                description="Det skal veldig lite til for at jeg blir ekstremt motivert"
              />
              <MySkills
                title="Kreativ"
                src="https://cdn-icons-png.flaticon.com/512/3940/3940179.png"
                description="Kreativitet er en av mine sterkeste egenskaper"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeIcon;
