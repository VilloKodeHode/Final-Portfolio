import { useState, useEffect } from "react";

function PokemonCard(props) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    //Do fetch logic here
    async function getData() {
      const response = await fetch(props.url);
      const data = await response.json();
      setPokemonDetails(data);
      console.log(data);
    }
    getData();
    console.log(pokemonDetails);
  }, []);

  return (
    <div className="border p-2">
      {props.name}
      {pokemonDetails && (
        <div>
          <a href={pokemonDetails.url}>
            <img
              className="m-auto"
              src={pokemonDetails.sprites.front_default}
              alt=""
            />
          </a>
          <p>Pokemon # {pokemonDetails.id}</p>
          <p>base experience: {pokemonDetails.base_experience}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
