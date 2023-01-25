import { useState, useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

const PageTitle = (props) => {
  const { title } = props;
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div
      className={`absolute top-4 left-6 text-black h-fit sm:text-3xl text-xl font-Roboto p-2 skew-x-12 ${
        selectedTheme === "Tranquil"
          ? " bg-fairy-300"
          : "bg-superDry-accent rounded-none"
      } `}
    >
      <h2 className={`-skew-x-12`}>{title}</h2>
    </div>
  );
};

export default PageTitle;
