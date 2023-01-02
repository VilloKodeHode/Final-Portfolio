// import { useContext, useState } from "react";
import "./App.css";
// import UseEffect from "./component/UseEffect";
// import FetchData from "./component/PokeAPI/FetchData";
// import ConsumingContext from "./component/ConsumingContext";
import NavBar from "./component/NavBar/NavBar";
import PokeAPI from "./routes/PokeAPI/PokeAPI";

//Libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//Contexts
import ExampleContext from "./component/content/ExampleContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ExampleContext.Provider value="Some other value">
      <div className="App">
        <UseEffect />
        <FetchData />
        <ConsumingContext />
      </div>
    </ExampleContext.Provider>
  );
}

// const ColorMode = () => {
//   const [ColorMode, setColorMode] = useState("dark");
// };

// <Button
//   idAndClass="pitch-btn"
//   text="Mer om meg"
//   onClick={() => (setToggle("dark") ? setToggle("light") : setToggle("dark"))}
// />;

export default App;
