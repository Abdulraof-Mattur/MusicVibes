import React, { useState, useContext } from "react";
import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import axios from "axios";
import { funContext } from "../../context/FunContextProvider";
function Share() {
  const { addPost } = useContext(funContext);

  const userImage =
    "https://lh3.googleusercontent.com/a/AAcHTtefq0kzEb6ZGcOzyWzDinKC9ZoP2ppqVue3im2b8agC2a8=s360-c-no";

  const [postText, setPostText] = useState("");
  const handleShare = (postText) => {
    // Perform the share functionality with the post text
    addPost(postText);
    console.log("Post shared:", postText);

    // Reset the input field
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={userImage} alt="User" />
          <input
            type="text"
            placeholder="What's on your mind Abdulraof Mattur?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button className="log" onClick={() => handleShare(postText)}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Share;
