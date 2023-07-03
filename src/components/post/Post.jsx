import { useState, useEffect } from "react";
import axios from "axios";
import Comments from "../comments/Comments";
import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
  const [postToComment, setPostToComment] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9000/post")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  function handleComment(id) {
    fetch(`http://localhost:9000/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPostToComment(data.comment);
        const updatedComments = [...data.comment, comment];
        setPostToComment(updatedComments);
        axios.put(`http://localhost:9000/post/${id}`, {
          ...posts.find((post) => post.id === id),
          comment: updatedComments,
        });
      });
  }

  const liked = false;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.text}</p>
          <span>{post.PostDate}</span>
          <div>
            {post.comment.map((comment) => {
              return <p>{comment}</p>;
            })}
          </div>
          <div>
            <input type="text" onChange={(e) => setComment(e.target.value)} />
            <button onClick={() => handleComment(post.id)}>add comment</button>
          </div>
        </div>
      ))}

      {/* Rest of the code for rendering the post */}
    </>
  );
};

export default Post;
