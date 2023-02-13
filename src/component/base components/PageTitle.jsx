import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

const PageTitle = (props) => {
  const { title } = props;
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div
      className={`absolute top-4 left-6 h-fit sm:text-3xl text-xl font-Roboto p-2 skew-x-12 ${
        selectedTheme === "Tranquil"
          ? " bg-fairy-300 text-water-100"
          : "bg-superDry-accent text-superDry-primary rounded-none"
      } `}
    >
      <h2 className={`-skew-x-12`}>{title}</h2>
    </div>
  );
};

export default PageTitle;
