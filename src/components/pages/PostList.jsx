import { useSearchParams } from "react-router-dom";

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");
  console.log(filterValue);

  return (
    <div>
      <h2>{filterValue === "latest" ? "Latest post list" : "all post list"}</h2>
      <h1>Post List</h1>
      <p>Post List 1</p>
      <p>Post List 2</p>
      <p>Post List 3</p>
      <button onClick={() => setSearchParams({ filter: "latest" })}>
        Latest post
      </button>
      <button onClick={() => setSearchParams({})}>Reset</button>
    </div>
  );
};

export default PostList;
