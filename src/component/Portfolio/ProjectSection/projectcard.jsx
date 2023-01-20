import { Link } from "react-router-dom";
import Button from "../../Buttons/Button";
import { useState } from "react";

//ideas: Project is smaller on load, click to make larger and click again to access.

function Project(props) {
  const { href, projectName, src, description, hrefCode } = props;
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
  //* Bruk modal state for å sette bakgrunn når et av prosjektene blir trykt på.
  return (
    <>
      <div className="h-fit w-fit m-4 [&>*]:hover:scale-105">
        <div className=" duration-500 ease-out w-fit h-fit">
          <img
            className="h-32 sm:h-36 lg:h-46 xl:h-56 w-32 sm:w-36 lg:w-46 xl:w-56 rounded-xl"
            src={src}
          />
          <button
            className="bg-water-600 xl:text-xs text-[10px] md:w-[90%] w-28 btn p-2 rounded-xl border-water-100 border-2 shadow-sm shadow-water-100 text-water-100 bg-opacity-70 backdrop-blur-xs"
            onClick={() => setToggle(!toggle)}
          >
            {projectName}
          </button>
        </div>
      </div>

      {toggle && (
        <>
          <div className="absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 w-[95%] h-[100%] bg-earth-200 mt-8 bg-opacity-70 backdrop-blur-sm rounded-3xl"></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-full h-[500px] sm:w-3/4 md:w-1/2 xl:w-1/3 w-3/4 border-8 border-water-200 rounded-xl backdrop-blur-sm bg-water-400 bg-opacity-50 [&>*]:animate-ProjectPopUp">
            <div className="flex flex-col w-fit justify-center h-full m-auto">
              <button
                className="p-1 tracking-widest mb-4 w-1/2 mx-auto bg-water-600 border-water-100 border-2 text-water-100 text-sm"
                onClick={() => setToggle(!toggle)}
              >
                close
              </button>
              <div>
                <a
                  className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
                  href={href}
                  target="_blank"
                >
                  <figure className="rounded-3xl  text-fairy-400 duration-500 ease-out flex flex-col justify-start mx-2 bg-slate-200 w-64 h-80">
                    <h3 className="text-2xl py-6">{projectName}</h3>
                    <img className="h-36 w-36 mx-auto rounded-lg" src={src} />
                    <div className="flex justify-center m-auto">
                      <p className="p-2 text-md">{description}</p>
                    </div>
                  </figure>
                </a>
              </div>
              <button className="p-1 tracking-widest mt-4 w-1/2 mx-auto bg-water-600 border-water-100 border-2 text-water-100 text-sm">
                <a href={hrefCode} target="_blank">
                  Kode
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function ProjectRouted(props) {
  const { to, projectName, src, description, hrefCode } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex justify-center h-fit w-fit m-4 [&>*]:hover:scale-105">
        <div className=" duration-500 ease-out w-fit h-fit">
          <img
            className="h-32 sm:h-36 lg:h-46 xl:h-56 w-32 sm:w-36 lg:w-46 xl:w-56 rounded-xl"
            src={src}
          />
          <button
            className="bg-water-600 xl:text-xs text-[10px] md:w-[90%] w-28 btn p-2 rounded-xl border-water-100 border-2 shadow-sm shadow-water-100 text-water-100 bg-opacity-70 backdrop-blur-xs"
            onClick={() => setToggle(!toggle)}
          >
            {projectName}
          </button>
        </div>
      </div>

      {toggle && (
        <>
          <div className="absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 w-[95%] h-[100%] bg-earth-200 mt-8 bg-opacity-70 backdrop-blur-sm rounded-3xl"></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-full h-[500px] sm:w-3/4 md:w-1/2 xl:w-1/3 w-3/4 border-8 border-water-200 rounded-xl backdrop-blur-sm bg-water-400 bg-opacity-50 [&>*]:animate-ProjectPopUp">
            <div className="flex flex-col w-fit justify-center h-full m-auto">
              <button
                className="p-1 tracking-widest mb-4 w-1/2 mx-auto bg-water-600 border-water-100 border-2 text-water-100 text-sm"
                onClick={() => setToggle(!toggle)}
              >
                close
              </button>
              <div>
                <Link
                  className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
                  to={to}
                >
                  <figure className="rounded-3xl  text-fairy-400 duration-500 ease-out flex flex-col justify-start mx-2 bg-slate-200 w-64 h-80">
                    <h3 className="text-2xl py-6 text-black">{projectName}</h3>
                    <img className="h-36 w-36 mx-auto" src={src} />
                    <div className="flex justify-center m-auto">
                      <p className="p-2 text-md">{description}</p>
                    </div>
                  </figure>
                </Link>
              </div>
              <button className="p-1 tracking-widest mt-4 w-1/2 mx-auto bg-water-600 border-water-100 border-2 text-water-100 text-sm">
                <a href={hrefCode} target="_blank">
                  Kode
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Project;
