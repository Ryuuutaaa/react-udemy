import ClassBasedComponents from "./components/ClassBasedComponents";
import FunctionComponents from "./components/FunctionComponents";
import SubComponnet from "./components/SubComponnet";

function App() {
  return (
    <>
      <div>
        <p>This root componnets</p>
        <SubComponnet>This is children components</SubComponnet>
        <ClassBasedComponents />
        <FunctionComponents />
      </div>
    </>
  );
}

export default App;
