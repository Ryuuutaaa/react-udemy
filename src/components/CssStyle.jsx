import { useState } from "react";
import classess from "../assets/css/test.module.css";
console.log(classess);

const CssStyle = () => {
  const [color, setColors] = useState(false);

  const handleClick = () => {
    setColors(!color);
  };
  return (
    // <div className="container">
    //   <p>Stylecss is here</p>
    // </div>
    // <div style={{ border: "5px solid black", backgroundColor: "red" }}>
    //   <p style={{ fontSize: "30px", color: "red", backgroundColor: "yellow" }}>
    //     This style inline css
    //   </p>
    // </div>
    <div className={color ? classess.container : classess.container1}>
      <p className={color ? classess.text : classess.text1}>This module css</p>
      <button onClick={handleClick}>Change Colors</button>
    </div>
  );
};

export default CssStyle;
