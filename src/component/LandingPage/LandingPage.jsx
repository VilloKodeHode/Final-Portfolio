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
              className="menu menu-normal dropdown-content text-water-200 mt-0 p-2 shadow -translate-x-6 rounded-box w-48 backdrop-blur-sm z-50"
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
      <Outlet />
    </>
  );
}

export default LandingPage;
