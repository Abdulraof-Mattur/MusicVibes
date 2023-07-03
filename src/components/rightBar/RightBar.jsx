import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://etbilarabi.com/sites/default/files/styles/article_landing/public/2021-09/241313260_103779205334037_4809637287240078887_n.jpg?itok=OgX9PeJf"
                alt=""
              />
              <span>Hussain Alsalman</span>
            </div>
            <div className="buttons">
              <button className="log">follow</button>
              <button className="reg">dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.ctfassets.net/opz1rk40r4ou/gvDZCTVrUbY8mtUkCrYoW/bd257eb4eeb96c0e9fd9707135e8b0a9/Omar-Al-Abdullat-1575959848286_16eee86e560_large.jpeg?w=1280&q=90&fm=jpg"
                alt=""
              />
              <span>omar alabdallat</span>
            </div>
            <div className="buttons">
              <button className="log">follow</button>
              <button className="reg">dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i1.sndcdn.com/artworks-B0qkUQqSsmOSgxQa-a2uk0A-t500x500.jpg"
                alt=""
              />
              <p>
                <span>Adham Nabilsi</span> changed their cover picture
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://yt3.googleusercontent.com/QM3vFPJ20xRBX2sxxWukv1Mzc9Ij96N4W1vrUw7671mO9Vq_NYj3CrrDCG71N9RDDnUwXLF3cw=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <p>
                <span>Mohamad Majzoub</span> changed their cover picture
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media0021.elcinema.com/uploads/_315x420_d7c721f80649f4d22cc48e7a73d13a9dc76fcd5fe8253b6d46ecba31fa2b9f9c.jpg"
                alt=""
              />
              <p>
                <span>Adam</span> changed their cover picture
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.scdn.co/image/ab6761610000e5eb1efdae8636424c81210e26c0"
                alt=""
              />
              <p>
                <span>george wassouf</span> changed their cover picture
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://yt3.googleusercontent.com/OhCHPF2xqzcoOzP6kIeqYi3h-y3zsM8znS1Cq0EuR3j21UAmtfWaSExYAi5JcGmH1T2lCJ4eDLw=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div className="online" />
              <span>Sattar saad</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://lastfm.freetls.fastly.net/i/u/ar0/de42c5829fca00802230be06b60d5f23.jpg"
                alt=""
              />
              <div className="online" />
              <span>Saif Nabeel</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.scdn.co/image/ab67616100005174ae9c8d8bb91a1030ef1bc223"
                alt=""
              />
              <div className="online" />
              <span>Amr Diab</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.unenvironment.org/s3fs-public/people/2017-11/alama_ragheb_gwa.PNG?VersionId=null"
                alt=""
              />
              <div className="online" />
              <span>Ragheb Alama</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
