import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const TestFunction = function () {
  const course = "react";
  return (
    <div>
      <p>Welcome to {course} source </p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(TestFunction());
