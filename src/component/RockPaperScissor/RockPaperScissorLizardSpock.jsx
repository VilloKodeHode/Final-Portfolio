import { useState, useEffect } from "react";
import React from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import LIZARD from "./assets/icon-lizard.svg";
import SPOCK from "./assets/icon-spock.svg";
import PENTAGON from "./assets/bg-pentagon.svg";

//Buttons:
import ScissorsGameButton, {
  LizardGameButton,
  LizardSmallGameButton,
  PaperGameButton,
  PaperSmallGameButton,
  RockGameButton,
  RockSmallGameButton,
  ScissorsSmallGameButton,
  SpockGameButton,
  SpockSmallGameButton,
} from "./RPSLSButtons";

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
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  let computerPick;
  if (randomNumber === 1) {
    computerPick = "rock";
  } else if (randomNumber === 2) {
    computerPick = "paper";
  } else if (randomNumber === 3) {
    computerPick = "scissors";
  } else if (randomNumber === 4) {
    computerPick = "lizard";
  } else {
    computerPick = "spock";
  }
  console.log("computer picked: " + computerPick);

  setComputerPick(computerPick);
  let result;

  if (
    (playerPick === "rock" &&
      (computerPick === "scissors" || computerPick === "lizard")) ||
    (playerPick === "scissors" &&
      (computerPick === "paper" || computerPick === "lizard")) ||
    (playerPick === "paper" &&
      (computerPick === "rock" || computerPick === "spock")) ||
    (playerPick === "lizard" &&
      (computerPick === "spock" || computerPick === "paper")) ||
    (playerPick === "spock" &&
      (computerPick === "scissors" || computerPick === "rock"))
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
    (playerPick === "rock" &&
      (computerPick === "paper" || computerPick === "spock")) ||
    (playerPick === "scissors" &&
      (computerPick === "rock" || computerPick === "spock")) ||
    (playerPick === "paper" &&
      (computerPick === "scissors" || computerPick === "lizard")) ||
    (playerPick === "lizard" &&
      (computerPick === "rock" || computerPick === "scissors")) ||
    (playerPick === "spock" &&
      (computerPick === "paper" || computerPick === "lizard"))
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
    lizard,
    spock,
    setComputerPick,
    setScore,
    setResult,
    setPaper,
    setScissors,
    setRock,
    setLizard,
    setSpock,
    round,
    setRound,
    PlayRound,
  } = props;
  return (
    <>
      {paper || scissors || rock || lizard || spock || (
        <div className="md:w-[800px] w-full h-full relative m-auto">
          <div className="absolute h-full w-full">
            <div className="absolute left-1/2 -translate-x-1/2 top-[15%] m-auto z-50">
              <img src={PENTAGON} className="z-50 h-96" />
            </div>
            <div className="">
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
                className="rounded-full absolute top-[21%] right-[19%] translate-x-1/2 p-0 h-fit bg-blue-700 z-50 mr-14"
              >
                <PaperSmallGameButton />
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
                className="rounded-full absolute top-0 right-1/2 translate-x-1/2 p-0 h-fit bg-yellow-700 z-50 ml-14"
              >
                <ScissorsSmallGameButton />
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
                className="rounded-full absolute top-[38.5%] left-[25%] translate-x-1/2 p-0 h-fit bg-red-700 z-50 m-28 mb-0"
              >
                <RockSmallGameButton />
              </button>

              <button
                onClick={() => {
                  setLizard(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "lizard"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-[38.5%] right-[39%] p-0 h-fit bg-purple-700 z-50 m-28 mb-0"
              >
                <LizardSmallGameButton />
              </button>

              <button
                onClick={() => {
                  setSpock(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "spock"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-[4%] right-[47%] p-0 h-fit bg-teal-700 z-50 m-28 mb-0"
              >
                <SpockSmallGameButton />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlayRound;
