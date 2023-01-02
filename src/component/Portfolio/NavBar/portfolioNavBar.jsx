import Navlink from "./navlink";
import CompanyLogo from "./companyLogo";
import { Link } from "react-router-dom";

function PortfolioNavBar() {
  return (
    <>
      <div className="navbar bg-base-200 fixed top-24 left-0 z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
                <a>About</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Projects
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-white">
                  <li>
                    <a>Job simulator</a>
                  </li>
                  <li>
                    <a>Christmas Calender</a>
                  </li>
                  <li>
                    <a>Valhalla Beards</a>
                  </li>
                  <li>
                    <a>CSS art</a>
                  </li>
                  <li>
                    <a>PokeAPI</a>
                  </li>
                  <li>
                    <a>Training tips webpage</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Joakim Villo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
              <a>About</a>
            </li>
            <li tabIndex={0}>
              <a>
                Projects
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white">
                <li>
                  <a
                    href="https://villokodehode.github.io/Job-simulator/"
                    target="_blank"
                  >
                    Job simulator
                  </a>
                </li>
                <li>
                  <a
                    href="https://villokodehode.github.io/Christmas-Calender/"
                    target="_blank"
                  >
                    Christmas Calender
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
                    target="_blank"
                  >
                    Valhalla Beards
                  </a>
                </li>
                <li>
                  <a
                    href="https://villokodehode.github.io/CSS-art/"
                    target="_blank"
                  >
                    CSS art
                  </a>
                </li>
                <li>
                  <a href="/PokeAPI">PokeAPI</a>
                </li>
                <li>
                  <a>Training tips webpage</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
        </div>
      </div>
    </>
  );
}

export default PortfolioNavBar;
