import { useContext } from "react";
import ThemeContext from "../component/ThemeSwitch/ThemeContext";

const TestPage2 = () => {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <>
      {selectedTheme === "Professional" && (
        <div>
          <h1>Professional theme</h1>
        </div>
      )}
      {selectedTheme === "Tranquil" && (
        <div>
          <h1>Tranquil theme</h1>
        </div>
      )}
    </>
  );
};

export default TestPage2;
