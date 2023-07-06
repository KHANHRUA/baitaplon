import React, { useState } from "react";
import styles from "./styles.module.css";
import { PutIntro, GetInfor } from "../../api/user.service";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function Profile() {
  let user = JSON.parse(sessionStorage["response"]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [Dateofbirth, setDateofbirth] = useState(user.introduct.birthday);
  const [Hometown, setHometown] = useState(user.introduct.addrees);
  const [School, setSchool] = useState(user.introduct.school);
  const [Enjoy, setEnjoy] = useState(user.introduct.enjoy);

  const callinfor = async () => {
    try {
      let response = await GetInfor.getinfor({
        Authorization: "Bearer " + sessionStorage["jwtToken"],
      });
      sessionStorage.setItem("response", JSON.stringify(response.data));
      console.log(response);
      window.location.replace("/home");
      window.location.replace("/home/profile");
    } catch {
      alert("false");
    }
  };

  const UpdateIntro = async () => {
    try {
      let response = await PutIntro.putintro({
        birthday: Dateofbirth,
        addrees: Hometown,
        school: School,
        enjoy: Enjoy,
        story: "",
        company:""
      });
      console.log(response);
      callinfor();
    } catch {
      alert("session login expired");
      window.location.replace("/");
    }
  };

  const handleopen = () => {
    setIsOpen(!modalIsOpen);
  };

  const callpost = (temp) => {
    return (
      <div className={styles.post}>
        <div className={styles.nameandava}>
          <img src={user.avatar} alt="errorimg" className={styles.avatarP} />
          <div className={styles.nameP}>{user.fullname}</div>
        </div>
        {user.posts[temp].urlimage !== null ? (
          <div>
            <div className={styles.contentP}>{user.posts[temp].content}</div>
            <div className={styles.titleP}>{user.posts[temp].title}</div>
            <img
              src={user.posts[temp].urlimage}
              alt="errorimg"
              className={styles.img}
            />
          </div>
        ) : (
          <div className={styles.title}>
            <div>{user.posts[temp].title}</div>
          </div>
        )}
      </div>
    );
  };

  const allpost = () => {
    // console.log(user.posts.length);
    const a = [];
    for (let i = 0; i < user.posts.length; i++) {
      a.push(callpost(i));
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
                  Enjoy:
                </label>
                <input
                  className={styles.changedata}
                  value={Enjoy}
                  onChange={(e) => setEnjoy(e.target.value)}
                ></input>
              </div>
            </div>
            <button className={styles.updatebutton} onClick={UpdateIntro}>
              update
            </button>
          </div>
        </div>
      )}
      <div>
        <div className={styles.content}>
          <h1 className={styles.persionalinformation}>personal information</h1>
          <div className={styles.infor}>Date of birth: {Dateofbirth}</div>
          <div className={styles.infor}>Hometown: {Hometown}</div>
          <div className={styles.infor}>Study at: {School}</div>
          <div className={styles.infor}>Enjoy: {Enjoy}</div>
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
            <img src={user.avatar} alt="avatar" className={styles.avatar} />
          </div>
        </div>
        <div className={styles.name}>
          <div>
            {user.fullname}
            <Link to="setmain">
              <svg data-testid="EditIcon" className={styles.icons}>
                <EditIcon color="disable" fontSize="small" />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.allpost}>{allpost()}</div>
      </div>
    </div>
  );
}

export default Profile;
