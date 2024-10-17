import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("order-confirmation");
  };

  return (
    <div>
      <h1>this home </h1>
      <button onClick={handleNavigate}>Place order this</button>
    </div>
  );
};

export default Home;
