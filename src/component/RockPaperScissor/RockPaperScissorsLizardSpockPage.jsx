import { useState, useEffect } from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import TRIANGLE from "./assets/bg-triangle.svg";
import RULES from "./assets/image-rules.svg";
import CLOSE from "./assets/icon-close.svg";
import LOGOBONUS from "./assets/logo-bonus.svg";
import SHELDON from "./assets/Sheldon.png";
import LIZARD from "./assets/icon-lizard.svg";
import SPOCK from "./assets/icon-spock.svg";

//style
import "./RockPaperScissor.css";

import PlayRound, {
  EmptyGameButton,
  GameButton,
  InactiveGameButton,
  ResultandRestart,
  StartingScreen,
  WinnerGlow,
} from "./RockPaperScissorLizardSpock";
import Button from "../Buttons/Button";

function RockPaperScissorLizardSpock() {
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);
  const [rock, setRock] = useState(false);
  const [lizard, setLizard] = useState(false);
  const [spock, setSpock] = useState(false);
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [toggle, setToggle] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [round, setRound] = useState(0);

  useEffect(() => {
    console.log("Result is: " + result);
    console.log("Round: " + round);
  }, [result]);

  useEffect(() => {
    setAnimationClass("animate-RPSPopUpDelayed");
    setTimeout(() => {
      setAnimationClass("");
    }, 1500);
  }, [round]);

  return (
    <>
      <button className="absolute top-2 left-2 p-2 m-2 bg-white text-black h-fit w-fit text-xs z-50 opacity-50">
        <img className="h-12" src={SHELDON} />
      </button>
      <div
        id="RPS"
        className="select-none absolute top-0 left-0 w-screen h-screen text-white"
      >
        <div className="flex justify-between xl:w-1/2 sm:w-2/3 m-auto border-2 rounded-2xl p-4">
          <div className="font-extrabold leading-7 text-start text-white text-4xl">
            <img src={LOGOBONUS} />
          </div>

          <div className="h-full py-2 px-12 w-fit bg-white rounded-md">
            <p className="text-blue-700">Score</p>
            <h2
              className={`font-extrabold text-5xl text-slate-400 ${animationClass}`}
            >
              {score}
            </h2>
          </div>
        </div>

        {/* Start screen buttons: */}

        <div className="h-full w-full [&>*]:animate-RPSPopUp">
          <StartingScreen
            paper={paper}
            scissors={scissors}
            rock={rock}
            lizard={lizard}
            spock={spock}
            setComputerPick={setComputerPick}
            setScore={setScore}
            setResult={setResult}
            setPaper={setPaper}
            setScissors={setScissors}
            setRock={setRock}
            setLizard={setLizard}
            setSpock={setSpock}
            setRound={setRound}
            PlayRound={PlayRound}
          />

          {/* End of start */}
          <div className="animate-RPSPopUp">
            {paper && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div className="[&>*]:animate-RPSPopUp">
                    <h1 className="m-8 text-3xl">You picked</h1>
                    {computerPick === "paper" ||
                    computerPick === "scissors" ||
                    computerPick === "lizard" ? (
                      <>
                        <InactiveGameButton
                          id="PaperButton"
                          src={PAPER}
                          color="blue"
                        />
                      </>
                    ) : null}
                    {computerPick === "rock" || computerPick === "spock" ? (
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
                    ) : null}
                  </div>

                  <ResultandRestart setType={setPaper} result={result} />

                  <div className="z-40">
                    <h1 className="m-8 text-3xl">House picked </h1>
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed">
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
                        {computerPick === "lizard" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <InactiveGameButton
                              id="LizardButton"
                              src={LIZARD}
                              color="purple"
                            />
                          </div>
                        )}
                        {computerPick === "spock" && (
                          <InactiveGameButton
                            id="SpockButton"
                            src={SPOCK}
                            color="sky"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {scissors && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div className="[&>*]:animate-RPSPopUp">
                    <h1 className="m-8 text-3xl">You picked</h1>

                    {computerPick === "rock" ||
                    computerPick === "scissors" ||
                    computerPick === "spock" ? (
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
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed">
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
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {rock && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div className="[&>*]:animate-RPSPopUp">
                    <h1 className="m-8 text-3xl">You picked</h1>

                    {computerPick === "rock" || computerPick === "paper" ? (
                      <InactiveGameButton
                        id="RockButton"
                        src={ROCK}
                        color="red"
                      />
                    ) : null}
                    {computerPick === "scissors" && (
                      <>
                        <div className="rounded-full w-fit m-auto relative z-40">
                          <WinnerGlow />
                          <InactiveGameButton
                            id="RockButton"
                            src={ROCK}
                            color="red"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <ResultandRestart setType={setRock} result={result} />

                  <div className="z-40">
                    <h1 className="m-8 text-3xl">House picked </h1>
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed">
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
      </div>
    </>
  );
}

export default RockPaperScissorLizardSpock;

{
  /* try to make this work: */
}
{
  /* <div className="absolute bottom-0 right-0">
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
        </div> */
}
