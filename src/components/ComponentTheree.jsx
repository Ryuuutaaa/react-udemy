import courseContext from "./context/courseContext";

const ComponentTheree = () => {
  return (
    <div>
      <h1>This component There</h1>
      <courseContext.Consumer>
        {({ course }) => <p>Course : {course}</p>}
      </courseContext.Consumer>
    </div>
  );
};

export default ComponentTheree;
