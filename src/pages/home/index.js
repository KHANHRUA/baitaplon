import styles from "./styles.module.css";
import khanh from "../profile/khanh.json";
import { useState } from "react";

function Home() {
  const [Like, setLike] = useState([]);
  const [Likecount, setLikecount] = useState([]);
  let changelike = (index) => {
    setLikecount((prev)=>{
      const newArray = [...prev];
      newArray[index].likecount+=1;
      console.log(newArray);
      return newArray;
    })

    // setLike(
    //   Like.map((like) => {
    //     console.log(like.postid);
    //     if (like.postid === temp) {
    //       if(like.like === true)
    //       {
    //         like.like = false;
    //       }
    //       else{
    //         like.like = true;
    //       }
    //     }
    //     return like;
    //   })
    // );
    
  };
  // let changed = (temp)=>{
  //   return Like(temp)
  // }
  const callpost = (temp) => {
    return (
      <div className={styles.post}>
        <div className={styles.nameandava}>
          <img src={khanh.avatar} alt="errorimg" className={styles.avatar} />
          <div className={styles.name}>{khanh.name}</div>
        </div>
        <img src={khanh.post[temp].img} alt="errorimg" className={styles.img} />
        <div className={styles.heart}>
          <button
            className={styles.heartbutton}
            onClick={() => changelike(temp)}
          ></button>
          <div
            className={
              Like[temp].like ? styles.heartleftlike : styles.heartleft
            }
          ></div>
          <div
            className={
              Like[temp].like ? styles.heartrightlike : styles.heartright
            }
          ></div>
        </div>
        <div className={styles.likecount}>
          {Likecount[temp].likecount}
        </div>
      </div>
    );
  };
  const allpost = () => {
    const a = [];
    for (let i = 0; i < khanh.post.length; i++) {
      // setLike([...Like, khanh.post[i].like]);
      Like.push(khanh.post[i]);
      Likecount.push(khanh.post[i]);
      a.push(callpost(i));
    }
    return a;
  };
  return (
    <div className={styles.all}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.containerpost}>
          <div> {allpost()}</div>
          {/* <div className={styles.post}>
            <div className={styles.nameandava}>
              <img
                src={khanh.avatar}
                alt="errorimg"
                className={styles.avatar}
              />
              <div className={styles.name}>{khanh.name}</div>
            </div>
            <img src={khanh.avatar} alt="errorimg" className={styles.img} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
