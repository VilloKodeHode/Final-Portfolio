import { useState, useEffect } from "react";
import { Await } from "react-router-dom";

function PokemonCard(props) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [pokemonMoreDetails, setPokemonMoreDetails] = useState(null);

  useEffect(() => {
    //Do fetch logic here
    async function getDataDetails() {
      const response = await fetch(props.url);
      const data = await response.json();
      setPokemonDetails(data);
      console.log(pokemonDetails);
    }
    getDataDetails();
  }, []);

  useEffect(() => {
    async function getFlavorText() {
      if (pokemonDetails) {
        const response = await fetch(pokemonDetails?.species.url);
        const data = await response.json();
        setPokemonMoreDetails(data);
        console.log(pokemonMoreDetails);
      }
    }
    getFlavorText();
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
            # {pokemonDetails.id}
          </p>
          {/* <p>base experience: {pokemonDetails.base_experience}</p> */}
          <p className="border-y-2  border-red-600">
            <p>Abilities:</p>
            <p className="w-fit m-auto">
              {pokemonDetails.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
            <p className="w-fit m-auto text-xs border">
              {pokemonMoreDetails?.flavor_text_entries[0]?.flavor_text.replace(
                "",
                ""
              )}
            </p>
          </p>
        </div>
      )}
    </div>
  );
}
export default PokemonCard;
