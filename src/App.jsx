// import UseCallback from "./components/UseCallback";

import UserReducer from "./components/UserReducer";

// import UserReff from "./components/UserReff";

function App() {
  return (
    <>
      <div>
        {/* <courseContext.Provider value={{ course: "react" }}>
          <ComponentOne />
        </courseContext.Provider> */}
        {/* <button onClick={() => setToggle(!toggle)}>Click Toggle</button>
        {toggle ? <CounterApp /> : <Timer />} */}
        {/* <UseCallback /> */}
        {/* <UserReff /> */}
        <UserReducer />
      </div>
    </>
  );
}

export default App;
