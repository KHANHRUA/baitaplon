import styles from "./styles.module.css";
import { useEffect, useState, React } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GetPost, LikePost } from "../../api/user.service";

function Home() {
  let a = JSON.parse(sessionStorage["post"]);
  let user = a.news;
  const starter = user;
  const [List, setList] = useState(starter);
  const [Page, setPage] = useState(0);
  const TakeLike = (id) => {
    let temp = List;
    if(temp[id].statuslike){
      temp[id].likes = temp[id].likes -1;
    }
    else{
      temp[id].likes = temp[id].likes +1;
    }
    temp[id].statuslike = !temp[id].statuslike;
    console.log(temp[id].likes);
    console.log(temp[id].statuslike);
    setList(temp);
    sendlike(id);
  };

  const sendlike = async (id) => {
    try {
      let response = await LikePost.likepost({
        Authorization: "Bearer " + sessionStorage["jwtToken"],
      },id);
      
      callpost();
    } catch {
      alert("false");
    }
  }

  const callpost = async () => {
    try {
      let response = await GetPost.getpost({
        Authorization: "Bearer " + sessionStorage["jwtToken"],
      });
      sessionStorage.setItem("post", JSON.stringify(response.data));
      console.log(response);
      window.location.replace("/");
      window.location.replace("/home");
    } catch {
      alert("false");
    }
  };
  
  useEffect(() => {
    console.log(List);
  }, []);

  useEffect(() => {(
     async ()=>{
        let response = await GetPost.getpost({
          Authorization: "Bearer " + sessionStorage["jwtToken"],
        });
        if(Page !== 0){
          user = user.concat(response.data.news);
        }
        console.log(user);
        setList(user);
        return;
    })();
  },[Page]);

  const scrollToEnd = () => {
    console.log(Page);
    setPage(Page+1);
  }

  window.onscroll = function () {
    if(window.scrollY + window.innerHeight >= 
      document.documentElement.scrollHeight){
        scrollToEnd()
      }
      setTimeout(10000);
  };

  return (
    <div className={styles.all}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.containerpost}>
          <div>
            {List.map((item, temp) => {
                return (
                  <div className={styles.post}>
                    <div className={styles.nameandava}>
                      <img
                        src={item.avatar}
                        alt="errorimg"
                        className={styles.avatar}
                      />
                      <div className={styles.name}>{item.creator}</div>
                    </div>
                    {item.urlimage !== null ? (
                      <div>
                        <div className={styles.content}>{item.content}</div>
                        <div className={styles.title}>{item.title}</div>
                        <img
                          src={item.urlimage}
                          alt="errorimg"
                          className={styles.img}
                        />
                      </div>
                    ) : (
                      <div className={styles.title}>
                        <div>{item.title}</div>
                      </div>
                    )}
                    <div
                      className={styles.icons}
                      onClick={() => TakeLike(temp)}
                    >
                      <div className={styles.likec}>{item.likes}</div>
                      {item.statuslike ? (
                        <svg data-testid="FavoriteIcon">
                          <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
                        </svg>
                      ) : (
                        <svg data-testid="FavoriteIcon">
                          <FavoriteIcon sx={{ color: "white", fontSize: 20 }} />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
