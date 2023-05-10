import React, { useState } from "react";
import styles from "./styles.module.css";
import { GetInfor } from "../../api/user.service";
import khanh from "./khanh.json";

let profile = khanh;

function Profile() {
  // const token = localStorage.getItem('jwtToken');
  // const headers = {
  //   'Authorization' : 'Bearer ${token}'
  // }
  // const created = async () =>{
  //   let response = await GetInfor.getinfor(
  //     headers
  //   );
  //   profile = response;
  // }
  // created();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState(profile.name);
  const [Dateofbirth, setDateofbirth] = useState(profile.birthday);
  const [Hometown, setHometown] = useState(profile.addrees);
  const [School, setSchool] = useState(profile.school);
  const [Branch, setBranch] = useState(profile.phone);

  const handleopen = () => {
    setIsOpen(!modalIsOpen);
  };

  const callfriend = (temp) => {
    return (
      <div className={styles.friendinformation}>
        <div>
          <img
            src={temp.ava}
            alt="avatar"
            className={styles.friendavatar}
          />
        </div>
        <div className={styles.friendname}>{temp.name}</div>
      </div>
    );
  };
  const allfriend = () => {
    const a = [];
    for (let i = 0; i < profile.friend.length; i++) {
      a.push(callfriend(profile.friend[i]));
    }
    return a;
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
    for (let i = 0; i < profile.post.length; i++) {
      a.push(callpost(profile.post[i]));
    }
    return a;
  };
  return (
    <div className={styles.container}>
      {modalIsOpen && (
        <div className={styles.background}>
          <div className={styles.containmodal}>
            <button className={styles.backbutton} onClick={handleopen}>
              X
            </button>
            <div className={styles.form}>
              <div className={styles.align}>
                <label className={styles.label} htmlFor="name">
                  Full name:
                </label>
                <input
                  className={styles.changedata}
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className={styles.align}>
                <label className={styles.label} htmlFor="dob">
                  Date of birth:
                </label>
                <input
                  className={styles.changedata}
                  value={Dateofbirth}
                  onChange={(e) => setDateofbirth(e.target.value)}
                ></input>
              </div>
              <div className={styles.align}>
                <label className={styles.label} htmlFor="ht">
                  Hometown:
                </label>
                <input
                  className={styles.changedata}
                  value={Hometown}
                  onChange={(e) => setHometown(e.target.value)}
                ></input>
              </div>
              <div className={styles.align}>
                <label className={styles.label} htmlFor="sc">
                  Study at:
                </label>
                <input
                  className={styles.changedata}
                  value={School}
                  onChange={(e) => setSchool(e.target.value)}
                ></input>
              </div>
              <div className={styles.align}>
                <label className={styles.label} htmlFor="br">
                  Major:
                </label>
                <input
                  className={styles.changedata}
                  value={Branch}
                  onChange={(e) => setBranch(e.target.value)}
                ></input>
              </div>
            </div>
            <button className={styles.updatebutton}>update</button>
          </div>
        </div>
      )}
      <div>
        <div className={styles.content}>
          <h1 className={styles.persionalinformation}>personal information</h1>
          <div className={styles.infor}>
            Date of birth: {Dateofbirth}
          </div>
          <div className={styles.infor}>Hometown: {Hometown}</div>
          <div className={styles.infor}>Study at: {School}</div>
          <div className={styles.infor}>Major: {Branch}</div>
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
            <img src={profile.avatar} alt="avatar" className={styles.avatar} />
          </div>
        </div>
        <div className={styles.name}>
          <div>{profile.name}</div>
        </div>
        <div className={styles.allpost}>{allpost()}</div>
      </div>
      <div className={styles.containlist}>
        <div className={styles.listfriend}>
          {allfriend()}
          {/* <div className={styles.friendinformation}>
            <div>
              <img
                src={Profile.avatar}
                alt="avatar"
                className={styles.friendavatar}
              />
            </div>
            <div className={styles.friendname}>{Profile.name}</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
