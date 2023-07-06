import React from "react";
import axios from "axios";
import { useEffect, createContext, useState } from "react";
export const funContext = createContext();
export function FunContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts();
  }, []);

  function getAllPosts() {
    fetch("http://localhost:9000/post")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }
  const DeletePost = (id) => {
    axios.delete(`http://localhost:9000/post/${id}`);
    getAllPosts();
  };

  const UpdatePost = (id, NewPost) => {
    axios.put(`http://localhost:9000/post/${id}`, {
      ...posts.find((post) => post.id === id),
      text: NewPost
    });
    getAllPosts();
  };
  function AddComment(id, comment) {
    fetch(`http://localhost:9000/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const updatedComments = [...data.comment, comment];
        axios.put(`http://localhost:9000/post/${id}`, {
          ...posts.find((post) => post.id === id),
          comment: updatedComments
        });
        getAllPosts();
      });
  }

  const addPost = (postText) => {
    axios.post("http://localhost:9000/post", {
      text: postText,
      comment: [],
      PostDate: new Date().toLocaleDateString()
    });

    getAllPosts();
  };
  const value = {
    AddComment,
    UpdatePost,
    DeletePost,
    addPost,
    posts
  };
  return <funContext.Provider value={value}> {children}</funContext.Provider>;
}
