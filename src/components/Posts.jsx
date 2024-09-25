import axios from "axios";
import { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      <h2>Posts List</h2>
    </div>
  );
};

export default Posts;
