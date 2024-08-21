import React from "react";

const FunctionComponents = () => {
  const [data, setData] = React.useState("React");

  console.log(data);
  return (
    <div>
      <p>This function componetns</p>
    </div>
  );
};

export default FunctionComponents;
