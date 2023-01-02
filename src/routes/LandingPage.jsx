import { Outlet } from "react-router-dom";
import ConsumingContext from "../component/ConsumingContext";
// import FetchDadJoke from "../component/DadJokeAPI/FetchDadJoke";
import UseEffect from "../component/UseEffect";
import { Link } from "react-router-dom";
import "../App.css";
function LandingPage() {
  return (
    <>
      {/* <img
          className="h-40 rounded-full p-2 bg-orange-700 shadow-md shadow-slate-900 -rotate-45 absolute left-96 top-60"
          src="../src/assets/VilloDeveloper.png"
        /> */}
      {/* bg-[url('https://previews.123rf.com/images/creativika/creativika1608/creativika160800056/60928128-diagonal-lined-seamless-pattern-repeating-texture-with-black-thin-parallel-straight-lines-on-white-b.jpg')] */}
      <img
        src="src/assets/LandingPageClipMask.png"
        className="w-full h-full absolute top-0 left-0 z-50"
      />
      <video
        autoPlay={"true"}
        loop
        muted
        src="src\assets\code.mp4"
        className="absolute z-10 left-20 top-40"
      ></video>
      <video
        autoPlay={"true"}
        loop
        muted
        src="src\assets\code2.mp4"
        className="absolute right-40 top-20 z-10"
      ></video>
      <video
        autoPlay={"true"}
        loop
        muted
        src="src\assets\numbers.mp4"
        className="absolute right-80 bottom-20 z-10"
      ></video>
      <video
        autoPlay={"true"}
        loop
        muted
        src="src\assets\code3.mp4"
        className="absolute left-80 bottom-10 z-10"
      ></video>
      <div className="LP-background absolute top-0 left-0  text-4xl flex flex-col w-full h-full z-50">
        <div className="bg-gradient-to-t from-slate-500  to-slate-100 landingPage h-full z-50 grid">
          <div className="flex content-center justify-center flex-wrap z-50">
            {/* Jo
            <span className="text-orange-500 text-opacity-50 menu menu-horizontal">
              <li>
                <a href="/Portfolio" className="p-0">
                  a
                </a>
                <ul className="text-orange-500">
                  <li className="landingPageSmaller bg-opacity-90 bg-black rounded-full border-8 border-black">
                    <a href="/About" className="backdrop-blur-md rounded-full">
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
            <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
              <li>
                <a href="/Contact" className="p-0">
                  C
                </a>
                <ul className="text-blue-500">
                  <li className="absolute w-fit py-24 px-2 bottom-0 -right-1 backdrop-blur-sm">
                    <a
                      href="/Contact"
                      className="backdrop-blur-sm rounded-full"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </span>
            ode{" "}
            <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
              <li>
                <a href="/About" className="p-0">
                  a
                </a>
                <ul className="text-blue-500">
                  <li className="absolute w-fit p-20 top-24 left-44 backdrop-blur-sm">
                    <a href="/About" className="backdrop-blur-md rounded-full">
                      About
                    </a>
                  </li>
                </ul>
              </li>
            </span>
            nd Design <br /> with a{" "}
            <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
              <li>
                <a href="/Projects" className="p-0">
                  p
                </a>
                <ul className="text-blue-500">
                  <li className="absolute w-fit p-24 top-3 -right-32 backdrop-blur-sm">
                    <a
                      href="/Projects"
                      className="backdrop-blur-md rounded-full "
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </li>
            </span>
            er
            <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
              <li>
                <a href="/Qualifications" className="p-0">
                  s
                </a>
                <ul className="text-blue-500">
                  <li className="absolute w-fit pt-40 px-40 pb-20 bottom-36 left-60 backdrop-blur-sm rounded-bl-full">
                    <a
                      href="/Qualifications"
                      className="backdrop-blur-md rounded-full "
                    >
                      Skills
                    </a>
                  </li>
                </ul>
              </li>
            </span>
            onal touch
          </div>
          {/* <div className="flex content-center justify-center flex-wrap">
            Develo
            <span className="text-orange-500 text-opacity-50 menu menu-horizontal">
              <li>
                <a href="/Portfolio" className="p-0">
                  p
                </a>
                <ul className="text-orange-500">
                  <li className="landingPageSmaller bg-opacity-90 bg-black rounded-full border-8 border-black">
                    <a
                      href="/Contact"
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
    </>
  );
}

export default LandingPage;
