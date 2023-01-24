import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

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
  const { selectedTheme } = useContext(ThemeContext);
  const { text, onClick, className } = props;
  return (
    <button
      className={`-skew-x-12 w-full p-2 border-2 shadow-sm ${className}  ${
        selectedTheme === "Tranquil"
          ? " bg-water-600 border-water-100 shadow-water-100 text-water-100 rounded-xl"
          : " bg-superDry-accent2 border-superDry-accent2 shadow-superDry-effect text-superDry-accent hover:bg-superDry-effect rounded-[0px]"
      }`}
      onClick={onClick}
    >
      <div className="skew-x-12">{text}</div>
    </button>
  );
}

export default Button;
