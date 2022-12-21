import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UseEffect from "./component/UseEffect";
import FetchData from "./component/FetchData";
import ConsumingContext from "./component/ConsumingContext";

//Contexts
import ExampleContext from "./component/content/ExampleContext";

function App() {
  const [count, setCount] = useState(0);

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

export default App;
