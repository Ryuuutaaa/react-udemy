import { useState } from "react";
import Title from "./Title";

const UseCallback = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleIncrementByOne = () => {
    setCounter1((oldCounter) => oldCounter + 1);
  };

  const handleIncrementByFive = () => {
    setCounter2((oldCounter) => oldCounter + 5);
  };

  return (
    <div>
      <Title />
    </div>
  );
};

export default UseCallback;
