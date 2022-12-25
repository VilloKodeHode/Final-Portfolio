export function KnowledgeIcon(props) {
  const { src, alt } = props;
  return (
    <figure className="p-3 m-2">
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
      <figure className="p-3 m-2 border duration-500 ease-out rounded-full">
        <img className="h-12" src={src} alt={alt} />
      </figure>
    </a>
  );
}

export function MySkills(props) {
  const { title, src, description } = props;
  return (
    <figure className="border w-64 p-8 m-4">
      <h3>{title}</h3>
      <img className="h-36 m-auto" src={src} />
      <p>{description}</p>
    </figure>
  );
}

export default KnowledgeIcon;
