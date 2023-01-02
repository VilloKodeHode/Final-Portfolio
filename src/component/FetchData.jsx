import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=7";

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
      <h1 className="m-8">PokeAPI</h1>
      <div className="grid gap-4 grid-cols-3 bg-slate-100 border-2 rounded p-8 border-slate-500">
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
    </>
  );
}

export default FetchData;
