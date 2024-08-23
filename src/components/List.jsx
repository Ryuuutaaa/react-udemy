const List = () => {
  const items = ["react", "angular", "vue", "svelte"];
  return (
    <div>
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default List;
