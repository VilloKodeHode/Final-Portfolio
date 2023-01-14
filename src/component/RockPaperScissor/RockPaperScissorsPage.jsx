import { useState, useEffect } from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import TRIANGLE from "./assets/bg-triangle.svg";

//style
import "./RockPaperScissor.css";

import GameButton, {
  ComputerPick,
  ComputeScore,
  InactiveGameButton,
  RandomRPS,
} from "./RockPaperScissor";
import Button from "../Buttons/Button";

function RockPaperScissor() {
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);
  const [rock, setRock] = useState(false);
  const [fight, setFight] = useState(false);
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);

  const handleClick = (playerPick) => {
    setComputerPick(RandomRPS());
    setFight(true);
    ComputeScore(computerPick, playerPick, setScore);
  };

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
                    setScissors(false);
                    setRock(false);
                    setFight(true);
                    handleClick("rock");
                  }}
                  className="rounded-full p-0 h-fit bg-blue-700 z-50 m-8"
                >
                  <GameButton id="PaperButton" src={PAPER} color="blue" />
                </button>
              </>
            ))}

          {paper && (
            <>
              <div className="flex align-top z-40 text-white">
                <div>
                  <h1 className="m-8">You picked</h1>
                  <InactiveGameButton
                    id="PaperButton"
                    src={PAPER}
                    color="blue"
                  />
                </div>

                <div className="z-40">
                  <h1 className="m-8">House picked </h1>

                  <ComputerPick computerPick={computerPick} />
                </div>
              </div>
              <Button
                idAndClass="p-1 m-2 absolute top-80 left-80 text-sm"
                text="close"
                onClick={() => {
                  setPaper(false);
                  setFight(false);
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
                    setPaper(false);
                    setRock(false);
                    handleClick("scissors");
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
                <ComputerPick computerPick={computerPick} />
              </div>
              <Button
                idAndClass="p-1 m-2 absolute top-80 left-80 text-sm"
                text="close"
                onClick={() => {
                  setScissors(false);
                  setFight(false);
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
                    setPaper(false);
                    setScissors(false);
                    handleClick("rock");
                  }}
                  className="rounded-full p-0 h-fit bg-red-700 z-50 m-8"
                >
                  <GameButton id="RockButton" src={ROCK} color="red" />
                </button>
              </>
            ))}

          {rock && (
            <>
              <div>
                <h1 className="m-8">You picked</h1>
                <InactiveGameButton id="RockButton" src={ROCK} color="red" />
              </div>
              <div className="z-40">
                <h1 className="m-8">House picked </h1>

                <ComputerPick computerPick={computerPick} />
              </div>
              <Button
                idAndClass="p-1 m-2 absolute top-80 left-80 text-sm"
                text="close"
                onClick={() => {
                  setRock(false);
                  setFight(false);
                }}
              />
            </>
          )}

          {!fight && (
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
