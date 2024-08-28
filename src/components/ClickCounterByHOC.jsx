import withCounter from "./HOC/withCounter";

const ClickCounterByHOC = ({ counter, handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>clicked {counter} times</button>
    </div>
  );
};

export default withCounter(ClickCounterByHOC);
