import { useState, useEffect } from "react";
import axios from "axios";
import "./post.scss";

//effect  include fetching data, subscribing to events, manipulating the DOM

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [newEdit, setnewEdit] = useState();
  function getData() {
    fetch("http://localhost:9000/post")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }
  useEffect(() => {
    console.log("aaaaa");
    getData();
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
        <div className="content_post" key={post.id}>
          {!isEdit ? (
            <>
              <div className="time_post">
                <p style={{ color: "#6855E0" }}>{post.text}</p>{" "}
                <span style={{ color: "#6855E0" }}>{post.PostDate}</span>
              </div>
              <div className="delete_edit">
                <button onClick={() => handelDelete(post.id)}>Delete</button>
                <button onClick={() => setIsEdit(true)}>Edit</button>
              </div>
            </>
          ) : (
            <>
              <input onChange={(e) => setnewEdit(e.target.value)} />
              <button onClick={() => handelUpdate(post.id, newEdit)}>
                Edit
              </button>
            </>
          )}
          <div>
            {post.comment.map((comment) => {
              return <p style={{ color: "#6855E0" }}>{comment}</p>;
            })}
          </div>
          <div className="save_comment">
            <input type="text" onChange={(e) => setComment(e.target.value)} />
            <button onClick={() => handleComment(post.id)}>add comment</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
