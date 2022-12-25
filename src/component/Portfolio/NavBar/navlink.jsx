function Navlink(props) {
  const { href, name, src } = props;
  return (
    <a className="text-de" href={href}>
      <li>
        <p>{name}</p>
        <img className="h-8" src={src} />
      </li>
    </a>
  );
}

export default Navlink;
