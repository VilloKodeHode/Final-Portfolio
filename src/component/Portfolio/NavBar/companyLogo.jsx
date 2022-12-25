function CompanyLogo(props) {
  const { href, src } = props;
  return (
    <div className="company-logo-wrapper">
      <a href={href}>
        <img className="company-logo" src={src} />
      </a>
    </div>
  );
}

export default CompanyLogo;
