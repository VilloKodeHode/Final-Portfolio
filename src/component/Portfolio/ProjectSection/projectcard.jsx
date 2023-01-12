import { Link } from "react-router-dom";

function Project(props) {
  const { href, projectName, src, description, hrefCode } = props;
  return (
    <div className="">
      <div className="">
        <a
          className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
          href={href}
          target="_blank"
        >
          <figure className="rounded duration-500 ease-out flex flex-col justify-start mx-2 border-8 border-red-900 bg-red-800 w-64 h-80">
            <h3 className="text-2xl pt-2 text-black">{projectName}</h3>
            <img className="h-36 w-36 mx-auto" src={src} />
            <div className="flex justify-center m-auto">
              <p className="m-2 p-2 text-sm text-black bg-red-800">
                {description}
              </p>
            </div>
          </figure>
        </a>
      </div>
      <a href={hrefCode} target="_blank">
        <p className="tracking-widest p-4 text-blue-300">(Kode)</p>
      </a>
    </div>
  );
}

export function ProjectRouted(props) {
  const { to, projectName, src, description, hrefCode } = props;
  return (
    <div className="">
      <div className="">
        <Link className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105" to={to}>
          <figure className="rounded duration-500 ease-out flex flex-col justify-start mx-2 border-8 border-red-900 bg-red-800 w-64 h-80">
            <h3 className="text-2xl pt-2 text-black">{projectName}</h3>
            <img className="h-36 w-36 mx-auto" src={src} />
            <div className="flex justify-center m-auto">
              <p className="m-2 p-2 text-sm text-black bg-red-800">
                {description}
              </p>
            </div>
          </figure>
        </Link>
      </div>
      <a href={hrefCode} target="_blank">
        <p className="tracking-widest p-4 text-blue-300">(Kode)</p>
      </a>
    </div>
  );
}

export default Project;
