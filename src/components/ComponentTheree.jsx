import courseContext from "./context/courseContext";
import { useContext } from "react";

const ComponentTheree = () => {
  const { course } = useContext(courseContext);
  return (
    <div>
      <h1>This component There</h1>
      <p>course : {course}</p>
    </div>
  );
};

export default ComponentTheree;
