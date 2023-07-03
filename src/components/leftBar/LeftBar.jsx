import React from "react";
import "./leftBar.scss";

import Friends from "../../assets/download.png";
import Groups from "../../assets/dsc_7900_copy_0.png";
import Market from "../../assets/download (13).png";
import Watch from "../../assets/500x500.png";
import Events from "../../assets/images (1).png";

import Gallery from "../../assets/download (1).png";
import Videos from "../../assets/video-editing-software-audio-mixers-music-dj.jpg";
import Messages from "../../assets/images (3).jpeg";

const LeftBar = () => {
  const userImage =
    "https://lh3.googleusercontent.com/a/AAcHTtefq0kzEb6ZGcOzyWzDinKC9ZoP2ppqVue3im2b8agC2a8=s360-c-no"; // Replace "path_to_user_image.jpg" with the actual image path

  const Guitar =
    "https://assets.yousician.com/app/uploads/2022/05/05130122/yousician-educational-photography-21-1024x683.jpg.webp";
  const Piano =
    "https://imgs.classicfm.com/images/7443?width=5376&crop=4_3&signature=tqN2W8Mh7ex8azkzloa3_IbPytA=";
  const Violin =
    "https://musicindustryhowtoimages.s3.amazonaws.com/wp-content/uploads/2019/10/13233105/piano-vs-violin.jpg";
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={userImage} alt="" />
            <span>Abdulraof Mattur</span>
          </div>
          <div className="item">
            <img src={Events} alt="" />
            <span>Followers</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Images</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Shorts</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Artists</span>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Jordanian artists</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Lebanese artists</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Egyptian artists</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Iraqi artists</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Musical instruments</span>
          <div className="item">
            <img src={Guitar} alt="" />
            <span>Guitar</span>
          </div>
          <div className="item">
            <img src={Piano} alt="" />
            <span>Piano</span>
          </div>
          <div className="item">
            <img src={Violin} alt="" />
            <span>Violin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
