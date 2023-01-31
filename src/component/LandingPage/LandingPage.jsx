import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";
import { Link } from "react-router-dom";
import anime from "animejs";

import "../../../src/App.css";

//images

import RenderParticles from "../Particles/Particles";
import NavDrawer from "../NavBar/NavDrawer";

// {
//   selectedTheme === "Professional" && (
//     <div>
//       <h1>Professional theme</h1>
//     </div>
//   );
// }
// {
//   selectedTheme === "Tranquil" && (
//     <div>
//       <h1>Tranquil theme</h1>
//     </div>
//   );
// }

function LandingPage() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <>
      {selectedTheme === "Tranquil" && (
        <>
          <RenderParticles />

          <div className="absolute top-0 bottom-0 left-0 right-0 h-screen LandingPageBG"></div>

          <div className="landingPage z-50 font-Roboto tracking-widest select-none">
            <div className="lg:-translate-y-12 lg:text-[250px] text-[200px] m-auto z-50 text-water-100 h-[70px]">
              Villo
            </div>
            <div className="m-auto leading-snug md:w-2/3 w-[85%] text-water-300 lg:text-[60px] md:text-[50px] text-[40px] z-20">
              Kode og Design med en personlig touch
            </div>
            <div className="bg-opacity-50">
              <div className="dropdown">
                <label tabIndex={0} className="btn bg-fairy-400 text-water-100">
                  Tour my site
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-normal dropdown-content text-superDry-secondary mt-0 p-2 shadow -translate-x-6 rounded-box w-48 backdrop-blur-sm z-50"
                >
                  <li>
                    <Link className="m-auto text-3xl" to="/About">
                      Om
                    </Link>
                  </li>
                  <li>
                    <Link className="m-auto text-3xl" to="/Qualifications">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link className="m-auto text-3xl" to="/Projects">
                      Prosjekter
                    </Link>
                  </li>
                  <li>
                    <Link className="m-auto text-3xl" to="/Contact">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTheme === "Professional" && (
        <>
          <div className="absolute top-0 left-0 h-screen w-screen bg-superDry-bg">
            <div className="landingPagePro z-50 font-Roboto tracking-widest select-none">
              <div className="flex justify-start">
                <div className=" lg:text-[250px] text-[200px] m-auto text-superDry-primary">
                  Villo
                </div>
              </div>
              <div className="m-auto leading-snug md:w-2/3 w-[85%] text-superDry-accent lg:text-[60px] md:text-[50px] text-[40px] z-20">
                Kode og Design med en personlig touch
                <NavDrawer />
              </div>
              <div>something</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LandingPage;
