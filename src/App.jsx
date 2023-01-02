// import { useContext, useState } from "react";
import "./App.css";
// import UseEffect from "./component/UseEffect";
// import FetchData from "./component/PokeAPI/FetchData";
// import ConsumingContext from "./component/ConsumingContext";
import NavBar from "./component/NavBar/NavBar";
import PokeAPI from "./routes/PokeAPI/PokeAPI";

//Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Contexts
// import ExampleContext from "./component/content/ExampleContext";

//Routes
import LandingPage from "./routes/LandingPage";
import AboutPage from "./routes/About/About";
import ContactPage from "./routes/Contact/ContactPage";
import PortfolioPage from "./routes/PorfolioPage/PortfolioPage";
import Qualifications from "./routes/Qualifications/QualificationsPage";
import ProjectPage from "./routes/Projects/ProjectPage";
import TestPage from "./routes/TestPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Qualifications" element={<Qualifications />} />
        <Route path="/Projects" element={<ProjectPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/PokeAPI" element={<PokeAPI />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/TestPage" element={<TestPage />} />
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <div className=" w-full h-full bg-black">
                <img className="mt-20" src="https://http.cat/404" />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
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
