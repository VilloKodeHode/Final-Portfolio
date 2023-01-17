import { Outlet } from "react-router-dom";
import ConsumingContext from "../component/ConsumingContext";
import UseEffect from "../component/UseEffect";
import { Link } from "react-router-dom";
import Button from "../component/Buttons/Button";
import { useState } from "react";
import HamburgerBar from "../component/NavBar/HamburgerBar";

import "../App.css";

//images
import JVlogo from "./assets/JVlogo.png";

//videos

import RenderParticles from "../component/Particles/Particles";
import RenderHexagons from "../component/Particles/Polygon";

function LandingPage() {
  // const [toggle, setToggle] = useState(false);
  return (
    <>
      <RenderParticles />
      {/* <RenderHexagons /> */}

      <div className="absolute top-0 bottom-0 left-0 right-0 grid grid-cols-2 grid-rows-2 h-screen">
        {/* LandingPageBG */}
        <HamburgerBar />
      </div>
      <div className=" top-0 left-0 flex flex-col w-full h-full z-50">
        <div className="landingPage z-50">
          <div className="flex justify-center lg:text-[400px] md:text-[300px] text-[200px] flex-wrap z-10 text-slate-900">
            Villo
          </div>

          <div className="landingPageSmaller text-base-100 lg:text-[100px] md:text-[70px] text-[50px]">
            <span className="text-accent menu menu-horizontal">
              {/* <span className="absolute indicator-item badge badge-secondary animate-bounce">
                  contact
                </span> */}
              <li>
                <Link to="/Contact" className="p-0">
                  K
                </Link>
                <ul className="text-accent">
                  <li className="absolute w-fit bottom-16 left-0">
                    <Link to="/Contact" className="">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </li>
            </span>
            ode{" "}
            <span className="text-accent menu menu-horizontal ">
              {/* <span className="absolute indicator-item badge bg-transparent border-none animate-bounce">
                  ⇓⇓⇓
                </span> */}
              <li>
                <Link to="/About" className="p-0">
                  o
                </Link>
                <ul className="text-accent">
                  <li className="absolute w-fit bottom-16 -right-8">
                    <Link to="/About" className="">
                      Om
                    </Link>
                  </li>
                </ul>
              </li>
            </span>
            g Design <br /> med en{" "}
            {/* <div className="text-lg absolute top-1/2 underline">
                Aspirerende utvikler
              </div> */}
            <span className="text-accent menu menu-horizontal">
              {/* <span className="absolute indicator-item badge badge-secondary animate-bounce">
                  ⇓⇓⇓
                </span> */}
              <li>
                <Link to="/Projects" className="p-0">
                  p
                </Link>
                <ul className="text-accent">
                  <li className="absolute w-fit bottom-40 -left-20">
                    <Link to="/Projects" className="">
                      Prosjekter
                    </Link>
                  </li>
                </ul>
              </li>
            </span>
            er
            <span className="text-accent text-opacity-90 menu menu-horizontal">
              {/* <span className="absolute indicator-item badge badge-secondary animate-bounce">
                  skills
                </span> */}
              <li>
                <Link to="/Qualifications" className="p-0">
                  s
                </Link>
                <ul className="text-accent">
                  <li className="absolute w-fit bottom-40 -left-24">
                    <a to="/Qualifications" className="">
                      Skills
                    </a>
                  </li>
                </ul>
              </li>
            </span>
            onlig touch
          </div>
          {/* <div className="flex content-center justify-center flex-wrap">
            Develo
            <span className="text-orange-500 text-opacity-50 menu menu-horizontal">
            <li>
                <a to="/Portfolio" className="p-0">
                  p
                  </a>
                  <ul className="text-orange-500">
                  <li className="landingPageSmaller bg-opacity-90 bg-black rounded-full border-8 border-black">
                    <a
                      to="/Contact"
                      className="backdrop-blur-md rounded-full"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </li>
            </span>
            er
          </div> */}
          <p className="text-sm opacity-80">
            Klikk på de grønne bokstavene for å navigere
          </p>
        </div>
      </div>
      {/* <FetchDadJoke /> */}
      {/* <ConsumingContext />
        <UseEffect /> */}
      <Outlet />
    </>
  );
}

export default LandingPage;
