const SubComponnet = ({ children }) => {
  console.log(children);
  return (
    <div>
      <p>Thsi sub componnets</p>
      <span>{children}</span>
    </div>
  );
};

export default SubComponnet;
