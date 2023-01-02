import FetchData from "../../component/PokeAPI/FetchData";
import ConsumingContext from "../../component/ConsumingContext";
import UseEffect from "../../component/UseEffect";

function PokeAPI() {
  return (
    <div className="App mt-40">
      <FetchData />
    </div>
  );
}

export default PokeAPI;
