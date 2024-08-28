import React from "react";

const HoverCounterByRP = ({ counter, handleIncrement }) => {
  return (
    <div>
      <h1 onMouseOver={handleIncrement}>Hoverd {counter} times</h1>
    </div>
  );
};

export default HoverCounterByRP;
