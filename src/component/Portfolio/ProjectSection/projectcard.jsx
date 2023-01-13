import { Link } from "react-router-dom";
import Button from "../../Buttons/Button";
import { useState } from "react";

//ideas: Project is smaller on load, click to make larger and click again to access.

function Project(props) {
  const { href, projectName, src, description, hrefCode } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {!toggle && (
        <div className="h-54 w-54 m-8 [&>*]:hover:scale-105">
          <div className="duration-500 ease-out">
            <img
              className="h-36 w-36 mx-auto translate-y-1/2 rounded-xl"
              src={src}
            />
            <Button
              idAndClass="bg-transparent w-40 btn p-2 mb-1 rounded-xl border-accent border-2 shadow-xl text-base-100 -translate-y-1/2 bg-primary bg-opacity-70 backdrop-blur-sm"
              text={projectName}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      )}
      {toggle && (
        <div className="[&>*]:animate-ProjectPopUp">
          <div className="">
            <Button
              idAndClass="p-1 m-2 text-sm"
              text="close"
              onClick={() => setToggle(!toggle)}
            />
            <div className="">
              <a
                className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
                href={href}
                target="_blank"
              >
                <figure className="rounded-3xl duration-500 ease-out flex flex-col justify-start mx-2 bg-slate-200 w-64 h-80">
                  <h3 className="text-2xl py-6 text-black">{projectName}</h3>
                  <img className="h-36 w-36 mx-auto" src={src} />
                  <div className="flex justify-center m-auto">
                    <p className="p-2 text-sm text-black">{description}</p>
                  </div>
                </figure>
              </a>
            </div>
            <a href={hrefCode} target="_blank">
              <p className="tracking-widest p-4 text-blue-300">(Kode)</p>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export function ProjectRouted(props) {
  const { to, projectName, src, description, hrefCode } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {!toggle && (
        <div className="h-54 w-54 m-8 ">
          <img
            className="h-36 w-36 mx-auto translate-y-1/2 rounded-xl"
            src={src}
          />
          <Button
            idAndClass="bg-transparent w-40 btn p-2 mb-1 rounded-xl border-accent border-2 shadow-xl text-base-100 -translate-y-1/2 bg-primary bg-opacity-70 backdrop-blur-sm"
            text={projectName}
            onClick={() => setToggle(!toggle)}
          />
        </div>
      )}
      {toggle && (
        <div className="[&>*]:animate-ProjectPopUp">
          <div className="">
            <Button
              idAndClass="p-1 m-2 text-sm"
              text="close"
              onClick={() => setToggle(!toggle)}
            />
            <div className="">
              <Link
                className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
                to={to}
              >
                <figure className="rounded-3xl duration-500 ease-out flex flex-col justify-start mx-2 bg-slate-200 w-64 h-80">
                  <h3 className="text-2xl py-6 text-black">{projectName}</h3>
                  <img className="h-36 w-36 mx-auto" src={src} />
                  <div className="flex justify-center m-auto">
                    <p className="m-2 p-2 text-sm text-black">{description}</p>
                  </div>
                </figure>
              </Link>
            </div>
            <a href={hrefCode} target="_blank">
              <p className="tracking-widest p-4 text-blue-300">(Kode)</p>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
