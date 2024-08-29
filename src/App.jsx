import ComponentOne from "./components/ComponentOne";
import courseContext from "./components/context/courseContext";

function App() {
  return (
    <>
      <div>
        <courseContext.Provider value={{ course: "react" }}>
          <ComponentOne />
        </courseContext.Provider>
      </div>
    </>
  );
}

export default App;
