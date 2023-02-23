import React, { useState } from "react";
import styles from "./styles.module.css";
import khanh from "./khanh.json";
import cong from "./cong.json";
import vinh from "./vinh.json";
import hoang from "./hoang.json";
import thang from "./pthang.json";


function Profile() {
  const [Profile, setProfile] = useState(khanh);
  const callpost = (temp) =>{
    console.log("aaaa");
    return(
      <div className={styles.post}>
        <div className={styles.nameandava}>
          <img
            src={Profile.avatar}
            alt="errorimg"
            className={styles.avatar1}
          />
          <div className={styles.name1}>{Profile.name}</div>
        </div>
        <img src={temp.img} alt="errorimg" className={styles.img1} />
      </div>
    )
  }
  const allpost = () =>{
    const a = [];
    for(let i = 0;i< Profile.post.length;i++)
    {
      a.push(callpost(Profile.post[i]))
    }
    return(
      a
    )
  }
  const handleClick = () => {
    setProfile(khanh);
  };
  const handleClick1 = () => {
    setProfile(cong);
  };
  const handleClick2 = () => {
    setProfile(vinh);
  };
  const handleClick3 = () => {
    setProfile(hoang);
  };
  const handleClick4 = () => {
    setProfile(thang);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.avatarborder}>
            <img src={Profile.avatar} alt="avatar" className={styles.avatar} />
          </div>
        </div>
        <div className={styles.name}>
          <div>{Profile.name}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.infor}>Ngày sinh: {Profile.dateofbirth}</div>
          <div className={styles.infor}>Quê quán: {Profile.hometown}</div>
          <div className={styles.infor}>Đang học tại: {Profile.school}</div>
          <div className={styles.infor}>Nghành: {Profile.branch}</div>
        </div>
        <div className={styles.link}>
          <button className={styles.button} onClick={handleClick}>
            khánh
          </button>
          <button className={styles.button} onClick={handleClick1}>
            Công
          </button>
          <button className={styles.button} onClick={handleClick2}>
            Vinh
          </button>
          <button className={styles.button} onClick={handleClick3}>
            Hoàng
          </button>
          <button className={styles.button} onClick={handleClick4}>
            Thắng
          </button>
        </div>
        <div className={styles.allpost}>
          {allpost()}
        </div>
      </div>
    </div>
  );
}
export default Profile;
