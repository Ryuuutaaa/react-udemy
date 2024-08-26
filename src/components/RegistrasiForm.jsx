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
    if (e.target.type === "checkbox") {
      setData((olddata) => ({ ...olddata, [e.target.name]: e.target.value }));
    } else {
      setData((olddata) => ({ ...olddata, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

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
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={data.confirmPassword}
          />
        </div>
        <div>
          <label htmlFor="">Country</label>
          <select name="country" value={data.country} onChange={handleChange}>
            <option value="USA">USA</option>
            <option value="Canada">Cadana</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="">Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="">Other</label>
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Aggrement</label>
          <input
            type="checkbox"
            name="aggrement"
            value={data.aggrement}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="save" />
        </div>
      </form>
    </div>
  );
};

export default RegistrasiForm;
