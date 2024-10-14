import axios from "axios";
import { useEffect, useState } from "react";

const PostListWithoutReducer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostListWithoutReducer;
