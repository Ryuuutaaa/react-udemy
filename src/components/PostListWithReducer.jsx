import axios from "axios";
import { useEffect, useReducer } from "react";

const PostListWithReducer = () => {
  const initialState = {
    loading: true,
    posts: [],
    error: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SUCCESS":
        return {
          loading: false, // loading harus false setelah data berhasil diambil
          posts: action.data,
          error: "",
        };

      case "ERROR":
        return {
          loading: false,
          posts: [], // typo "potst" diubah menjadi "posts"
          error: action.message,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState); // typo "dispath" diperbaiki menjadi "dispatch"

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch({ type: "SUCCESS", data: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", message: error.message });
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts List</h2>
      {state.loading ? (
        <h3>Loading....</h3>
      ) : state.error ? (
        <h3>{state.error}</h3>
      ) : (
        state.posts.map((post) => (
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

export default PostListWithReducer;
