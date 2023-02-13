import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black border-b-2 border-white fixed top-0 left-0 p-4 w-full z-50">
      <div className="text-white">
        <Link className="px-4" to="/">
          Hjem
        </Link>
        <Link className="px-4" to="/About">
          Om
        </Link>
        <Link className="px-4" to="/Qualifications">
          Skills
        </Link>
        <Link className="px-4" to="/Projects">
          Prosjekter
        </Link>
        <Link className="px-4" to="/Contact">
          Kontakt
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
