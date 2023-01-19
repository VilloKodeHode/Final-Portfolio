import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import LIZARD from "./assets/icon-lizard.svg";
import SPOCK from "./assets/icon-spock.svg";

export function ScissorsGameButton() {
  return (
    <div
      className={`border-b-8 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-yellow-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={SCISSORS} />
        </div>
      </div>
    </div>
  );
}

export function PaperGameButton() {
  return (
    <div className={`border-b-8 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-blue-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={PAPER} />
        </div>
      </div>
    </div>
  );
}

export function RockGameButton() {
  return (
    <div className={`border-b-8 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-red-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={ROCK} />
        </div>
      </div>
    </div>
  );
}

export function LizardGameButton() {
  return (
    <div
      className={`border-b-8 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-purple-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={LIZARD} />
        </div>
      </div>
    </div>
  );
}

export function SpockGameButton() {
  return (
    <div className={`border-b-8 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-teal-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={SPOCK} />
        </div>
      </div>
    </div>
  );
}

export function ScissorsSmallGameButton() {
  return (
    <div
      className={`border-b-4 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-yellow-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={SCISSORS} />
        </div>
      </div>
    </div>
  );
}

export function PaperSmallGameButton() {
  return (
    <div className={`border-b-8 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-blue-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={PAPER} />
        </div>
      </div>
    </div>
  );
}

export function RockSmallGameButton() {
  return (
    <div className={`border-b-8 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-red-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={ROCK} />
        </div>
      </div>
    </div>
  );
}

export function LizardSmallGameButton() {
  return (
    <div
      className={`border-b-8 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-purple-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={LIZARD} />
        </div>
      </div>
    </div>
  );
}

export function SpockSmallGameButton() {
  return (
    <div className={`border-b-8 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-[28px] bg-white border-[22px] border-teal-500  buttonshadow`}
      >
        <div className="h-24 w-24 flex relative">
          <img className="w-[70px] m-auto z-20" src={SPOCK} />
        </div>
      </div>
    </div>
  );
}

export default ScissorsGameButton;
