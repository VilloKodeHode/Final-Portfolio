import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=1500";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //Do fetch logic here
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="p-8 border-2 border-red-700 bg-red-500 rounded-3xl">
        <h1 className="m-8 text-black">PokeAPI</h1>
        <div className="grid gap-4 grid-cols-3 bg-red-500 border-2 rounded p-8 border-red-700">
          {data &&
            data.results.map((pokemon, index) => (
              <PokemonCard
                key={index}
                {...pokemon}

                // {...pokemon}: henter alle objektene
                // kan bruke istedet: name={pokemon.name} url={pokemon.url}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default FetchData;
