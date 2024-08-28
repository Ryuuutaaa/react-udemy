import React from "react";
import ComponentTwo from "./ComponentTwo";

const ComponentOne = ({ course }) => {
  return (
    <div>
      <h1>This Component One</h1>
      <ComponentTwo course={course} />
    </div>
  );
};

export default ComponentOne;
