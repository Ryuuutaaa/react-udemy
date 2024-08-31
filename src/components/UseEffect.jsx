import { useEffect, useState } from "react";

const UseEffectCom = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  useEffect(() => {
    console.log("call this function in every render");
  });
  return (
    <>
      <p>Use Effect example</p>
      <button onClick={handleCounter}>Clicked {counter} times</button>
    </>
  );
};

export default UseEffectCom;
