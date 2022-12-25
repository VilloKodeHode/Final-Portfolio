function Project(props) {
  const { href, projectName, src, description, hrefCode } = props;
  return (
    <div className="">
      <div className="flex-col">
        <a
          className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
          href={href}
          target="_blank"
        >
          <figure className="duration-500 ease-out flex flex-col justify-center m-4 border-4 border-slate-600 bg-slate-100 w-64 h-96">
            <h3 className="text-2xl pt-8">{projectName}</h3>
            <img className=" h-40 w-40 m-auto" src={src} />
            <p className="p-8 font-sm">{description}</p>
          </figure>
        </a>
      </div>
      <a href={hrefCode} target="_blank">
        <p className="tracking-widest p-4">(Kode)</p>
      </a>
    </div>
  );
}

export default Project;
