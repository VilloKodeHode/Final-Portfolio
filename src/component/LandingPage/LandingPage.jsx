import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";

import "../../../src/App.css";

//images

import RenderParticles from "../Particles/Particles";
import RenderHexagons from "../Particles/Polygon";

function LandingPage() {
  return (
    <>
      <RenderParticles />
      {/* <RenderHexagons /> */}

      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen LandingPageBG"></div>
      <div className=" top-0 left-0 flex flex-col w-full h-full z-50 font-Roboto tracking-widest select-none">
        <div className="landingPage z-50">
          <div className="lg:text-[250px] md:text-[150px] text-[100px] z-10 text-water-100 absolute left-1/2 -translate-x-1/2 top-36 h-fit">
            Villo
          </div>

          {/* Add a startscreen navigation in the center of the screen */}

          <div className="landingPageSmaller leading-snug w-2/3 text-fairy-200 lg:text-[60px] md:text-[50px] text-[40px] absolute top-60 left-1/2 -translate-x-1/2 z-20">
            {/* <span className="menu menu-horizontal "> */}
            {/* <li>
                <Link to="/Contact" className="p-0 text-fairy-100 stroked"> */}
            K
            {/* </Link>
                <ul className="text-earth-300">
                  <li className="absolute w-fit bottom-16 left-0">
                    <Link to="/Contact" className="stroked">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </li>
            </span> */}
            ode{" "}
            {/* <span className="menu menu-horizontal ">
              <li>
                <Link to="/About" className="p-0 text-fairy-100 stroked"> */}
            o
            {/* </Link>
                <ul className="text-earth-300">
                  <li className="absolute w-fit bottom-16 -right-8">
                    <Link to="/About" className="stroked">
                      Om
                    </Link>
                  </li>
                </ul>
              </li>
            </span> */}
            g Design <br /> med en{" "}
            {/* <div className="text-lg absolute top-1/2 underline">
                Aspirerende utvikler
              </div> */}
            {/* <span className="menu menu-horizontal">
              <li>
                <Link to="/Projects" className="p-0 text-fairy-100 stroked"> */}
            p
            {/* </Link>
                <ul className="text-earth-300">
                  <li className="absolute w-fit bottom-40 -left-20">
                    <Link to="/Projects" className="stroked">
                      Prosjekter
                    </Link>
                  </li>
                </ul>
              </li>
            </span> */}
            er
            {/* <span className="text-opacity-90 menu menu-horizontal">
              <li>
                <Link
                  to="/Qualifications"
                  className="p-0 text-fairy-100 stroked"
                > */}
            s
            {/* </Link>
                <ul className="text-earth-300">
                  <li className="absolute w-fit bottom-40 -left-24">
                    <a to="/Qualifications" className="stroked">
                      Skills
                    </a>
                  </li>
                </ul>
              </li>
            </span> */}
            onlig touch
          </div>

          {/* <p className="text-xl text-earth-400 opacity-90">
            Klikk på bokstavene <br /> for å navigere
          </p> */}
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default LandingPage;
