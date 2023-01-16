import { useState, useEffect } from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import TRIANGLE from "./assets/bg-triangle.svg";
import RULES from "./assets/image-rules.svg";
import CLOSE from "./assets/icon-close.svg";
import LOGO from "./assets/logo.svg";

//style
import "./RockPaperScissor.css";

import PlayRound, {
  GameButton,
  InactiveGameButton,
  ResultandRestart,
  WinnerGlow,
} from "./RockPaperScissor";
import Button from "../Buttons/Button";

function RockPaperScissor() {
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);
  const [rock, setRock] = useState(false);
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("Result is: " + result);
  }, [result]);

  return (
    <>
      <div
        id="RPS"
        className="select-none absolute top-0 left-0 w-screen h-screen text-white"
      >
        <div className="flex justify-between w-1/2 m-auto border-2 rounded-2xl p-4">
          <div className="font-extrabold leading-7 text-start text-white text-4xl">
            <img src={LOGO} />
          </div>
          <button
            className="p-2 m-2 bg-white text-black h-fit w-fit text-sm z-50 opacity-50"

            // onClick={() => {

            // }}
          >
            Add Sheldon's rules
          </button>

          <div className="h-full py-2 px-12 w-fit bg-white rounded-md">
            <p className="text-blue-700">Score</p>
            <h2 className="font-extrabold text-5xl text-slate-400">{score}</h2>
          </div>
        </div>

        {/* Start screen buttons: */}

        <div className="flex flex-wrap w-full h-full justify-center m-auto">
          {paper || scissors || rock || (
            <div className="z-20 w-[800px] relative">
              <button
                onClick={() => {
                  setPaper(true);

                  setResult(
                    PlayRound({ setComputerPick, setScore, setResult }, "paper")
                  );
                }}
                className="rounded-full p-0 h-fit bg-blue-700 z-50 m-16"
              >
                <GameButton id="PaperButton" src={PAPER} color="blue" />
              </button>

              <button
                onClick={() => {
                  setScissors(true);

                  PlayRound(
                    { setComputerPick, setScore, setResult },
                    "scissors"
                  );
                }}
                className="rounded-full p-0 h-fit bg-yellow-700 z-50 m-16"
              >
                <GameButton id="ScissorButton" src={SCISSORS} color="yellow" />
              </button>

              <button
                onClick={() => {
                  setRock(true);

                  PlayRound({ setComputerPick, setScore, setResult }, "rock");
                }}
                className="rounded-full p-0 h-fit bg-red-700 z-50 m-8"
              >
                <GameButton id="RockButton" src={ROCK} color="red" />
              </button>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <img src={TRIANGLE} />
              </div>
            </div>
          )}

          {/* End of start */}
          <div className="">
            {/* <div> */}
            {paper && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div>
                    <h1 className="m-8">You picked</h1>
                    {computerPick === "paper" || computerPick === "scissors" ? (
                      <>
                        <InactiveGameButton
                          id="PaperButton"
                          src={PAPER}
                          color="blue"
                        />
                      </>
                    ) : null}
                    {computerPick === "rock" && (
                      <>
                        <div className="rounded-full w-fit m-auto relative">
                          <WinnerGlow />
                          <InactiveGameButton
                            id="PaperButton"
                            src={PAPER}
                            color="blue"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <ResultandRestart setType={setPaper} result={result} />

                  {/* <div>
                    <h1>
                      {result === "win" || result === "lose" ? "You " : null}
                      {result}
                    </h1>
                    <Button
                      idAndClass="p-1 m-2 h-fit w-fit text-sm z-50"
                      text="Play Again"
                      onClick={() => {
                        setPaper(false);
                      }}
                    />
                  </div> */}

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
                      <div className="rounded-full w-fit m-auto relative">
                        <WinnerGlow />
                        <InactiveGameButton
                          id="ScissorButton"
                          src={SCISSORS}
                          color="yellow"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* </div> */}

            {scissors && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div>
                    <h1 className="m-8">You picked</h1>

                    {computerPick === "rock" || computerPick === "scissors" ? (
                      <InactiveGameButton
                        id="ScissorButton"
                        src={SCISSORS}
                        color="yellow"
                      />
                    ) : null}

                    {computerPick === "paper" && (
                      <>
                        <div className="rounded-full w-fit m-auto relative">
                          <WinnerGlow />
                          <InactiveGameButton
                            id="ScissorButton"
                            src={SCISSORS}
                            color="yellow"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <ResultandRestart setType={setScissors} result={result} />
                  {/* <div>
                    <h1>
                      {result === "win" || result === "lose" ? "You " : null}
                      {result}
                    </h1>
                    <Button
                      idAndClass="p-1 m-2 h-fit w-fit text-sm z-50"
                      text="Play Again"
                      onClick={() => {
                        setScissors(false);
                      }}
                    />
                  </div> */}

                  <div className="z-40">
                    <h1 className="m-8">House picked </h1>
                    {computerPick === "rock" && (
                      <div className="rounded-full w-fit m-auto relative">
                        <WinnerGlow />
                        <InactiveGameButton
                          id="RockButton"
                          src={ROCK}
                          color="red"
                        />
                      </div>
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
                {/* <Button
                idAndClass="p-1 m-2 absolute bottom-40 right-1/2 translate-x-1/2 text-sm z-50"
                text="Play Again"
                onClick={() => {
                  setScissors(false);
                }}
              /> */}
              </>
            )}

            {rock && (
              <>
                <div className="grid grid-col-3 grid-flow-col h-fit w-fit align-top z-40 text-white">
                  <div className="flex flex-col">
                    <h1 className="m-8">You picked</h1>

                    {computerPick === "rock" || computerPick === "scissors" ? (
                      <InactiveGameButton
                        id="RockButton"
                        src={ROCK}
                        color="red"
                      />
                    ) : null}
                    {computerPick === "paper" && (
                      <div className="rounded-full w-fit m-auto relative">
                        <WinnerGlow />
                        <InactiveGameButton
                          id="RockButton"
                          src={ROCK}
                          color="red"
                        />
                      </div>
                    )}
                  </div>

                  <ResultandRestart setType={setRock} result={result} />

                  {/* <div>
                    <h1>
                      {result === "win" || result === "lose" ? "You " : null}
                      {result}
                    </h1>
                    <Button
                      idAndClass="p-1 m-2 h-fit w-fit text-sm z-50"
                      text="Play Again"
                      onClick={() => {
                        setRock(false);
                      }}
                    />
                  </div> */}

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
                      <>
                        <div className="rounded-full w-fit m-auto relative">
                          <WinnerGlow />
                          <InactiveGameButton
                            id="ScissorButton"
                            src={SCISSORS}
                            color="yellow"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* <Button
                idAndClass="p-1 m-2 absolute bottom-40 right-1/2 translate-x-1/2 text-sm z-50"
                text="Play Again"
                onClick={() => {
                  setRock(false);
                }}
              /> */}
              </>
            )}
          </div>
        </div>
        <button
          className="bg-transparent text-white absolute right-6 bottom-6 px-6 btn p-2 rounded-xl border-2 shadow-xl"
          onClick={() => setToggle(!toggle)}
        >
          RULES
        </button>
        {toggle && (
          <>
            <div className="absolute grid grid-row-2 left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 z-50 bg-gray-100 w-1/2 h-1/2 m-auto rounded-xl">
              <h1 className="text-left text-2xl p-4 z-50 text-black">RULES</h1>
              <button
                className="absolute bg-transparent right-3 top-3 p-2 z-50"
                onClick={() => setToggle(!toggle)}
              >
                <img src={CLOSE} />
              </button>
              <img className="m-auto" src={RULES} />
            </div>
          </>
        )}
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

{
  /* {rock ||
              scissors ||
              (!paper && (
                <>
                  <button
                    onClick={() => {
                      setPaper(true);

                      setResult(
                        PlayRound(
                          { setComputerPick, setScore, setResult },
                          "paper"
                        )
                      );
                    }}
                    className="rounded-full p-0 h-fit bg-blue-700 z-50 m-16"
                  >
                    <GameButton id="PaperButton" src={PAPER} color="blue" />
                  </button>
                </>
              ))}

            {paper ||
              rock ||
              (!scissors && (
                <>
                  <button
                    onClick={() => {
                      setScissors(true);

                      PlayRound(
                        { setComputerPick, setScore, setResult },
                        "scissors"
                      );
                    }}
                    className="rounded-full p-0 h-fit bg-yellow-700 z-50 m-16"
                  >
                    <GameButton
                      id="ScissorButton"
                      src={SCISSORS}
                      color="yellow"
                    />
                  </button>
                </>
              ))}

            {scissors ||
              paper ||
              (!rock && (
                <>
                  <button
                    onClick={() => {
                      setRock(true);

                      PlayRound(
                        { setComputerPick, setScore, setResult },
                        "rock"
                      );
                    }}
                    className="rounded-full p-0 h-fit bg-red-700 z-50 m-8"
                  >
                    <GameButton id="RockButton" src={ROCK} color="red" />
                  </button>
                </>
              ))}
            {paper || scissors || rock || (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <img src={TRIANGLE} />
              </div>
            )} */
}
