import { useState } from "react";

const Form = () => {
  const [course, setCourse] = useState("");
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");
  const [aggrement, setAggrement] = useState("");

  const [gender, setGenter] = useState("");

  const hadnleChange = () => {
    if (event.target.name === "course") {
      setCourse(event.target.value);
    } else if (event.target.name === "desc") {
      setDesc(event.target.value);
    } else if (event.target.name === "country") {
      setCountry(event.target.value);
    } else if (event.target.name === "aggrement") {
      setAggrement(event.target.checked);
    } else if (event.target.name === "gender") {
      setGenter(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(course);
    console.log(desc);
    console.log(country);
    console.log(aggrement);
    console.log(gender);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input name="course" value={course} onChange={hadnleChange} />
        <br />
        <textarea
          name="desc"
          id=""
          value={desc}
          onChange={hadnleChange}></textarea>
        <br />
        <select name="country" id="" value={country} onChange={hadnleChange}>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="aggrement"
          id=""
          checked={aggrement}
          onChange={hadnleChange}
        />
        <br />
        <input
          type="radio"
          name="gender"
          onChange={hadnleChange}
          id=""
          value="male"
        />
        <input
          type="radio"
          name="gender"
          onChange={hadnleChange}
          id=""
          value="female"
        />
        <input
          type="radio"
          name="gender"
          onChange={hadnleChange}
          id=""
          value="other"
        />
        <br />
        <input type="submit" value="save" />
      </form>
    </div>
  );
};

export default Form;
