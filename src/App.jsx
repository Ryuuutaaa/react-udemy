import ClickCounterByRP from "./components/ClickCounterByRP";
import Counter from "./components/Counter";

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
      </div>
    </>
  );
}

export default App;
