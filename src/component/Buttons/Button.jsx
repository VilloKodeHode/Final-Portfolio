function Button(props) {
  const { idAndClass, text, onClick } = props;
  return (
    <button className={idAndClass} id={idAndClass} onClick={onClick}>
      {text}
    </button>
  );
}

//Needs to be updated if more themes are added
export function SkewedButton(props) {
  const { text, onClick } = props;
  return (
    <button
      className={`-skew-x-12  ${
        selectedTheme === "Tranquil"
          ? " bg-water-100 text-fairy-300"
          : " bg-superDry-accent text-superDry-primary rounded-none"
      }`}
      onClick={onClick}
    >
      <div className="skew-x-12">{text}</div>
    </button>
  );
}

export default Button;
