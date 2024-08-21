import React from "react";

const FunctionComponents = () => {
  const [data, setData] = React.useState("React");

  const handleClick = () => {
    console.log("this is handle click");
    setData("vue");
  };
  return (
    <div>
      <p>This function componetns</p>
      <button type="button" onClick={handleClick}>
        Click here
      </button>

      <p>state : {data}</p>
    </div>
  );
};

export default FunctionComponents;
