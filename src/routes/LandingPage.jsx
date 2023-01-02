import { Outlet } from "react-router-dom";
import ConsumingContext from "../component/ConsumingContext";
import UseEffect from "../component/UseEffect";

function LandingPage() {
  return (
    <>
      <header>
        <h1>Root Page</h1>
        <ConsumingContext />
        <UseEffect />
      </header>

      <Outlet />
    </>
  );
}

export default LandingPage;
