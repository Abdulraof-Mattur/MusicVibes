import React from "react";
import "./stories.scss";

const Stories = () => {
  const defaultStories = [
    {
      id: 1,
      name: "Abdulraof Mattur",
      img: "https://lh3.googleusercontent.com/a/AAcHTtefq0kzEb6ZGcOzyWzDinKC9ZoP2ppqVue3im2b8agC2a8=s360-c-no",
    },
    {
      id: 2,
      name: "Nassif Zayton",
      img: "https://lastfm.freetls.fastly.net/i/u/ar0/0e7a15ab950d7cdc8d6bc3092ed298af.jpg",
    },
    {
      id: 3,
      name: "Adham Nabulsi",
      img: "https://i1.sndcdn.com/artworks-B0qkUQqSsmOSgxQa-a2uk0A-t500x500.jpg",
    },
    {
      id: 4,
      name: "Hussain Aljasme",
      img: "https://cdns-images.dzcdn.net/images/artist/b15a88e0bf3f4cd3828ecc3e99773543/500x500.jpg",
    },
    // Add more default stories here
  ];

  return (
    <div className="stories">
      {defaultStories.map((story, index) => (
        <div className="story" key={story.id}>
          <div className="story-image">
            <img src={story.img} alt={story.name} />
          </div>
          <span>{story.name}</span>
          {index === 0 && <button>+</button>}
        </div>
      ))}
    </div>
  );
};

export default Stories;
