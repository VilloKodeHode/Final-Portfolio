import { useState, useEffect } from "react";

function PokemonCard(props) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    //Do fetch logic here
    async function getData() {
      const response = await fetch(props.url);
      const data = await response.json();
      setPokemonDetails(data);
      // const Abilities = pokemonDetails.abilities.map(
      //   (ability) => ability.ability.name
      // );
      console.log(pokemonDetails);
    }
    getData();
  }, []);

  return (
    <div className="p-4 bg-yellow-400">
      {props.name}
      {pokemonDetails && (
        <div className="bg-white p-4">
          <a href={pokemonDetails.url}>
            <img
              className="m-auto bg-black"
              src={pokemonDetails.sprites.front_default}
              alt=""
            />
          </a>
          <p className="mt-2 border-y-2 border-red-600">
            {" "}
            # {pokemonDetails.id}
          </p>
          {/* <p>base experience: {pokemonDetails.base_experience}</p> */}
          <p></p>
          <p className="border-y-2  border-red-600">
            <p>Abilities:</p>
            <p className="w-fit m-auto">
              {pokemonDetails.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
          </p>
          {/* 
.map()
<br> er ett HTML element
les JSX
{string}<br></br> */}
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
