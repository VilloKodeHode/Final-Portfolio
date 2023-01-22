import { Link } from "react-router-dom";

const NavDrawer = () => {
  return (
    <div className="drawer z-50 h-fit ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-fit">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary hover:bg-superDry-effect bg-superDry-accent2 text-superDry-accent drawer-button z-50"
        >
          /Content
        </label>
      </div>
      <div className="drawer-side absolute text-5xl top-0 left-0 h-screen -z-10">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-screen bg-superDry-accent text-superDry-accent2 bg-opacity-90">
          <li>
            <Link className="px-4" to="/">
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
};

export default NavDrawer;
