function Button(props) {
  const { idAndClass, text, onClick } = props;
  return (
    <button className={idAndClass} id={idAndClass} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
