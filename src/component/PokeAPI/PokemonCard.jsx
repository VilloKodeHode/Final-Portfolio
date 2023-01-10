import { when } from "jquery";
import { useState } from "react";
import Button from "../Buttons/Button";

function PokemonCard(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="p-4 bg-yellow-400">
      <Button
        idAndClass="bg-white btn p-2 mb-1 rounded-none border-red-700 border-2 shadow-xl text-black"
        text={props.name}
        onClick={() => setToggle(!toggle)}
      />
      <div className="bg-white p-4">
        <a href={props.details.url}>
          <img
            className="m-auto bg-black"
            src={props.details.sprites.front_default}
            alt=""
          />
        </a>
        {toggle && (
          <>
            <div className="bg-white border-4 border-red-700 shadow-2xl shadow-black rounded-lg p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Button
                idAndClass="pitch-close-btn"
                text="❌"
                onClick={() => setToggle(!toggle)}
              />
              <a href={props.details.url}>
                <img
                  className="m-auto h-60 bg-black"
                  src={props.details.sprites.front_default}
                  alt=""
                />
              </a>
              <p className="mt-2 border-y-2 border-red-600">
                # {props.details.id}
              </p>
              <div className="border-y-2  border-red-600">
                <p>Abilities:</p>
                <p className="w-fit m-auto text-xs">
                  {props.details.abilities
                    .map((ability) => ability.ability.name)
                    .join(", ")}
                </p>
                <p className="w-fit m-auto text-xs my-2 border-y-2 border-red-600">
                  {props.moreDetails.flavor_text_entries[0].flavor_text.replace(
                    "",
                    ""
                  )}
                </p>
                <p className="text-xs">
                  Type:{" "}
                  {props.moreDetails.egg_groups
                    .map((group) => group.name)
                    .join(", ")}
                </p>
                <p className="text-xs">
                  Habitat: {props.moreDetails.habitat.name}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;

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
