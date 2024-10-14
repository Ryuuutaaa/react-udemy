import axios from "axios";
import { useEffect, useState } from "react";

const PostListWithoutReducer = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts List</h2>
      {loading ? (
        <h3>Loading....</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <br />
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default PostListWithoutReducer;
