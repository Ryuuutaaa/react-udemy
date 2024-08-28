import ClickCounterByRP from "./components/ClickCounterByRP";
import Counter from "./components/Counter";
import HoverCounterByRP from "./components/HoverCounterByRP";

function App() {
  return (
    <>
      <div>
        <Counter
          render={(counter, handleIncrement) => (
            <ClickCounterByRP
              counter={counter}
              handleIncrement={handleIncrement}
            />
          )}
        />

        <Counter
          render={(counter, handleIncrement) => (
            <HoverCounterByRP
              counter={counter}
              handleIncrement={handleIncrement}
            />
          )}
        />
      </div>
    </>
  );
}

export default App;
