import { Outlet } from "react-router-dom";
import ConsumingContext from "../component/ConsumingContext";
// import FetchDadJoke from "../component/DadJokeAPI/FetchDadJoke";
import UseEffect from "../component/UseEffect";
import { Link } from "react-router-dom";

import "../App.css";

//images
import LPClippingMask from "./assets/LandingPageClipMask.png";

//videos
import Code1Video from "./assets/code1.mp4";
import Code2Video from "./assets/code2.mp4";
import Code3Video from "./assets/code3.mp4";
import Code4Video from "./assets/code4.mp4";
import Code5Video from "./assets/code5.mp4";
import RenderParticles from "../component/Particles/Particles";

function LandingPage() {
  return (
    <>
      {/* Prøv å gridde? */}
      <RenderParticles />

      <div className=" overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 right-0 grid grid-cols-2 grid-rows-2 h-screen opacity-40">
          {/* <img
          className="h-40 rounded-full p-2 bg-orange-700 shadow-md shadow-slate-900 -rotate-45 absolute left-96 top-60"
          src="../src/assets/VilloDeveloper.png"
        /> */}
          {/* bg-[url('https://previews.123rf.com/images/creativika/creativika1608/creativika160800056/60928128-diagonal-lined-seamless-pattern-repeating-texture-with-black-thin-parallel-straight-lines-on-white-b.jpg')] */}
          {/* <img
          src={LPClippingMask}
          className="responsive absolute top-0 left-0 z-50 h-full"
        /> */}
          {/* <video
            autoPlay={true}
            loop
            muted
            src={Code1Video}
            className="rounded-l-full m-auto"
          ></video>
          <video
            autoPlay={true}
            loop
            muted
            src={Code2Video}
            className="rounded-r-full m-auto"
          ></video>
          <video
            autoPlay={true}
            loop
            muted
            src={Code3Video}
            className="rounded-l-full m-auto"
          ></video>
          <video
            autoPlay={true}
            loop
            muted
            src={Code5Video}
            className=" rounded-r-full m-auto"
          ></video> */}
        </div>
        <div className=" top-0 left-0 flex flex-col w-full h-full z-50">
          <div className="landingPage z-50 grid">
            <div className="flex content-center justify-center flex-wrap z-50">
              {/* Jo
            <span className="text-orange-500 text-opacity-50 menu menu-horizontal">
              <li>
                <a to="/Portfolio" className="p-0">
                  a
                </a>
                <ul className="text-orange-500">
                  <li className="landingPageSmaller bg-opacity-90 bg-black rounded-full border-8 border-black">
                    <a to="/About" className="backdrop-blur-md rounded-full">
                      About
                    </a>
                  </li>
                </ul>
              </li>
            </span>
            kim  */}
              Villo
            </div>

            <div className="landingPageSmaller">
              Code <div className="indicator"></div>
              <span className="text-blue-500 text-opacity-90 menu menu-horizontal ">
                <span className="absolute indicator-item badge badge-secondary animate-bounce">
                  about
                </span>
                <li>
                  <Link to="/About" className="p-0 ">
                    a
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit bottom-16 -right-8">
                      <Link to="/About" className="">
                        About
                      </Link>
                    </li>
                  </ul>
                </li>
              </span>
              nd Design <br /> with a{" "}
              <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
                <span className="absolute indicator-item badge badge-secondary animate-bounce">
                  projects
                </span>
                <li>
                  <Link to="/Projects" className="p-0">
                    p
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit bottom-40 -left-20">
                      <Link to="/Projects" className="">
                        Projects
                      </Link>
                    </li>
                  </ul>
                </li>
              </span>
              er
              <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
                <span className="absolute indicator-item badge badge-secondary animate-bounce">
                  skills
                </span>
                <li>
                  <Link to="/Qualifications" className="p-0">
                    s
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit bottom-40 -left-24">
                      <a to="/Qualifications" className="">
                        Skills
                      </a>
                    </li>
                  </ul>
                </li>
              </span>
              onal tou
              <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
                <span className="absolute indicator-item badge badge-secondary animate-bounce">
                  contact
                </span>
                <li>
                  <Link to="/Contact" className="p-0">
                    c
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit bottom-40 right-16">
                      <Link to="/Contact" className="">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>
              </span>
              h
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
          </div>
        </div>
        {/* <FetchDadJoke /> */}
        {/* <ConsumingContext />
        <UseEffect /> */}
        <Outlet />
      </div>
    </>
  );
}

export default LandingPage;
