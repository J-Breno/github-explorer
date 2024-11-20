import { useState } from "react";

// Imutabilidade - uma variável nunca vai poder ter o seu valor alterado, ela sempre vai receber o um novo valor;

// numbers = [1, 2, 3, 4];
// newNumbers = [...numbers, 5]

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
