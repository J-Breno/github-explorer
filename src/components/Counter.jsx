import { useState } from "react";

export function Counter() {
  let [counter, setCounter] = useState(0);

  // let it change = deixe isso ser alterado = let

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
