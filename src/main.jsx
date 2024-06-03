import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const text = "hi there";
const tabIndex = 2;

const p = (
  <div>
    <p className="main" tabIndex={tabIndex}>
      <span className="test">{text}</span>
    </p>
    <p className="main" tabIndex={tabIndex}>
      <span className="test">{tabIndex}</span>
    </p>
  </div>
);
console.log(p);
