import { useState } from "react";
import Timer from "./components/Timer";
import CounterApp from "./components/CounterApp";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div>
        {/* <courseContext.Provider value={{ course: "react" }}>
          <ComponentOne />
        </courseContext.Provider> */}
        <button onClick={() => setToggle(!toggle)}>Click Toggle</button>
        {toggle ? <CounterApp /> : <Timer />}
      </div>
    </>
  );
}

export default App;
