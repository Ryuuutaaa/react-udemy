import { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => {};
  }, []);

  return (
    <div>
      <p>Timer Example</p>
      {timer.toLocaleTimeString()}
    </div>
  );
};

export default Timer;
