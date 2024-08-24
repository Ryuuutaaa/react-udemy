import { useState } from "react";

const Form = () => {
  const [course, setCourse] = useState("");
  const [desc, setDesc] = useState("");

  const hadnleChange = () => {
    if (event.target.name === "course") {
      setCourse(event.target.value);
    } else if (event.target.name === "desc") {
      setDesc(event.target.value);
    }
  };

  console.log(course);
  console.log(desc);
  return (
    <div>
      <form action="">
        <input name="course" value={course} onChange={hadnleChange} />
        <textarea
          name="desc"
          id=""
          value={desc}
          onChange={hadnleChange}></textarea>
      </form>
    </div>
  );
};

export default Form;
