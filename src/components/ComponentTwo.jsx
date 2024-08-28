import React from "react";
import ComponentTheree from "./ComponentTheree";

const ComponentTwo = ({ course }) => {
  return (
    <div>
      <h1>This component Two</h1>
      <ComponentTheree course={course} />
    </div>
  );
};

export default ComponentTwo;
