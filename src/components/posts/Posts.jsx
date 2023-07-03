import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Nassif Zeytoun",
      userId: 1,
      profilePic:
        "https://lastfm.freetls.fastly.net/i/u/ar0/0e7a15ab950d7cdc8d6bc3092ed298af.jpg",
      desc: "Ready for my new song !! soon 🤍🎶",
      img: "https://pbs.twimg.com/media/FziSYS2aEAExNuP?format=jpg&name=large",
    },
    {
      id: 2,
      name: "Adam",
      userId: 2,
      profilePic:
        "https://i1.sndcdn.com/artworks-000481960251-f1nj8b-t500x500.jpg",
      desc: "Hey everyone! Just wanted to drop in and let you know how much I miss all of you. The connection we share when I'm on stage, feeling your energy and hearing your cheers, is something I treasure deeply. 🎵❤️ I can't wait for the day when we can reunite and party like never before! Stay tuned because we've got something special in the works. Let's make it a night to remember when we come together again! 🎊 Sending all my love and gratitude to each and every one of you. You're the reason I sing my heart out. See you soon!  `adam`  🎶💫",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
