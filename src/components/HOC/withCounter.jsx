import { Component, useState } from "react";

const withCounter = (Component) => {
  const newComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
      setCounter((oldCounter) => oldCounter + 1);
    };

    return <Component counter={counter} handleIncrement={handleIncrement} />;
  };

  return newComponent;
};

export default withCounter;
