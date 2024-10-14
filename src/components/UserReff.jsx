import React, { useState } from "react";

const UserReff = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <p>This useReff example</p>
      <input
        type="text"
        name="nama"
        value={input.name}
        onChange={handleChange}
      />
      <br />

      <input
        type="emial"
        name="email"
        value={input.email}
        onChange={handleChange}
      />

      <br />

      <input
        type="password"
        name="password"
        value={input.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default UserReff;
