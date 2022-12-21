import { useContext } from "react";
import ExampleContext from "./content/ExampleContext";

function ConsumingContext() {
  const Example = useContext(ExampleContext);
  return (
    <div>
      <p>{Example}</p>
    </div>
  );
}

export default ConsumingContext;
