import React, { useState } from "react";
import styles from "./styles.module.css";
import khanh from "./khanh.json";

function Profile() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Profile, setProfile] = useState(khanh);
  const handleopen = () => {
    setIsOpen(true);
  };
  const callpost = (temp) => {
    return (
      <div className={styles.post}>
        <div className={styles.nameandava}>
          <img src={Profile.avatar} alt="errorimg" className={styles.avatar1} />
          <div className={styles.name1}>{Profile.name}</div>
        </div>
        <img src={temp.img} alt="errorimg" className={styles.img1} />
      </div>
    );
  };
  const allpost = () => {
    const a = [];
    for (let i = 0; i < Profile.post.length; i++) {
      a.push(callpost(Profile.post[i]));
    }
    return a;
  };
  return (
    <div className={styles.container}>
      {modalIsOpen && (
        <div>
          <div></div>
        </div>
      )}
      <div>
        <div className={styles.content}>
          <h1 className={styles.persionalinformation}>personal information</h1>
          <div className={styles.infor}>
            Date of birth: {Profile.dateofbirth}
          </div>
          <div className={styles.infor}>Hometown: {Profile.hometown}</div>
          <div className={styles.infor}>Study at: {Profile.school}</div>
          <div className={styles.infor}>Branch: {Profile.branch}</div>
          <div className={styles.containbuttonupdateinfor}>
            <button className={styles.buttonupdateinfor} onClick={handleopen}>
              update information
            </button>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.avatarborder}>
            <img src={Profile.avatar} alt="avatar" className={styles.avatar} />
          </div>
        </div>
        <div className={styles.name}>
          <div>{Profile.name}</div>
        </div>
        <div className={styles.allpost}>{allpost()}</div>
      </div>
      <div className={styles.containlist}>
        <div className={styles.listfriend}>
          <div className={styles.friendinformation}>
            <div>
              <img
                src={Profile.avatar}
                alt="avatar"
                className={styles.friendavatar}
              />
            </div>
            <div className={styles.friendname}>{Profile.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
