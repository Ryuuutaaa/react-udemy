import { useState } from "react";

const Counter = ({ render }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };
  return render(counter, handleIncrement);
};

export default Counter;
