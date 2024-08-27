import withCounter from "./HOC/withCounter";

const ClickCounter = ({ counter, handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>clicked {counter} times</button>
    </div>
  );
};

export default withCounter(ClickCounter);
