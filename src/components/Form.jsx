import { useState } from "react";

const Form = () => {
  const [course, setCourse] = useState("");
  const hadnleChange = () => {
    setCourse(event.target.value);
  };

  console.log(course);
  return (
    <div>
      <form action="">
        <input name="course" value={course} onChange={hadnleChange} />
      </form>
    </div>
  );
};

export default Form;
