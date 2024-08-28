const RenderProps = ({ course }) => {
  return (
    <div>
      <h1>{course(false)}</h1>
    </div>
  );
};

export default RenderProps;
