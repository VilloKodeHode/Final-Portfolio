import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UseEffect from "./component/UseEffect";
import FetchData from "./component/PokeAPI/FetchData";
import ConsumingContext from "./component/ConsumingContext";
import NavBar from "./component/NavBar/NavBar";
import PokeAPI from "./routes/PokeAPI/PokeAPI";

//Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Contexts
import ExampleContext from "./component/content/ExampleContext";

//Routes
import LandingPage from "./routes/LandingPage";
import AboutPage from "./routes/About/AboutPage";
import ContactPage from "./routes/Contact/ContactPage";
import PortfolioPage from "./routes/PorfolioPage/PortfolioPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/PokeAPI" element={<PokeAPI />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route
          path="*"
          element={
            <div className=" w-full h-full bg-black">
              <img className="mt-20" src="https://http.cat/404" />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
