// import UseCallback from "./components/UseCallback";

import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import OrderConfirmation from "./components/pages/OrderConfirmation";
import NotFound from "./components/pages/NotFound";

// import PostListWithCustomHooks from "./components/PostListWithCustomHooks";
// import PostListWithReducer from "./components/PostListWithReducer";

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
        {/* <PostListWithCustomHooks /> */}
        {/* <CssStyle /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
