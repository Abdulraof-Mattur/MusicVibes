import { useState, useEffect } from "react";
import axios from "axios";
import "./post.scss";

//قيمه بصير عليها تغيير بشكل مستمر بتخليني اعمل تغيير عالقيمه

// AXIOS مكتبه بقدر اقرأعن طريقها من ال API

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [newEdit, setnewEdit] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/post")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  function handleComment(id) {
    fetch(`http://localhost:9000/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const updatedComments = [...data.comment, comment];
        axios.put(`http://localhost:9000/post/${id}`, {
          ...posts.find((post) => post.id === id),
          comment: updatedComments,
        });
      }); //
  }
  const handelDelete = (id) => {
    axios.delete(`http://localhost:9000/post/${id}`);
  };
  const handelUpdate = (id, NewPost) => {
    axios.put(`http://localhost:9000/post/${id}`, {
      ...posts.find((post) => post.id === id),
      text: NewPost,
    });
    setIsEdit(false);
  };
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          {!isEdit ? (
            <>
              <p style={{ color: "#6855E0" }}>{post.text}</p>
              <button onClick={() => handelDelete(post.id)}>Delete</button>
              <button onClick={() => setIsEdit(true)}>Edit</button>
            </>
          ) : (
            <>
              <input onChange={(e) => setnewEdit(e.target.value)} />
              <button onClick={() => handelUpdate(post.id, newEdit)}>
                Edit
              </button>
            </>
          )}
          <span style={{ color: "#6855E0" }}>{post.PostDate}</span>
          <div>
            {post.comment.map((comment) => {
              return <p style={{ color: "#6855E0" }}>{comment}</p>;
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
