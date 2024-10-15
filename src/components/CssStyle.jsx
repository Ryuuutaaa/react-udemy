import classess from "../assets/css/test.module.css";
console.log(classess);

const CssStyle = () => {
  return (
    // <div className="container">
    //   <p>Stylecss is here</p>
    // </div>
    // <div style={{ border: "5px solid black", backgroundColor: "red" }}>
    //   <p style={{ fontSize: "30px", color: "red", backgroundColor: "yellow" }}>
    //     This style inline css
    //   </p>
    // </div>
    <div className={classess.container}>
      <p className={classess.text}>This module css</p>
    </div>
  );
};

export default CssStyle;
