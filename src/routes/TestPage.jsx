import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "../App.css";

function TestPage() {
  return (
    <>
      <div className="text-blue-300 absolute top-64 left-0 right-0 w-fit grid grid-cols-1 grid-rows-2 z-50 h-1/3 m-auto">
        <div className="m-auto w-fit text-9xl tracking-widest">VILLO</div>

        <div className="text-2xl m-auto">
          Code{" "}
          <span className="text-indigo-500 text-opacity-90 menu menu-horizontal">
            <li>
              <Link
                to="/About"
                className="p-0 border border-blue-500 bg-sky-300 rounded-full"
              >
                a
              </Link>
              <ul className="text-indigo-500">
                <li className="absolute w-fit text-4xl bottom-16 right-24 backdrop-blur-sm">
                  {/* <video
                    autoPlay={true}
                    loop
                    muted
                    src="src\assets\code3.mp4"
                    className="absolute z-10 w-full h-full"
                  ></video> */}
                  <Link to="/About" className="backdrop-blur-md z-20 p-12">
                    About
                  </Link>
                </li>
              </ul>
            </li>
          </span>
          nd De
          <span className="text-indigo-500 text-opacity-90 menu menu-horizontal">
            <li>
              <Link
                to="/Qualifications"
                className="p-0  border-blue-500 bg-sky-300 rounded-full"
              >
                s
              </Link>
              <ul className="text-indigo-500">
                <li className="absolute w-fit text-4xl bottom-6 left-16 backdrop-blur-sm">
                  {/* <video
                    autoPlay={true}
                    loop
                    muted
                    src="src\assets\code2.mp4"
                    className="z-10 absolute w-full h-full"
                  ></video> */}
                  <Link
                    to="/Qualifications"
                    className="backdrop-blur-md z-20 p-12"
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </li>
          </span>
          ign <br /> with a{" "}
          <span className="text-indigo-500 text-opacity-90 menu menu-horizontal">
            <li>
              <Link
                to="/Projects"
                className="p-0 border-blue-500 bg-sky-300 rounded-full"
              >
                p
              </Link>
              <ul className="text-indigo-500">
                <li className="absolute w-fit text-4xl top-2 right-20 backdrop-blur-sm">
                  {/* <video
                    autoPlay={true}
                    loop
                    muted
                    src="src\assets\numbers.mp4"
                    className="absolute z-10 w-full"
                  ></video> */}
                  <Link to="/Projects" className="backdrop-blur-md z-20 p-12">
                    Projects
                  </Link>
                </li>
              </ul>
            </li>
          </span>
          ersonal tou
          <span className="text-indigo-500 text-opacity-90 menu menu-horizontal">
            <li>
              <Link
                to="/Contact"
                className="p-0 border-blue-500 bg-sky-300 rounded-full"
              >
                c
              </Link>
              <ul className="text-indigo-500">
                <li className="absolute w-fit text-4xl top-2 left-6 backdrop-blur-sm">
                  {/* <video
                    autoPlay={true}
                    loop
                    muted
                    src="src\assets\code.mp4"
                    className="absolute z-10 w-full"
                  ></video> */}
                  <Link to="/About" className="backdrop-blur-xl z-20 p-12">
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
          </span>
          h
        </div>
      </div>
      <div className=" bg-black">
        <div className=" absolute h-full w-full top-0 left-0 grid grid-cols-2 grid-rows-2 z-10 overflow-hidden">
          {/* Make individual clipping masks! */}

          {/* <div className=" h-10 w-full bg-black absolute z-20"></div> */}
          {/* <div className=" h-10 w-full bg-black absolute bottom-0 z-20"></div> */}
          {/* <div className=" h-full w-10 bg-black absolute left-0 z-20"></div> */}
          {/* <div className=" h-full w-10 bg-black absolute right-0 z-20"></div> */}
          <div className=" h-1/2 w-32 bg-blue-900 absolute left-1/2 top-1/4 z-20"></div>
          <div className=" h-1/2 w-32 bg-blue-800 absolute right-1/2 top-1/4 z-20"></div>
          {/* <div className=" h-10 w-full bg-black absolute bottom-2/3 z-20"></div> */}
          {/* <div className=" h-10 w-full bg-black absolute top-2/3 z-20"></div> */}
          {/* <div className=" h-full w-8 bg-black absolute right-1/2 z-20"></div> */}
          {/* <div className=" h-2/3 w-8 bg-orange-500 absolute top-1/4 left-1/2 z-20"></div> */}
          <div className=" h-full w-8 bg-black absolute left-1/2 z-20"></div>
          <div className=" h-10 w-full bg-black absolute bottom-1/2 right-1/2 z-20"></div>
          {/* <div className=" h-10 w-1/4 bg-green-700 absolute left-1/3 top-1/2 z-20"></div> */}
          <div className=" h-10 w-full bg-black absolute top-1/2 z-20"></div>
          {/* <div className=" h-1/4 w-40 bg-indigo-800 absolute left-1/2 top-1/4 z-20"></div> */}
          {/* <div className="">
            <video
              autoPlay={true}
              loop
              muted
              src="src\assets\code.mp4"
              className="absolute z-10 w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={true}
              loop
              muted
              src="src\assets\code2.mp4"
              className="z-10 absolute w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={true}
              loop
              muted
              src="src\assets\numbers.mp4"
              className="absolute h-2/3 z-10 w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={true}
              loop
              muted
              src="src\assets\code3.mp4"
              className="absolute h-2/3 z-10 w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={true}
              loop
              muted
              src="src\assets\code4.mp4"
              className="absolute top-0 h-full z-9 w-full"
            ></video>
          </div> */}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default TestPage;
