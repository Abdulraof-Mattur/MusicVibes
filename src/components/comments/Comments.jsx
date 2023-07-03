import "./comments.scss";

const Comments = () => {
  const userImage =
    "https://lh3.googleusercontent.com/a/AAcHTtefq0kzEb6ZGcOzyWzDinKC9ZoP2ppqVue3im2b8agC2a8=s360-c-no";
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "We can't wait for it , will be amazing 😍❤️👌",
      name: "Ali yousef",
      userId: 1,
      profilePicture:
        "https://fashionmafia.sk/34511-large_default/tshirt-big-square-man-16841.jpg",
    },
    {
      id: 2,
      desc: "We need you to sing in another language because your voice is amazing 🤍🎶",
      name: "Sara Omar",
      userId: 2,
      profilePicture:
        "https://theadultman.com/wp-content/uploads/2021/06/High-value-woman_-Attractive-brunette-girl-in-yellow-top-smiling-.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={userImage} alt="" />
        <input type="text" placeholder="write a comment" />
        <button className="log">Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
