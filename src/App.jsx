import ClassBasedComponents from "./components/ClassBasedComponents";
import ConditionalRendering from "./components/ConditionalRendering";
import FunctionComponents from "./components/FunctionComponents";
import SubComponnet from "./components/SubComponnet";

function App() {
  return (
    <>
      <div>
        {/* <p>This root componnets</p>
        <SubComponnet>This is children components</SubComponnet>
        <ClassBasedComponents />
        <FunctionComponents /> */}

        <ConditionalRendering />
      </div>
    </>
  );
}

export default App;
