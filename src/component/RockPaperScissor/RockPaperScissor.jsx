import { useState, useEffect } from "react";
import React from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
// import TRIANGLE from "./assets/bg-triangle.svg";

//style

export function GameButton(props) {
  const { color, src, id } = props;
  return (
    <div
      className={`border-b-8 bg-${color}-700 rounded-full border-${color}-700 z-40`}
    >
      <div
        id={id}
        className={`rounded-full p-10 bg-white shadow-inner border-[22px] border-${color}-500  shadow-${color}-800`}
      >
        <div className="h-20 w-20 flex">
          <img className="w-16 m-auto" src={src} />
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
          className={`rounded-full p-10 bg-white shadow-inner border-[22px] border-${color}-500  shadow-${color}-800`}
        >
          <div className="h-20 w-20 flex">
            <img className="w-16 m-auto" src={src} />
          </div>
        </div>
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
    setScore((prevScore) => prevScore + 1);
    result = "win";

    console.log(
      "Results from Playround function: playerpick: " + playerPick,
      "computerpick: " + computerPick
    );
  } else if (
    (playerPick === "rock" && computerPick === "paper") ||
    (playerPick === "scissors" && computerPick === "rock") ||
    (playerPick === "paper" && computerPick === "scissors")
  ) {
    result = "lose";

    setScore((prevScore) => prevScore - 1);
  } else {
    result = "draw";
  }
  setResult(result);

  console.log(result);

  return result;

  // (
  //   <>
  //     {result === "lose" && (
  //       <>
  //         {computerPick === "rock" && (
  //           <div className="border-8 border-black m-2">
  //             <GameButton color="red" id="RockButton" src={ROCK} />
  //           </div>
  //         )}

  //         {computerPick === "paper" && (
  //           <div className="border-8 border-black m-2">
  //             <GameButton color="blue" id="PaperButton" src={PAPER} />
  //           </div>
  //         )}
  //         {computerPick === "scissors" && (
  //           <div className="border-8 border-black m-2">
  //             <GameButton color="yellow" id="ScissorsButton" src={SCISSORS} />
  //           </div>
  //         )}
  //       </>
  //     )}
  //     {result === "win" && (
  //       <>
  //         {computerPick === "rock" && (
  //           <GameButton color="red" id="RockButton" src={ROCK} />
  //         )}
  //         {computerPick === "paper" && (
  //           <GameButton color="blue" id="PaperButton" src={PAPER} />
  //         )}
  //         {computerPick === "scissors" && (
  //           <GameButton color="yellow" id="ScissorsButton" src={SCISSORS} />
  //         )}
  //       </>
  //     )}
  //   </>
  // );
}

export default PlayRound;

// export function HouseChoice() {
//   return (
//     <div className="z-40">
//       <h1>House picked something</h1>
//       <div className="m-auto border-b-8 w-fit h-fit bg-blue-700 rounded-full border-blue-700">
//         <div
//           id="PaperButton"
//           className="rounded-full p-16 bg-white shadow-inner border-[22px] border-blue-500  shadow-blue-800"
//         >
//           <img className="h-20 w-20" src={PAPER} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export function RandomRPS() {
//   const randomNumber = Math.floor(Math.random() * 3 + 1);
//   console.log(randomNumber);
//   if (randomNumber === 1) {
//     return "rock";
//   } else if (randomNumber === 2) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// export function ComputerPick({ computerPick }) {
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

// export function ComputeScore(computerPick, playerPick, setScore) {
//   if (computerPick === playerPick) {
//     // do nothing
//   } else if (
//     (playerPick === "rock" && computerPick === "scissors") ||
//     (playerPick === "scissors" && computerPick === "paper") ||
//     (playerPick === "paper" && computerPick === "rock")
//   ) {
//     setScore((prevScore) => prevScore + 1);
//   } else {
//     setScore((prevScore) => prevScore - 1);
//   }
// }

// export function CalculateAndRenderComputerPick({ computerPick }) {
//   const randomNumber = Math.floor(Math.random() * 3 + 1);
//   console.log(randomNumber);
//   if (randomNumber === 1) {
//     return (
//       <>
//         {computerPick === "rock" && (
//           <InactiveGameButton id="RockButton" src={ROCK} color="red" />
//         )}
//       </>
//     );
//   } else if (randomNumber === 2) {
//     return (
//       <>
//         {computerPick === "paper" && (
//           <InactiveGameButton id="PaperButton" src={PAPER} color="blue" />
//         )}
//       </>
//     );
//   } else {
//     return (
//       <>
//         {computerPick === "scissors" && (
//           <InactiveGameButton
//             id="ScissorButton"
//             src={SCISSORS}
//             color="yellow"
//           />
//         )}
//       </>
//     );
//   }
// }

// export function PaperButton() {
//   <div className="z-40">
//     <div
//       className={`m-auto border-b-8 w-fit h-fit bg-blue-700 rounded-full border-blue-700`}
//     >
//       <div
//         id="PaperButton"
//         className={`rounded-full p-16 bg-white shadow-inner border-[22px] border-blue-500`}
//       >
//         <img className="h-20 w-20" src={PAPER} />
//       </div>
//     </div>
//   </div>;
// }

// export function ScissorButton() {
//   <div className="z-40">
//     <div
//       className={`m-auto border-b-8 w-fit h-fit bg-yellow-700 rounded-full border-yellow-700`}
//     >
//       <div
//         id="ScissorButton"
//         className={`rounded-full p-16 bg-white shadow-inner border-[22px] border-yellow-500`}
//       >
//         <img className="h-20 w-20" src={SCISSORS} />
//       </div>
//     </div>
//   </div>;
// }

// export function RockButton() {
//   <div className="z-40">
//     <div
//       className={`m-auto border-b-8 w-fit h-fit bg-red-700 rounded-full border-red-700`}
//     >
//       <div
//         id="RockButton"
//         className={`rounded-full p-16 bg-white shadow-inner border-[22px] border-red-500`}
//       >
//         <img className="h-20 w-20" src={ROCK} />
//       </div>
//     </div>
//   </div>;
// }
