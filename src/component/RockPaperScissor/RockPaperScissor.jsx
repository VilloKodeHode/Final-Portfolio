import { useState, useEffect } from "react";
import React from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import Button from "../Buttons/Button";
import TRIANGLE from "./assets/bg-triangle.svg";
import ScissorsGameButton, {
  PaperGameButton,
  RockGameButton,
} from "./RPSLSButtons";

//style

export function WinnerGlow() {
  return (
    <>
      <div className=" [&>*]:animate-glow">
        <div className="absolute h-[300px] w-[300px] bg-sky-900 bg-opacity-30 winner -z-10 rounded-full"></div>
        <div className="absolute h-[400px] w-[400px] bg-sky-900 bg-opacity-20 winner -z-20 rounded-full"></div>
        <div className="absolute h-[500px] w-[500px] bg-sky-900 bg-opacity-10 winner -z-30 rounded-full"></div>
      </div>
    </>
  );
}

export function GameButton(props) {
  const { color, src, id } = props;
  return (
    <div
      className={`border-b-8 bg-${color}-700 rounded-full border-${color}-700 z-40`}
    >
      <div
        id={id}
        className={`rounded-full p-10 bg-white border-[22px] border-${color}-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={src} />
        </div>
      </div>
    </div>
  );
}

export function InactiveGameButton(props) {
  const { color, src, id } = props;
  return (
    <div className="z-40">
      <div
        className={`m-auto border-b-8 w-fit h-fit bg-${color}-700 rounded-full border-${color}-700`}
      >
        <div
          id={id}
          className={`rounded-full p-10 bg-white border-[22px] border-${color}-500  buttonshadow`}
        >
          <div className="h-20 w-20 flex">
            <img className="w-16 m-auto" src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmptyGameButton() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-50">
      <div className={`rounded-full p-10 bg-[#15183c] buttonshadow`}>
        <div className="h-32 w-32 flex"></div>
      </div>
    </div>
  );
}

function PlayRound({ setComputerPick, setScore, setResult }, playerPick) {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerPick;
  if (randomNumber === 1) {
    computerPick = "rock";
  } else if (randomNumber === 2) {
    computerPick = "paper";
  } else {
    computerPick = "scissors";
  }
  console.log(
    "computer picked from the ComputerPick function: " + computerPick
  );

  setComputerPick(computerPick);
  let result;

  if (
    (playerPick === "rock" && computerPick === "scissors") ||
    (playerPick === "scissors" && computerPick === "paper") ||
    (playerPick === "paper" && computerPick === "rock")
  ) {
    setTimeout(() => {
      setScore((prevScore) => prevScore + 1), 500;
    });
    result = "WIN";

    console.log(
      "Results from Playround function: playerpick: " + playerPick,
      "computerpick: " + computerPick
    );
  } else if (
    (playerPick === "rock" && computerPick === "paper") ||
    (playerPick === "scissors" && computerPick === "rock") ||
    (playerPick === "paper" && computerPick === "scissors")
  ) {
    result = "LOSE";

    setTimeout(() => {
      setScore((prevScore) => prevScore - 1), 500;
    });
  } else {
    result = "DRAW";
  }

  setResult(result);

  return result;
}

export function ResultandRestart({ result, setType }) {
  return (
    <div className="z-50 flex flex-col justify-center mx-8 [&>*]:animate-RPSPopUpMoreDelayed">
      <h1 className="text-6xl">
        {result === "WIN" || result === "LOSE" ? "YOU " : null}
        {result}
      </h1>
      <button
        className="p-2 px-10 m-8 h-fit w-fit text-md tracking-widest text-red-600 bg-white z-50"
        onClick={() => {
          setType(false);
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

export function StartingScreen(props) {
  const {
    paper,
    scissors,
    rock,
    setComputerPick,
    setScore,
    setResult,
    setPaper,
    setScissors,
    setRock,
    round,
    setRound,
    PlayRound,
  } = props;
  return (
    <>
      {paper || scissors || rock || (
        <div className="z-20 md:w-[800px] w-full h-full relative">
          <div className="absolute">
            <button
              onClick={() => {
                setPaper(true);

                setResult(
                  PlayRound(
                    { setComputerPick, setScore, setResult, setRound, round },
                    "paper"
                  )
                );
                setRound((round) => round + 1);
              }}
              className="rounded-full p-0 h-fit bg-blue-700 z-50 mr-14"
            >
              {/* <GameButton id="PaperButton" src={PAPER} color="blue" /> */}
              <PaperGameButton />
            </button>

            <button
              onClick={() => {
                setScissors(true);

                setResult(
                  PlayRound(
                    { setComputerPick, setScore, setResult, setRound, round },
                    "scissors"
                  )
                );
                setRound((round) => round + 1);
              }}
              className="rounded-full p-0 h-fit bg-yellow-700 z-50 ml-14"
            >
              {/* <GameButton id="ScissorButton" src={SCISSORS} color="yellow" /> */}
              <ScissorsGameButton />
            </button>

            <button
              onClick={() => {
                setRock(true);

                setResult(
                  PlayRound(
                    { setComputerPick, setScore, setResult, setRound, round },
                    "rock"
                  )
                );
                setRound((round) => round + 1);
              }}
              className="rounded-full p-0 h-fit bg-red-700 z-50 m-28 mb-0"
            >
              {/* <GameButton id="RockButton" src={ROCK} color="red" /> */}
              <RockGameButton />
            </button>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
              <img src={TRIANGLE} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlayRound;
