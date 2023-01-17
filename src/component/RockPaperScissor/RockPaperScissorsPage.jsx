import { useState, useEffect } from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import TRIANGLE from "./assets/bg-triangle.svg";
import RULES from "./assets/image-rules.svg";
import CLOSE from "./assets/icon-close.svg";
import LOGO from "./assets/logo.svg";
import SHELDON from "./assets/Sheldon.png";

//style
import "./RockPaperScissor.css";

import PlayRound, {
  GameButton,
  InactiveGameButton,
  ResultandRestart,
  StartingScreen,
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
  const [showComputerPick, setShowComputerPick] = useState(false);

  //* It seems like this useEffect is not updating often enough
  useEffect(() => {
    console.log("Result is: " + result);
  }, [result]);

  useEffect(() => {
    setTimeout(() => {
      setShowComputerPick(true);
    }, 2500);
  }, [computerPick]);

  return (
    <>
      <button className="absolute top-2 left-2 p-2 m-2 bg-white text-black h-fit w-fit text-xs z-50 opacity-50">
        <img className="h-12" src={SHELDON} />
      </button>
      <div
        id="RPS"
        className="select-none absolute top-0 left-0 w-screen h-screen text-white"
      >
        <div className="flex justify-between w-1/2 m-auto border-2 rounded-2xl p-4">
          <div className="font-extrabold leading-7 text-start text-white text-4xl">
            <img src={LOGO} />
          </div>

          <div className="h-full py-2 px-12 w-fit bg-white rounded-md">
            <p className="text-blue-700">Score</p>
            <h2 className="font-extrabold text-5xl text-slate-400">{score}</h2>
          </div>
        </div>

        {/* Start screen buttons: */}

        <div className="flex flex-wrap w-full h-full justify-center m-auto [&>*]:animate-RPSPopUp">
          <StartingScreen
            paper={paper}
            scissors={scissors}
            rock={rock}
            setComputerPick={setComputerPick}
            setScore={setScore}
            setResult={setResult}
            setPaper={setPaper}
            setScissors={setScissors}
            setRock={setRock}
            PlayRound={PlayRound}
          />

          {/* End of start */}
          <div className="[&>*]:animate-RPSPopUp">
            {/* <div> */}
            {paper && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div>
                    <h1 className="m-8 text-3xl">You picked</h1>
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
                        <div className="rounded-full w-fit m-auto relative z-40">
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

                  <div className="z-40 ">
                    <h1 className="m-8 text-3xl">House picked </h1>
                    {showComputerPick && computerPick === "rock" && (
                      <InactiveGameButton
                        id="RockButton"
                        src={ROCK}
                        color="red"
                      />
                    )}
                    {showComputerPick && computerPick === "paper" && (
                      <InactiveGameButton
                        id="PaperButton"
                        src={PAPER}
                        color="blue"
                      />
                    )}
                    {showComputerPick && computerPick === "scissors" && (
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
                    <h1 className="m-8 text-3xl">You picked</h1>

                    {computerPick === "rock" || computerPick === "scissors" ? (
                      <InactiveGameButton
                        id="ScissorButton"
                        src={SCISSORS}
                        color="yellow"
                      />
                    ) : null}

                    {computerPick === "paper" && (
                      <>
                        <div className="rounded-full w-fit m-auto relative z-40">
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

                  <div className="z-40">
                    <h1 className="m-8 text-3xl">House picked </h1>
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
              </>
            )}

            {rock && (
              <>
                <div className="grid grid-col-3 grid-flow-col h-fit w-fit align-top z-40 text-white">
                  <div className="flex flex-col">
                    <h1 className="m-8 text-3xl">You picked</h1>

                    {computerPick === "rock" || computerPick === "paper" ? (
                      <InactiveGameButton
                        id="RockButton"
                        src={ROCK}
                        color="red"
                      />
                    ) : null}
                    {computerPick === "scissors" && (
                      <div className="rounded-full w-fit m-auto relative z-40">
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

                  <div className="z-40">
                    <h1 className="m-8 text-3xl">House picked </h1>

                    {computerPick === "rock" && (
                      <InactiveGameButton
                        id="RockButton"
                        src={ROCK}
                        color="red"
                      />
                    )}
                    {computerPick === "paper" && (
                      <div className="rounded-full w-fit m-auto relative">
                        <WinnerGlow />
                        <InactiveGameButton
                          id="PaperButton"
                          src={PAPER}
                          color="blue"
                        />
                      </div>
                    )}
                    {computerPick === "scissors" && (
                      <>
                        <InactiveGameButton
                          id="ScissorButton"
                          src={SCISSORS}
                          color="yellow"
                        />
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="z-50">
          <button
            className="bg-transparent text-white absolute right-6 bottom-6 px-6 btn p-2 rounded-xl border-2 shadow-xl"
            onClick={() => setToggle(!toggle)}
          >
            RULES
          </button>
          {toggle && (
            <>
              <div className="absolute grid grid-row-2 left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 z-50 bg-gray-100 sm:w-1/2 xl:w-1/4 h-1/2 m-auto rounded-xl animate-rulesSlideIn">
                <h1 className="text-left text-2xl p-4 z-50 text-black">
                  RULES
                </h1>
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

        {/* try to make this work: */}
        {/* <div className="absolute bottom-0 right-0">
          <button
            className="bg-transparent text-white px-6 btn p-2 rounded-xl border-2 shadow-xl"
            onClick={() => setToggle(!toggle)}
          >
            RULES
          </button>
          {toggle && (
            <div className="absolute grid grid-row-2 left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 z-50 bg-gray-100 w-1/4 h-1/2 m-auto rounded-xl animate-ProjectPopUp">
              <h1 className="text-left text-2xl p-4 z-50 text-black">RULES</h1>
              <button
                className="absolute bg-transparent right-3 top-3 p-2 z-50"
                onClick={() => setToggle(!toggle)}
              >
                <img src={CLOSE} />
              </button>
              <img className="m-auto" src={RULES} />
            </div>
          )}
        </div> */}
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
