import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black border-b-2 border-white fixed top-0 left-0 p-9 w-full z-50">
      {/* <img
        className="h-20 absolute top-2 left-2"
        src="src\assets\VilloDeveloper.png"
      /> */}
      <div className="text-white">
        <Link className="px-4" to="/">
          Home
        </Link>
        <Link className="px-4" to="/About">
          About
        </Link>
        <Link className="px-4" to="/Contact">
          Contact
        </Link>
        <Link className="px-4" to="/Qualifications">
          Skills
        </Link>
        <Link className="px-4" to="/Projects">
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
