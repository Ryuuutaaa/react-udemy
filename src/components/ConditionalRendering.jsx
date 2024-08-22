import { useState } from "react";

const ConditionalRendering = () => {
  const [course, setCourse] = useState("vue");
  return (
    <div>
      <p>Conditional Rendering </p>
      {course === "react" ? (
        <p>Thsi course Reac</p>
      ) : course === "vue" ? (
        <p>This course Vue</p>
      ) : null}
    </div>
  );
};

export default ConditionalRendering;
