const ClickCounterByRP = ({ counter, handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>click {counter} times</button>
    </div>
  );
};

export default ClickCounterByRP;
