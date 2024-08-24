const List = () => {
  const items = ["react", "angular", "vue", "svelte"];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
