import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-slate-500 fixed top-0 left-0 p-9 w-full z-50">
      <img
        className="h-20 absolute top-2 left-2"
        src="src\assets\VilloDeveloper.png"
      />
      <Link className="p-4 text-slate-100" to="/">
        Home
      </Link>
      <Link className="p-4  text-slate-100" to="/About">
        About
      </Link>
      <Link className="p-4  text-slate-100" to="/Contact">
        Contact
      </Link>
      <Link className="p-4  text-slate-100" to="/PokeAPI">
        PokeAPI
      </Link>
      <Link className="p-4  text-slate-100" to="/Portfolio">
        Portfolio
      </Link>
    </nav>
  );
}

export default NavBar;
