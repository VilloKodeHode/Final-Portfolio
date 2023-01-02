export function Cv(props) {
  const { href, src, className } = props;
  return (
    <a href={href} target="_blank" className={className}>
      <img className={className} src={src} />
    </a>
  );
}

export default Cv;
