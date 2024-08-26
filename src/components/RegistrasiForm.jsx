import { useState } from "react";

const RegistrasiForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    gender: "",
    aggrement: false,
  });

  const handleChange = (e) => {
    setData((olddata) => ({ ...olddata, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {};

  console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrasiForm;
