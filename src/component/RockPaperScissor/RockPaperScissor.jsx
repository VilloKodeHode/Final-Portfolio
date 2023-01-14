import { useState, useEffect } from "react";
import React from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import TRIANGLE from "./assets/bg-triangle.svg";

//style

function GameButton(props) {
  const { color, src, id } = props;
  return (
    <div
      className={`border-b-8 bg-${color}-700 rounded-full border-${color}-700 z-40`}
    >
      <div
        id={id}
        className={`rounded-full p-12 bg-white shadow-inner border-[22px] border-${color}-500  shadow-${color}-800`}
      >
        <img className="h-16 w-16" src={src} />
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
          className={`rounded-full p-16 bg-white shadow-inner border-[22px] border-${color}-500`}
        >
          <img className="h-20 w-20" src={src} />
        </div>
      </div>
    </div>
  );
}

export function HouseChoice() {
  return (
    <div className="z-40">
      <h1>House picked something</h1>
      <div className="m-auto border-b-8 w-fit h-fit bg-blue-700 rounded-full border-blue-700">
        <div
          id="PaperButton"
          className="rounded-full p-16 bg-white shadow-inner border-[22px] border-blue-500  shadow-blue-800"
        >
          <img className="h-20 w-20" src={PAPER} />
        </div>
      </div>
    </div>
  );
}

export function RandomRPS() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randomNumber);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

export function ComputerPick({ computerPick }) {
  return (
    <>
      {computerPick === "rock" && (
        <InactiveGameButton id="RockButton" src={ROCK} color="red" />
      )}
      {computerPick === "paper" && (
        <InactiveGameButton id="PaperButton" src={PAPER} color="blue" />
      )}
      {computerPick === "scissors" && (
        <InactiveGameButton id="ScissorButton" src={SCISSORS} color="yellow" />
      )}
    </>
  );
}

export function ComputeScore(computerPick, playerPick, setScore) {
  if (
    (playerPick === "rock" && computerPick === "scissors") ||
    (playerPick === "scissors" && computerPick === "paper") ||
    (playerPick === "paper" && computerPick === "rock")
  ) {
    setScore((prevScore) => prevScore + 1);
  } else {
    setScore((prevScore) => prevScore - 1);
  }
}

export default GameButton;
