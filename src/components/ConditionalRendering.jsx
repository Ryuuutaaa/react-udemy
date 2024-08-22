import { useState } from "react";

const ConditionalRendering = () => {
  const [course, setCourse] = useState("react");
  return (
    <div>
      <p>Conditional Rendering </p>
      {course === "react" ? <p>Thsi course Reac</p> : <p>This course Vue</p>}
    </div>
  );
};

export default ConditionalRendering;
