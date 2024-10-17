import { useSearchParams } from "react-router-dom";



const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h1>Post List</h1>
      <p>Post List 1</p>
      <p>Post List 2</p>
      <p>Post List 3</p>
    </div>
  );
};

export default PostList;
