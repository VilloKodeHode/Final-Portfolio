import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-slate-500 border fixed top-0 left-0 p-8 w-full">
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
    </nav>
  );
}

export default NavBar;
