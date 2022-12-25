import { useEffect, useState } from "react";

function UseEffect() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(2);
  // const [countC, setCountC] = useState(0);

  console.log("code here will be run on every rerender");

  useEffect(() => console.log("Running code here"), []);
  return (
    <div>
      <div className="my-8 bg-slate-100 border-2 rounded p-8 border-slate-500">
        <h1>UseEffect Component</h1>
        <h2 className="p-4">{countA}</h2>
        <button
          className="rounded border-2 border-slate-900"
          onClick={() => setCountA((oldState) => oldState + 1)}
        >
          Increment
        </button>
        <button
          className="rounded border-2 border-slate-900"
          onClick={() => setCountA((oldState) => oldState - 1)}
        >
          Decrement
        </button>
        <button
          className="rounded border-2 border-slate-900"
          onClick={() => setCountA((oldState) => (oldState = 0))}
        >
          Set to zero
        </button>
      </div>

      <div className="my-8 bg-slate-100 border-2 rounded p-8 border-slate-500">
        <h1>UseEffect Component</h1>
        <h2 className="p-4">{countB}</h2>
        <button
          className="rounded border-2 border-slate-900"
          onClick={() => setCountB((oldState) => oldState * 2)}
        >
          Double
        </button>
        <button
          className="rounded border-2 border-slate-900"
          onClick={() => setCountB((oldState) => oldState / 2)}
        >
          Split
        </button>
        <button
          className="rounded border-2 border-slate-900"
          onClick={() => setCountA((oldState) => (oldState = 2))}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseEffect;
