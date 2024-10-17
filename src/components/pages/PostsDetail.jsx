import { useParams } from "react-router-dom";

const PostsDetail = () => {
  const param = useParams();
  const postId = param.postId;

  return <div>Posts {postId} detail </div>;
};

export default PostsDetail;
