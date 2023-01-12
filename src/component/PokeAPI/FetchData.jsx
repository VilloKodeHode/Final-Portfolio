import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

//svg
import loading from "./assets/Ripple-1.8s-200px.svg";

export const pokemonData = "https://pokeapi.co/api/v2/pokemon/?limit=1000";

function FetchData() {
  const [data, setData] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [pokemonMoreDetails, setPokemonMoreDetails] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        //first fetch to get initial data and the url for the second fetch:
        const response = await fetch(pokemonData);
        const data = await response.json();
        setData(data);
        console.log("data:", data);

        //second fetch to get more data and the url for the third fetch:
        const pokemonUrls = data.results.map((pokemon) => pokemon.url);
        const pokemonPromises = pokemonUrls.map((url) =>
          fetch(url).then((response) => response.json())
        );
        const pokemonDetails = await Promise.all(pokemonPromises);
        setPokemonDetails(pokemonDetails);
        console.log("pokemonDetails:", pokemonDetails);

        //third fetch to get the last data:
        const pokemonMoreDetailsPromises = pokemonDetails.map((pokemon) =>
          fetch(pokemon.species.url).then((response) => response.json())
        );
        const pokemonMoreDetails = await Promise.all(
          pokemonMoreDetailsPromises
        );
        setPokemonMoreDetails(pokemonMoreDetails);
        console.log("pokemonMoreDetails:", pokemonMoreDetails);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="p-8 border-2 border-red-700 bg-red-500 rounded-3xl">
      <h1 className="m-8 text-black">PokeAPI</h1>
      <h3 className="m-4">Click names for more info on the PokeMon!</h3>
      {!pokemonDetails && !pokemonMoreDetails && (
        <img className="w-96" src={loading} />
      )}
      <div className="grid gap-4 grid-cols-3 bg-red-500 border-2 rounded p-8 border-red-700">
        {pokemonDetails &&
          pokemonMoreDetails &&
          pokemonDetails.map((details, index) => (
            <PokemonCard
              key={details.id}
              name={details.name}
              details={details}
              moreDetails={pokemonMoreDetails[index]}
            />
          ))}
      </div>
    </div>
  );
}

// useEffect(() => {

//   async function getData() {

//     const response = await fetch(pokemonData);
//     const data = await response.json();
//     setData(data);
//     console.log("data", data);
//   }
//   getData();
// }, []);

// console.log(data);

//   return (
//     <>
//       <div className="p-8 border-2 border-red-700 bg-red-500 rounded-3xl">
//         <h1 className="m-8 text-black">PokeAPI</h1>
//         <div className="grid gap-4 grid-cols-3 bg-red-500 border-2 rounded p-8 border-red-700">
//           {data &&
//             data.results.map((pokemon, index) => (
//               <PokemonCard
//                 key={index}
//                 {...pokemon}

//                 // {...pokemon}: henter alle objektene
//                 // kan bruke istedet: name={pokemon.name} url={pokemon.url}
//               />
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }

export default FetchData;
