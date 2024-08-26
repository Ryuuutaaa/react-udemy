import { useState } from "react";

const HoverCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleHover = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };
  return (
    <div>
      <h1 onMouseOver={handleHover}>Hovered {counter} times</h1>
    </div>
  );
};

export default HoverCounter;
