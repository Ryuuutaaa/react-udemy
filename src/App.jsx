import ClickCounterByRP from "./components/ClickCounterByRP";
import Counter from "./components/Counter";
import HoverCounterByRP from "./components/HoverCounterByRP";

function App() {
  return (
    <>
      <div>
        <Counter>
          {(counter, handleIncrement) => (
            <ClickCounterByRP
              counter={counter}
              handleIncrement={handleIncrement}
            />
          )}
        </Counter>

        <Counter>
          {(counter, handleIncrement) => (
            <HoverCounterByRP
              counter={counter}
              handleIncrement={handleIncrement}
            />
          )}
        </Counter>
      </div>
    </>
  );
}

export default App;
