import FetchData from "../../component/PokeAPI/FetchData";
import ConsumingContext from "../../component/ConsumingContext";
import UseEffect from "../../component/UseEffect";
import NavBar from "../../component/NavBar/NavBar";

function PokeAPI() {
  return (
    <>
      <NavBar />
      <div className="App mt-40">
        <FetchData />
      </div>
    </>
  );
}

export default PokeAPI;
