const Button = ({ handleClick, children }) => {
  console.log(`rendering ${children}`);
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
