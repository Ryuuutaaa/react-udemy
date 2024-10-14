import UseList from "./HOOKS/UseList";

const url = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  loading: true,
  posts: [],
  error: "",
};

const PostListWithCustomHooks = () => {
  const state = UseList(url, initialState);

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

export default PostListWithCustomHooks;
