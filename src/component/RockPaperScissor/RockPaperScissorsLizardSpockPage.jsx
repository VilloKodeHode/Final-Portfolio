import { useState, useEffect } from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import TRIANGLE from "./assets/bg-triangle.svg";
import RULES from "./assets/image-rules.svg";
import RULESBONUS from "./assets/image-rules-bonus.svg";
import CLOSE from "./assets/icon-close.svg";
import LOGO from "./assets/logo.svg";
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

//buttons:
import ScissorsGameButton, {
  LizardGameButton,
  PaperGameButton,
  RockGameButton,
  SpockGameButton,
} from "./RPSLSButtons";
import { Link } from "react-router-dom";

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
      <Link
        className="absolute top-2 left-2 p-2 m-2 bg-water-200 h-fit w-fit rounded-xl z-50 opacity-80"
        to="/RockPaperScissors"
      >
        <img className="h-12" src={LOGO} />
      </Link>
      <div
        id="RPS"
        className="select-none absolute top-0 left-0 w-screen h-screen text-white"
      >
        <div className="flex justify-between xl:w-1/2 sm:w-2/3 m-auto border-2 rounded-2xl p-4">
          <div className="font-extrabold leading-7 text-start text-white text-4xl">
            <img src={LOGOBONUS} />
          </div>

          <div className="h-[114px] flex flex-col justify-center py-2 px-12 w-fit bg-white rounded-md">
            <p className="text-blue-700 tracking-widest">SCORE</p>
            <h2
              className={`font-extrabold text-6xl text-slate-500 ${animationClass}`}
            >
              {score}
            </h2>
          </div>
        </div>

        {/* Start screen buttons: */}

        <div className="flex flex-wrap w-full h-full justify-center m-auto [&>*]:animate-RPSPopUp">
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
                    <h1 className="m-4 text-3xl">You picked</h1>
                    {computerPick === "paper" ||
                    computerPick === "scissors" ||
                    computerPick === "lizard" ? (
                      <PaperGameButton />
                    ) : null}
                    {computerPick === "rock" || computerPick === "spock" ? (
                      <div className="rounded-full w-fit m-auto relative z-40">
                        <WinnerGlow />
                        <PaperGameButton />
                      </div>
                    ) : null}
                  </div>

                  <ResultandRestart setType={setPaper} result={result} />

                  <div className="z-40">
                    <h1 className="m-4 text-3xl">House picked </h1>
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed">
                        {computerPick === "rock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <RockGameButton />
                          </div>
                        )}

                        {computerPick === "paper" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <PaperGameButton />
                          </div>
                        )}
                        {computerPick === "scissors" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <ScissorsGameButton />
                          </div>
                        )}
                        {computerPick === "lizard" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <LizardGameButton />
                          </div>
                        )}
                        {computerPick === "spock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <SpockGameButton />
                          </div>
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
                    <h1 className="m-4 text-3xl">You picked</h1>

                    {computerPick === "rock" ||
                    computerPick === "scissors" ||
                    computerPick === "spock" ? (
                      <ScissorsGameButton />
                    ) : null}

                    {computerPick === "paper" || computerPick === "lizard" ? (
                      <>
                        <div className="rounded-full w-fit m-auto relative z-40">
                          <WinnerGlow />
                          <ScissorsGameButton />
                        </div>
                      </>
                    ) : null}
                  </div>

                  <ResultandRestart setType={setScissors} result={result} />

                  <div className="z-40">
                    <h1 className="m-4 text-3xl">House picked </h1>
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed">
                        {computerPick === "paper" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <PaperGameButton />
                          </div>
                        )}
                        {computerPick === "scissors" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <ScissorsGameButton />
                          </div>
                        )}
                        {computerPick === "rock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <RockGameButton />
                          </div>
                        )}
                        {computerPick === "lizard" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <LizardGameButton />
                          </div>
                        )}
                        {computerPick === "spock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <SpockGameButton />
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
                    <h1 className="m-4 text-3xl">You picked</h1>
                    {computerPick === "rock" ||
                    computerPick === "paper" ||
                    computerPick === "spock" ? (
                      <RockGameButton />
                    ) : null}
                    {computerPick === "scissors" ||
                    computerPick === "lizard" ? (
                      <div className="rounded-full w-fit m-auto relative z-40">
                        <WinnerGlow />
                        <RockGameButton />
                      </div>
                    ) : null}
                  </div>

                  <ResultandRestart setType={setRock} result={result} />

                  <div className="z-40 w-fit">
                    <h1 className="m-4 text-3xl">House picked </h1>
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed w-fit">
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
                            <div className="rounded-full w-fit m-auto relative">
                              <PaperGameButton />
                            </div>
                          </div>
                        )}
                        {computerPick === "scissors" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <ScissorsGameButton />
                          </div>
                        )}
                        {computerPick === "lizard" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <LizardGameButton />
                          </div>
                        )}
                        {computerPick === "spock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <SpockGameButton />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {lizard && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div className="[&>*]:animate-RPSPopUp">
                    <h1 className="m-4 text-3xl">You picked</h1>

                    {computerPick === "rock" ||
                    computerPick === "scissors" ||
                    computerPick === "lizard" ? (
                      <LizardGameButton />
                    ) : null}
                    {computerPick === "spock" || computerPick === "paper" ? (
                      <>
                        <div className="rounded-full w-fit m-auto relative z-40">
                          <WinnerGlow />
                          <LizardGameButton />
                        </div>
                      </>
                    ) : null}
                  </div>

                  <ResultandRestart setType={setLizard} result={result} />

                  <div className="z-40">
                    <h1 className="m-4 text-3xl">House picked </h1>
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed">
                        {computerPick === "rock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <RockGameButton />
                          </div>
                        )}
                        {computerPick === "paper" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <div className="rounded-full w-fit m-auto relative">
                              <PaperGameButton />
                            </div>
                          </div>
                        )}
                        {computerPick === "scissors" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <ScissorsGameButton />
                          </div>
                        )}
                        {computerPick === "lizard" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <LizardGameButton />
                          </div>
                        )}
                        {computerPick === "spock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <SpockGameButton />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {spock && (
              <>
                <div className="flex h-full align-top z-40 text-white">
                  <div className="[&>*]:animate-RPSPopUp">
                    <h1 className="m-4 text-3xl">You picked</h1>

                    {computerPick === "lizard" ||
                    computerPick === "paper" ||
                    computerPick === "spock" ? (
                      <SpockGameButton />
                    ) : null}
                    {computerPick === "scissors" || computerPick === "rock" ? (
                      <>
                        <div className="rounded-full w-fit m-auto relative z-40">
                          <WinnerGlow />
                          <SpockGameButton />
                        </div>
                      </>
                    ) : null}
                  </div>

                  <ResultandRestart setType={setSpock} result={result} />

                  <div className="z-40">
                    <h1 className="m-4 text-3xl">House picked </h1>
                    <div className="relative">
                      <EmptyGameButton />
                      <div className="[&>*]:animate-RPSPopUpDelayed">
                        {computerPick === "rock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <RockGameButton />
                          </div>
                        )}
                        {computerPick === "paper" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <div className="rounded-full w-fit m-auto relative">
                              <WinnerGlow />
                              <PaperGameButton />
                            </div>
                          </div>
                        )}
                        {computerPick === "scissors" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <ScissorsGameButton />
                          </div>
                        )}
                        {computerPick === "lizard" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <WinnerGlow />
                            <LizardGameButton />
                          </div>
                        )}
                        {computerPick === "spock" && (
                          <div className="rounded-full w-fit m-auto relative">
                            <SpockGameButton />
                          </div>
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
              {/* Add modal from daisyUI */}
              <div className="">
                <div className="absolute left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 z-50 bg-gray-100 sm:w-1/2 xl:w-1/4 h-1/2 m-auto rounded-xl animate-rulesSlideIn">
                  <h1 className="text-left text-2xl p-4 z-50 text-black">
                    RULES
                  </h1>
                  <button
                    className="absolute bg-transparent right-3 top-3 p-2 z-50"
                    onClick={() => setToggle(!toggle)}
                  >
                    <img src={CLOSE} />
                  </button>
                  <img className="m-auto" src={RULESBONUS} />
                </div>
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
