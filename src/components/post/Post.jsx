import { useState, useEffect } from "react";
import axios from "axios";
import "./post.scss";
import { funContext } from "../../context/FunContextProvider";
import { useContext } from "react";

const Post = () => {
  const { UpdatePost, AddComment, posts, DeletePost } = useContext(funContext);
  const [comment, setComment] = useState("");
  const [editModes, setEditModes] = useState({});
  const [newEdit, setnewEdit] = useState();

  const handleComment = (id, comment) => {
    AddComment(id, comment);
  };

  const handleDelete = (id) => {
    DeletePost(id);
  };

  const handleUpdate = (id, newPost) => {
    UpdatePost(id, newPost);
    setEditModes((prevModes) => ({
      ...prevModes,
      [id]: false,
    }));
  };

  const setEditMode = (id, mode) => {
    setEditModes((prevModes) => ({
      ...prevModes,
      [id]: mode,
    }));
  };

  return (
    <>
      {posts.map((post) => (
        <div className="content_post" key={post.id}>
          {!editModes[post.id] ? (
            <>
              <div className="time_post">
                <p style={{ color: "white", fontWeight: "bolder" }}>
                  {post.text}
                </p>{" "}
                <span style={{ color: "white", fontWeight: "bolder" }}>
                  {post.PostDate}
                </span>
              </div>
              <div className="delete_edit">
                <button onClick={() => handleDelete(post.id)}>Delete</button>
                <button onClick={() => setEditMode(post.id, true)}>Edit</button>
              </div>
            </>
          ) : (
            <>
              <input onChange={(e) => setnewEdit(e.target.value)} />
              <button onClick={() => handleUpdate(post.id, newEdit)}>
                Save
              </button>
            </>
          )}
          <div>
            {post.comment.map((comment) => {
              return (
                <p style={{ color: "#6855E0", fontWeight: "bolder" }}>
                  {comment}
                </p>
              );
            })}
          </div>
          <div className="save_comment">
            <input type="text" onChange={(e) => setComment(e.target.value)} />
            <button onClick={() => handleComment(post.id, comment)}>
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
