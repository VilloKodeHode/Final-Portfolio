import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeSwitch = () => {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  return (
    <div className="absolute top-0 right-16 z-50 -skew-x-[20deg]">
      <select
        className={`select select-bordered border-none w-full max-w-xs   ${
          selectedTheme === "Tranquil"
            ? " bg-fairy-300"
            : "bg-superDry-accent rounded-none"
        } `}
        value={selectedTheme}
        onChange={(e) => {
          setSelectedTheme(e.target.value);
          console.log(selectedTheme);
        }}
      >
        <option disabled>Choose theme</option>
        <option>Professional</option>
        <option>Tranquil</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
