import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>OrderConfirmation</h2>
      <button onClick={handleBack}>Back to home</button>
    </div>
  );
};

export default OrderConfirmation;
