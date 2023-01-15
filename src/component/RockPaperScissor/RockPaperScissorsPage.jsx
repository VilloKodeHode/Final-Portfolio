import { useState, useEffect } from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import TRIANGLE from "./assets/bg-triangle.svg";

//style
import "./RockPaperScissor.css";

import PlayRound, { GameButton, InactiveGameButton } from "./RockPaperScissor";
import Button from "../Buttons/Button";

// export function GameButton(props) {
//   const { color, src, id } = props;
//   return (
//     <div
//       className={`border-b-8 bg-${color}-700 rounded-full border-${color}-700 z-40`}
//     >
//       <div
//         id={id}
//         className={`rounded-full p-12 bg-white shadow-inner border-[22px] border-${color}-500  shadow-${color}-800`}
//       >
//         <img className="h-16 w-16" src={src} />
//       </div>
//     </div>
//   );
// }

// function InactiveGameButton(props) {
//   const { color, src, id } = props;
//   return (
//     <div className="z-40">
//       <div
//         className={`m-auto border-b-8 w-fit h-fit bg-${color}-700 rounded-full border-${color}-700`}
//       >
//         <div
//           id={id}
//           className={`rounded-full p-16 bg-white shadow-inner border-[22px] border-${color}-500`}
//         >
//           <img className="h-20 w-20" src={src} />
//         </div>
//       </div>
//     </div>
//   );
// }

function RockPaperScissor() {
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);
  const [rock, setRock] = useState(false);
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);
  // const [result, setResult] = useState("");

  return (
    <>
      <div
        id="RPS"
        className="grid absolute top-0 left-0 w-screen h-screen text-white"
      >
        <div className="flex justify-between w-1/2 m-auto border-2 rounded-2xl p-4">
          <div className="font-extrabold leading-7 text-start text-white text-4xl">
            <h2>ROCK</h2>
            <h2>PAPER</h2>
            <h2>SCISSORS</h2>
          </div>
          <div className="h-full py-2 px-12 w-fit bg-white rounded-md">
            <p className="text-blue-700">Score</p>
            <h2 className="font-extrabold text-5xl text-slate-400">{score}</h2>
          </div>
        </div>
        <div className="flex flex-wrap w-[800px] h-full justify-center m-auto">
          {rock ||
            scissors ||
            (!paper && (
              <>
                <button
                  onClick={() => {
                    setPaper(true);

                    PlayRound(
                      { setComputerPick, setScore },

                      "paper"
                    );
                  }}
                  className="rounded-full p-0 h-fit bg-blue-700 z-50 m-8"
                >
                  <GameButton id="PaperButton" src={PAPER} color="blue" />
                </button>
              </>
            ))}

          {paper && (
            <>
              <div className="flex h-full align-top z-40 text-white">
                <div>
                  <h1 className="m-8">You picked</h1>
                  <InactiveGameButton
                    id="PaperButton"
                    src={PAPER}
                    color="blue"
                  />
                </div>

                <div className="z-40 ">
                  <h1 className="m-8">House picked </h1>
                  {computerPick === "rock" && (
                    <InactiveGameButton
                      id="RockButton"
                      src={ROCK}
                      color="red"
                    />
                  )}
                  {computerPick === "paper" && (
                    <InactiveGameButton
                      id="PaperButton"
                      src={PAPER}
                      color="blue"
                    />
                  )}
                  {computerPick === "scissors" && (
                    <InactiveGameButton
                      id="ScissorButton"
                      src={SCISSORS}
                      color="yellow"
                    />
                  )}
                  {/* <PlayRound computerPick={computerPick} /> */}
                </div>
              </div>
              <Button
                idAndClass="p-1 m-2 absolute bottom-40 right-1/2 translate-x-1/2 text-sm z-50"
                text="Play Again"
                onClick={() => {
                  setPaper(false);
                }}
              />
            </>
          )}

          {paper ||
            rock ||
            (!scissors && (
              <>
                <button
                  onClick={() => {
                    setScissors(true);

                    PlayRound({ setComputerPick, setScore }, "scissors");
                  }}
                  className="rounded-full p-0 h-fit bg-yellow-700 z-50 m-8"
                >
                  <GameButton
                    id="ScissorButton"
                    src={SCISSORS}
                    color="yellow"
                  />
                </button>
              </>
            ))}

          {scissors && (
            <>
              <div className="flex h-full align-top z-40 text-white">
                <div>
                  <h1 className="m-8">You picked</h1>
                  <InactiveGameButton
                    id="ScissorButton"
                    src={SCISSORS}
                    color="yellow"
                  />
                </div>
                <div className="z-40">
                  <h1 className="m-8">House picked </h1>
                  {computerPick === "rock" && (
                    <InactiveGameButton
                      id="RockButton"
                      src={ROCK}
                      color="red"
                    />
                  )}
                  {computerPick === "paper" && (
                    <InactiveGameButton
                      id="PaperButton"
                      src={PAPER}
                      color="blue"
                    />
                  )}
                  {computerPick === "scissors" && (
                    <InactiveGameButton
                      id="ScissorButton"
                      src={SCISSORS}
                      color="yellow"
                    />
                  )}
                </div>
              </div>
              <Button
                idAndClass="p-1 m-2 absolute bottom-40 right-1/2 translate-x-1/2 text-sm z-50"
                text="Play Again"
                onClick={() => {
                  setScissors(false);
                }}
              />
            </>
          )}

          {scissors ||
            paper ||
            (!rock && (
              <>
                <button
                  onClick={() => {
                    setRock(true);

                    PlayRound({ setComputerPick, setScore }, "rock");
                  }}
                  className="rounded-full p-0 h-fit bg-red-700 z-50 m-8"
                >
                  <GameButton id="RockButton" src={ROCK} color="red" />
                </button>
              </>
            ))}

          {rock && (
            <>
              <div className="flex h-full align-top z-40 text-white">
                <div>
                  <h1 className="m-8">You picked</h1>
                  <InactiveGameButton id="RockButton" src={ROCK} color="red" />
                </div>
                <div className="z-40">
                  <h1 className="m-8">House picked </h1>

                  {computerPick === "rock" && (
                    <InactiveGameButton
                      id="RockButton"
                      src={ROCK}
                      color="red"
                    />
                  )}
                  {computerPick === "paper" && (
                    <InactiveGameButton
                      id="PaperButton"
                      src={PAPER}
                      color="blue"
                    />
                  )}
                  {computerPick === "scissors" && (
                    <InactiveGameButton
                      id="ScissorButton"
                      src={SCISSORS}
                      color="yellow"
                    />
                  )}
                </div>
              </div>
              <Button
                idAndClass="p-1 m-2 absolute bottom-40 right-1/2 translate-x-1/2 text-sm z-50"
                text="Play Again"
                onClick={() => {
                  setRock(false);
                }}
              />
            </>
          )}

          {paper || scissors || rock || (
            <div className="absolute top-1/2 -translate-y-8 z-10">
              <img src={TRIANGLE} />
            </div>
          )}
        </div>
        <div className="text-white absolute bottom-6 right-6 border rounded-lg px-6 py-1">
          Rules
        </div>
      </div>
    </>
  );
}

