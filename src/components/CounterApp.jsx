import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const handleReduceCounter = () => {
    setCounter((oldCounter) => oldCounter - 1);
  };

  const handlePlusCounter = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };
  return (
    <div>
      {counter > 0 ? <button>-</button> : null}
      <span>{counter}</span>
      <button onClick={handlePlusCounter}>+</button>
    </div>
  );
};

export default CounterApp;
