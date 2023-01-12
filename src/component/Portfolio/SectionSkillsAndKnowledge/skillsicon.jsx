export function KnowledgeIcon(props) {
  const { src, alt } = props;
  return (
    <figure className="px-4 pt-4 ml-4 mb-8">
      <img className="h-12" src={src} alt={alt} />
    </figure>
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
    <figure className="border w-52 p-2 m-10 rounded">
      <h3>{title}</h3>
      <img className="h-20 m-auto" src={src} />
      <p className="text-xs py-2">{description}</p>
    </figure>
  );
}

export default KnowledgeIcon;
