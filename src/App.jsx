import "./App.css";
import React, { createContext, useState } from "react";

import NavBar from "./component/NavBar/NavBar";
import HamburgerBar from "./component/NavBar/HamburgerBar";

//Libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//Contexts
// import ExampleContext from "./component/content/ExampleContext";

//Routes

import RenderLandingPage from "./routes/LandingPage";
import AboutPage from "./routes/About/About";
import ContactPage from "./routes/Contact/ContactPage";
import PortfolioPage from "./routes/PorfolioPage/PortfolioPage";
import Qualifications from "./routes/Qualifications/QualificationsPage";
import ProjectPage from "./routes/Projects/ProjectPage";
import TestPage from "./routes/TestPage";
import TestPage2 from "./routes/TestPage2";

import ThemeSwitch from "./component/ThemeSwitch/ThemeSwitch";
import ThemeContext from "./component/ThemeSwitch/ThemeContext";

//Todo:
//* ProjectsPage: On load: Projects are smaller, and on click they become larger, click again to "go to" (add also close btn?)
//* SkillsAndKnowledgePage: On load: Knowledgesection is a button instead, click to reveal the content.
//* LandingPage: Add a title for my profesion (ex. aspiring developer)
//* make custom breadcrumbs for the different pages (sånn som hos Kenneth) instead of headers for each pages
//* HeroPage: More buttons to reveal text or something?

function App() {
  const [selectedTheme, setSelectedTheme] = useState("Professional");
  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      <Router>
        <div className="absolute w-full top-4 right-6">
          <HamburgerBar />
          <ThemeSwitch />
        </div>
        <Routes>
          <Route path="/" element={<RenderLandingPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Qualifications" element={<Qualifications />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route path="/TestPage" element={<TestPage />} />
          <Route path="/TestPage2" element={<TestPage2 />} />

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
    </ThemeContext.Provider>
  );
}

export default App;
