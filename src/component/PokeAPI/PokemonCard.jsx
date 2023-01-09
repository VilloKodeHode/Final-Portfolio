import { when } from "jquery";
import { useState, useEffect } from "react";

function PokemonCard(props) {
  // useEffect(() => {
  //   fetch(props.url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPokemonDetails(data);
  //       console.log(pokemonDetails);

  //       return fetch(pokemonDetails.species.url).then((response) =>
  //         response.json()
  //       );
  //     })
  //     .then((data) => {
  //       setPokemonMoreDetails(data);
  //       console.log(pokemonMoreDetails);
  //     });
  // }, []);

  // useEffect(() => {
  //   Promise.all([
  //     fetch(props.url).then((response) => response.json()),
  //     fetch(pokemonDetails.species.url).then((response) => response.json()),
  //   ]).then(([data1, data2]) => {
  //     setPokemonDetails(data1);
  //     console.log(pokemonDetails);
  //     setPokemonMoreDetails(data2);
  //     console.log(pokemonMoreDetails);
  //   });
  // }, []);

  // useEffect(async () => {
  //   const response = await fetch(props.url);
  //   const data = await response.json();
  //   setPokemonDetails(data);
  //   console.log(pokemonDetails);

  //   const response2 = await fetch(pokemonDetails.species.url);
  //   const data2 = await response2.json();
  //   setPokemonMoreDetails(data2);
  //   console.log(pokemonMoreDetails);
  // }, []);

  // useEffect(() => {
  //   async function getDataDetails() {
  //     const response = await fetch(props.url);
  //     const data = await response.json();
  //     setPokemonDetails(data);
  //     console.log(pokemonDetails);

  //     async function getPokemonMoreDetails() {
  //       const response = await fetch(pokemonDetails.species.url);
  //       const data = await response.json();
  //       setPokemonMoreDetails(data);
  //     }
  //     getPokemonMoreDetails();
  //     console.log(pokemonMoreDetails);
  //   }
  //   getDataDetails();
  // }, []);

  return (
    <div className="p-4 bg-yellow-400">
      {props.name}
      <div className="bg-white p-4">
        <a href={props.details.url}>
          <img
            className="m-auto bg-black"
            src={props.details.sprites.front_default}
            alt=""
          />
        </a>
        <p className="mt-2 border-y-2 border-red-600"># {props.details.id}</p>
        <div className="border-y-2  border-red-600">
          <p>Abilities:</p>
          <p className="w-fit m-auto">
            {props.details.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </p>
          <p className="w-fit m-auto text-xs border">
            {props.moreDetails.flavor_text_entries[0].flavor_text.replace(
              "",
              ""
            )}
          </p>
          <p>Type:</p>
          <p>
            {props.moreDetails.egg_groups.map((group) => group.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
