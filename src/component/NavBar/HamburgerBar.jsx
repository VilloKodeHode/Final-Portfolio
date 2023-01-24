import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

function HamburgerBar() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div className="absolute right-0 top-0 z-50">
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className={` border-none -skew-x-[20deg] ${
            selectedTheme === "Tranquil"
              ? "btn bg-fairy-300"
              : "btn bg-superDry-accent hover:bg-superDry-bg  rounded-none"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 skew-x-[20deg]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className={`menu menu-normal dropdown-content ${
            selectedTheme === "Tranquil"
              ? " text-water-100"
              : " text-superDry-primary bg-superDry-accent rounded-none"
          } mt-0 p-2 -translate-x-20 shadow rounded-box w-fit backdrop-blur-sm z-50`}
        >
          <li>
            <Link className="px-4 " to="/">
              Hjem
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/About">
              Om
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/Qualifications">
              Skills
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/Projects">
              Prosjekter
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/Contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerBar;
