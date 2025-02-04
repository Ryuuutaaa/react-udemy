import { useEffect, useState } from "react";

const UseEffectCom = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  useEffect(() => {
    console.log("call this function in every render");
  });

  useEffect(() => {
    console.log("call this function initial render");
  }, []);

  useEffect(() => {
    console.log("call this function when dependency changes");
  }, [counter]);

  return (
    <>
      <p>Use Effect example</p>k
      <button onClick={handleCounter}>Clicked {counter} times</button>
    </>
  );
};

export default UseEffectCom;
