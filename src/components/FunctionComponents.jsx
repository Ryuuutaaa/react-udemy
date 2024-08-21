import React from "react";

const FunctionComponents = () => {
  const [data, setData] = React.useState("React");

  const handleClick = (course, price) => {
    console.log(price);
    setData(course);
  };
  return (
    <div>
      <p>This function componetns</p>
      <button type="button" onClick={() => handleClick("angular", 200)}>
        Click here
      </button>

      <p>state : {data}</p>
    </div>
  );
};

export default FunctionComponents;
