// import UseCallback from "./components/UseCallback";

import PostListWithCustomHooks from "./components/PostListWithCustomHooks";
import PostListWithReducer from "./components/PostListWithReducer";

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
        {/* <PostListWithoutReducer /> */}
        {/* <PostListWithReducer />  */}
        <PostListWithCustomHooks />
      </div>
    </>
  );
}

export default App;
