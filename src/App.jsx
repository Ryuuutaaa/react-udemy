import ClassBasedComponents from "./components/ClassBasedComponents";
import SubComponnet from "./components/SubComponnet";

function App() {
  return (
    <>
      <div>
        <p>This root componnets</p>
        <SubComponnet>This is children components</SubComponnet>
        <ClassBasedComponents test="this class props components">
          THis classes children components
        </ClassBasedComponents>
      </div>
    </>
  );
}

export default App;
