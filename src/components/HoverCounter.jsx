import withCounter from "./HOC/withCounter";

const HoverCounter = ({ counter, handleIncrement }) => {
  return (
    <div>
      <h1 onMouseOver={handleIncrement}>Hovered {counter} times</h1>
    </div>
  );
};

export default withCounter(HoverCounter);
