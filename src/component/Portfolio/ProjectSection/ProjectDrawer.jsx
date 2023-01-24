import { useState, useContext } from "react";
import { SkewedButton } from "../../Buttons/Button.jsx";
import ThemeContext from "../../ThemeSwitch/ThemeContext.js";

const ProjectWithDrawer = (props) => {
  const { href, projectName, src, description, hrefCode } = props;
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="drawer z-50 h-fit w-fit m-4 [&>*]:hover:scale-105 ">
        {toggle === false && (
          <>
            <input
              id={projectName}
              onClick={() => setToggle(!toggle)}
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content w-fit h-fit">
              <label htmlFor={projectName} className="btn drawer-button">
                <img
                  className={`h-32 sm:h-36 lg:h-46 xl:h-56 w-32 sm:w-36 lg:w-46 xl:w-56 ${
                    selectedTheme === "Tranquil" ? " rounded-xl" : " "
                  } `}
                  src={src}
                />
                <div
                  className={` xl:text-xs text-[10px] md:w-[90%] w-28 ${
                    selectedTheme === "Tranquil"
                      ? "bg-water-600 border-water-100 shadow-water-100 text-water-100 rounded-xl"
                      : "bg-superDry-accent border-superDry-accent2 shadow-superDry-accent2 text-superDry-accent2 hover:bg-superDry-secondary rounded-[0px]"
                  } btn p-2 rounded-xl  border-2 shadow-sm bg-opacity-70 backdrop-blur-xs`}
                >
                  {projectName}
                </div>
              </label>
            </div>
          </>
        )}
        <div className="drawer-side text-5xl h-screen">
          <label htmlFor={projectName} className="drawer-overlay"></label>
          <div className="w-full h-full bg-earth-200 bg-opacity-70 backdrop-blur-sm rounded-3xl"></div>
          <div className="w-[400px] border-8 border-water-200 rounded-xl backdrop-blur-sm bg-water-400 bg-opacity-50 [&>*]:animate-ProjectPopUp">
            <div className="flex flex-col w-fit justify-center h-full m-auto">
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
        </div>
      </div>
    </>
  );
};

export const ProjectDrawer = (props) => {
  const { href, projectName, src, description, hrefCode } = props;
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="drawer w-fit h-fit">
      <>
        <input
          id={projectName}
          type="checkbox"
          onClick={() => setToggle(true)}
          className="drawer-toggle"
        />
        <div className="drawer-content w-fit h-fit z-50">
          <label
            htmlFor={projectName}
            className={`flex justify-center w-fit content-center m-4 text-superDry-accent drawer-button  `}
          >
            <div>
              <img
                className={`h-32 m-auto sm:h-36 lg:h-46 xl:h-56 w-32 sm:w-36 lg:w-46 xl:w-56 ${
                  selectedTheme === "Tranquil" ? " rounded-xl" : " "
                } `}
                src={src}
              />
              <div
                className={` xl:text-xs text-[10px] md:w-36 w-28 z-50 ${
                  selectedTheme === "Tranquil"
                    ? "bg-water-600 border-water-100 shadow-water-100 text-water-100 rounded-xl"
                    : "bg-superDry-accent border-superDry-accent2 shadow-superDry-accent2 text-superDry-accent2 hover:bg-superDry-secondary rounded-[0px]"
                } btn p-2 rounded-xl border-2 shadow-sm bg-opacity-70 backdrop-blur-xs`}
              >
                {projectName}
              </div>
            </div>
          </label>
        </div>
      </>

      <div
        className={`drawer-side absolute text-5xl top-0 left-0 h-screen 
        ${toggle === false ? "-z-50" : "z-10"}
        `}
      >
        <label htmlFor={projectName} className="drawer-overlay"></label>
        <div
          className={`p-4 w-screen h-screen ${
            selectedTheme === "Tranquil"
              ? " tooltip-secondary bg-water-600 text-water-100"
              : " tooltip-accent bg-superDry-accent text-superDry-accent2"
          }  bg-opacity-90`}
        >
          <div className="flex flex-col w-fit justify-center h-full m-auto">
            <SkewedButton
              text="Close"
              className="text-base font-semibold m-2 -translate-x-5"
            />

            <div>
              <a
                className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
                href={href}
                target="_blank"
              >
                <figure
                  className={` skew-x-6 ${
                    selectedTheme === "Tranquil"
                      ? " tooltip-secondary bg-water-200 text-fairy-400 rounded-3xl"
                      : " tooltip-accent bg-superDry-secondary text-superDry-primary"
                  }   duration-500 ease-out flex flex-col justify-start mx-2 w-72 h-80`}
                >
                  <div className="">
                    <h3 className="text-2xl py-6">{projectName}</h3>
                    <img className="h-36 w-36 mx-auto rounded-lg" src={src} />
                    <div className="flex justify-center m-auto">
                      <p className="p-2 text-sm">{description}</p>
                    </div>
                  </div>
                </figure>
              </a>
            </div>
            <div>
              <a href={hrefCode} target="_blank">
                <SkewedButton
                  text="Kode"
                  className="text-base font-semibold m-0 -translate-y-2 translate-x-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWithDrawer;
