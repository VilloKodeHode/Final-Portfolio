export function KnowledgeIcon(props) {
  const { src, alt } = props;
  return (
    <div className="mask mask-hexagon bg-water-500 relative h-40 w-40 bg-opacity-70">
      <figure className="p-4 m-8 bg-earth-400 rounded-xl shadow-xl mask mask-hexagon-2">
        <img className="h-16" src={src} alt={alt} />
      </figure>
    </div>
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
