import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="footer-clicker">
      <p>Clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ClickCounter;
