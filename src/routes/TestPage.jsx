import "../App.css";

function TestPage() {
  return (
    <>
      <div className="text-white absolute top-64 left-0 right-0 w-fit grid grid-cols-1 grid-rows-2 z-50 h-1/3 m-auto">
        <div className="m-auto w-fit text-8xl">Villo</div>

        <div className="text-2xl m-auto">
          Code and De
          <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
            <li>
              <a href="/Qualifications" className="p-0">
                s
              </a>
              <ul className="text-blue-500">
                <li className="absolute w-fit border text-4xl py-16 px-28 bottom-56 -left-6 backdrop-blur-sm border-r-8 border-black">
                  <a
                    href="/Qualifications"
                    className="backdrop-blur-md border-6 border-black"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </li>
          </span>
          ign <br /> with{" "}
          <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
            <li>
              <a href="/About" className="p-0">
                a
              </a>
              <ul className="text-blue-500">
                <li className="absolute w-fit text-4xl py-6 px-14 -bottom-10 right-16 backdrop-blur-sm border-l-8 border-black">
                  <a href="/About" className="backdrop-blur-md">
                    About
                  </a>
                </li>
              </ul>
            </li>
          </span>{" "}
          <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
            <li>
              <a href="/Contact" className="p-0">
                p
              </a>
              <ul className="text-blue-500">
                <li className="absolute w-fit text-4xl py-6 px-12 -bottom-10 left-6 backdrop-blur-sm border-r-8 border-black">
                  <a href="/Projects" className="backdrop-blur-md">
                    Projects
                  </a>
                </li>
              </ul>
            </li>
          </span>
          ersonal tou
          <span className="text-blue-600 text-opacity-90 menu menu-horizontal">
            <li>
              <a href="/Contact" className="p-0">
                c
              </a>
              <ul className="text-blue-500">
                <li className="absolute w-fit text-4xl py-6 px-12 -bottom-10 left-6 backdrop-blur-sm border-r-8 border-black">
                  <a href="/About" className="backdrop-blur-md">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
          </span>
          h
        </div>
      </div>
      <div className="">
        <div className=" absolute h-full w-full top-0 left-0 grid grid-cols-2 grid-rows-2 z-10 overflow-hidden">
          {/* Make individual clipping masks! */}
          {/* <div className="absolute w-full h-36 top-32 bg-black z-50"></div>
        <div className="absolute w-10 h-full left-0 bg-black z-50"></div>
        <div className="absolute w-10 h-full right-0 bg-black z-50"></div>
        <div className="absolute w-32 h-full right-1/2 bg-black z-50"></div>
        <div className="absolute w-40 h-1/4 bottom-0 right-1/2 bg-black z-50"></div>
        <div className="absolute w-32 h-2/3 left-1/2 bottom-0 bg-black z-50"></div>
        <div className="absolute w-full h-40 top-1/2 bg-black z-50"></div>
        <div className="absolute w-full h-10 top-0 bg-black z-50"></div>
        <div className="absolute w-full h-10 bottom-0 bg-black z-50"></div>
        <div className="absolute w-full h-10 bottom-16 bg-black z-50"></div>
        <div className="absolute w-1/2 h-6 top-3/4 bg-black z-50"></div> */}
          <div className=" h-10 w-full bg-black absolute z-20"></div>
          <div className=" h-10 w-full bg-black absolute bottom-0 z-20"></div>
          <div className=" h-full w-10 bg-black absolute left-0 z-20"></div>
          <div className=" h-full w-10 bg-black absolute right-0 z-20"></div>
          <div className=" h-1/2 w-32 bg-black absolute left-1/2 top-1/4 z-20"></div>
          <div className=" h-1/2 w-32 bg-black absolute right-1/2 top-1/4 z-20"></div>
          <div className=" h-10 w-full bg-black absolute bottom-2/3 z-20"></div>
          <div className=" h-10 w-full bg-black absolute top-2/3 z-20"></div>
          <div className=" h-full w-8 bg-black absolute right-1/2 z-20"></div>
          <div className=" h-full w-8 bg-black absolute left-1/2 z-20"></div>
          <div className=" h-10 w-full bg-black absolute bottom-1/2 right-1/2 z-20"></div>
          <div className=" h-10 w-full bg-black absolute top-1/2 z-20"></div>
          <div className="">
            <video
              autoPlay={"true"}
              loop
              muted
              src="src\assets\code.mp4"
              className="absolute z-10 w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={"true"}
              loop
              muted
              src="src\assets\code2.mp4"
              className="z-10 absolute w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={"true"}
              loop
              muted
              src="src\assets\numbers.mp4"
              className="absolute h-2/3 z-10 w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={"true"}
              loop
              muted
              src="src\assets\code3.mp4"
              className="absolute h-2/3 z-10 w-1/2"
            ></video>
          </div>
          <div className="">
            <video
              autoPlay={"true"}
              loop
              muted
              src="src\assets\code4.mp4"
              className="absolute top-0 h-full z-9 w-full"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPage;
