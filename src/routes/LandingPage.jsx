import { Outlet } from "react-router-dom";
import ConsumingContext from "../component/ConsumingContext";
// import FetchDadJoke from "../component/DadJokeAPI/FetchDadJoke";
import UseEffect from "../component/UseEffect";
import { Link } from "react-router-dom";
import "../App.css";
function LandingPage() {
  return (
    <>
      {/* Prøv å gridde? */}
      <div className="responsive">
        {/* <img
          className="h-40 rounded-full p-2 bg-orange-700 shadow-md shadow-slate-900 -rotate-45 absolute left-96 top-60"
          src="../src/assets/VilloDeveloper.png"
        /> */}
        {/* bg-[url('https://previews.123rf.com/images/creativika/creativika1608/creativika160800056/60928128-diagonal-lined-seamless-pattern-repeating-texture-with-black-thin-parallel-straight-lines-on-white-b.jpg')] */}
        <img
          src="src/assets/LandingPageClipMask.png"
          className="responsive absolute top-0 left-0 z-50"
        />
        <video
          autoPlay={"true"}
          loop
          muted
          src="src\assets\code.mp4"
          className="absolute z-10 right-1/2 bottom-1/2 w-1/2"
        ></video>
        <video
          autoPlay={"true"}
          loop
          muted
          src="src\assets\code2.mp4"
          className="absolute left-1/2 bottom-1/2 z-10 w-1/2"
        ></video>
        <video
          autoPlay={"true"}
          loop
          muted
          src="src\assets\numbers.mp4"
          className="absolute right-1/2 top-2/3 z-10 w-1/2"
        ></video>
        <video
          autoPlay={"true"}
          loop
          muted
          src="src\assets\code3.mp4"
          className="absolute left-1/2 top-2/3 z-10 w-1/2"
        ></video>
        <div className="LP-background absolute top-0 left-0 flex flex-col w-full h-full z-50">
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
              Code{" "}
              <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
                <li>
                  <Link href="/About" className="p-0">
                    a
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit bottom-0 left-0 backdrop-blur-sm rounded-full">
                      <Link
                        href="/About"
                        className="backdrop-blur-md rounded-full"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </li>
              </span>
              nd Design <br /> with a{" "}
              <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
                <li>
                  <Link href="/Projects" className="p-0">
                    p
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit top-0 right-0 backdrop-blur-sm rounded-full">
                      <Link
                        href="/Projects"
                        className="backdrop-blur-md rounded-full"
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </li>
              </span>
              er
              <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
                <li>
                  <Link href="/Qualifications" className="p-0">
                    s
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit bottom-0 left-0 backdrop-blur-sm rounded-full">
                      <a
                        href="/Qualifications"
                        className="backdrop-blur-md rounded-full"
                      >
                        Skills
                      </a>
                    </li>
                  </ul>
                </li>
              </span>
              onal tou
              <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
                <li>
                  <Link href="/Contact" className="p-0">
                    c
                  </Link>
                  <ul className="text-blue-500">
                    <li className="absolute w-fit top-0 right-0 backdrop-blur-sm rounded-full">
                      <Link
                        href="/Contact"
                        className="backdrop-blur-sm rounded-full"
                      >
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
      </div>
    </>
  );
}

export default LandingPage;
