import { useState } from "react";
import Title from "./Title";
import ShowCounter from "./ShowCounter";

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
      <ShowCounter counter={counter1} title="Counter 1" />
      
    </div>
  );
};

export default UseCallback;
