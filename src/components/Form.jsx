import { useState } from "react";

const Form = () => {
  const [course, setCourse] = useState("");
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");

  const hadnleChange = () => {
    if (event.target.name === "course") {
      setCourse(event.target.value);
    } else if (event.target.name === "desc") {
      setDesc(event.target.value);
    } else if (event.target.name === "country") {
      setCountry(event.target.value);
    }
  };

  console.log(course);
  console.log(desc);
  console.log(country);
  return (
    <div>
      <form action="">
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
      </form>
    </div>
  );
};

export default Form;
