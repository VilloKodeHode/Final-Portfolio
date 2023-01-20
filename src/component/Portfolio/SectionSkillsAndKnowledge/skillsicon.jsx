export function KnowledgeIcon(props) {
  const { src, alt } = props;
  return (
    <>
      <div className="relative">
        <figure className="p-4 m-4 z-50">
          <img className="xl:h-16 h-10" src={src} alt={alt} />
        </figure>

        <div className="mask mask-diamond bg-water-500 xl:h-36 h-24 xl:w-36 w-24 bg-opacity-70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10"></div>
        <div className="bg-water-600 rounded-xl shadow-xl mask mask-parallelogram xl:h-36 h-24 xl:w-36 w-24 bg-opacity-70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-20"></div>
      </div>
    </>
  );
}

// add <div className="knowledge_wrapper">
export function KnowledgeIconLinked(props) {
  const { src, alt, href } = props;
  return (
    <a
      className="[&>*]:hover:shadow-lg [&>*]:hover:scale-150"
      href={href}
      target="_blank"
    >
      <figure className="p-3 ml-4 border duration-500 ease-out rounded-full">
        <img className="h-12" src={src} alt={alt} />
      </figure>
    </a>
  );
}

export function MySkills(props) {
  const { title, src, description } = props;
  return (
    <>
      <figure className="w-52 p-2 my-4 mx-4 rounded border-t-4 border-b-4 bg-base-300 border-accent">
        <h3>{title}</h3>

        <img className="h-32 my-4 m-auto " src={src} />
        <p className="text-xs py-2">{description}</p>
      </figure>
    </>
  );
}

export default KnowledgeIcon;
