import { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggendIn] = useState(false);

  const handleLogin = () => {
    setIsLoggendIn(true);
  };

  const handleLogout = () => {
    setIsLoggendIn(false);
  };

  let text = null;

  if (isLoggedIn) {
    text = "welcome Rafiii";
  } else {
    text = "click to login button";
  }
  return (
    <div>
      <p>{text}</p>
      {isLoggedIn === false ? (
        <button onClick={handleLogin}>login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default ConditionalRendering;