export default RockPaperScissor;

// function ComputerPick({ setComputerPick }) {
//   const randomNumber = Math.floor(Math.random() * 3 + 1);
//   let computerPick;
//   if (randomNumber === 1) {
//     computerPick = "rock";
//   } else if (randomNumber === 2) {
//     computerPick = "paper";
//   } else {
//     computerPick = "scissors";
//   }
//   console.log(
//     "computer picked from the ComputerPick function: " + computerPick
//   );
//   setComputerPick(computerPick);
//   return (
//     <>
//       {computerPick === "rock" && (
//         <InactiveGameButton id="RockButton" src={ROCK} color="red" />
//       )}
//       {computerPick === "paper" && (
//         <InactiveGameButton id="PaperButton" src={PAPER} color="blue" />
//       )}
//       {computerPick === "scissors" && (
//         <InactiveGameButton id="ScissorButton" src={SCISSORS} color="yellow" />
//       )}
//     </>
//   );
// }

// function ComputeScore(computerPick, playerPick, setScore) {
//   if (
//     (playerPick === "rock" && computerPick === "scissors") ||
//     (playerPick === "scissors" && computerPick === "paper") ||
//     (playerPick === "paper" && computerPick === "rock")
//   ) {
//     setScore((prevScore) => prevScore + 1);
//     console.log(
//       "Results from ComputeScore: playerpick: " + playerPick,
//       "computerpick: " + computerPick
//     );
//   } else if (
//     (playerPick === "rock" && computerPick === "paper") ||
//     (playerPick === "scissors" && computerPick === "rock") ||
//     (playerPick === "paper" && computerPick === "scissors")
//   ) {
//     setScore((prevScore) => prevScore - 1);
//     console.log(
//       "Results from ComputeScore: playerpick: " + playerPick,
//       "computerpick: " + computerPick
//     );
//   } else if (computerPick === playerPick) {
//   }
// }
