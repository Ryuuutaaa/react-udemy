import { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>clicked {counter} times</button>
    </div>
  );
};

export default ClickCounter;
