// import UseCallback from "./components/UseCallback";

import PostListWithoutReducer from "./components/PostListWithoutReducer";
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
        {/* <UserReducer /> */}
        <PostListWithoutReducer />
      </div>
    </>
  );
}

export default App;
