import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { PutMain,GetInfor,PutAva } from "../../api/user.service";

function SetMainInformation() {
  let user = JSON.parse(sessionStorage["response"]);
  console.log(user.avatar);
  let Image = user.avatar;
  const [Img, setImg] = useState("");
  const [Name, setName] = useState(user.fullname);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  useEffect(
    ()=>{
      let temp = FirstName + " " + LastName;
      setName(temp);
    },
  [FirstName,LastName]);
  
  const UpdateIntro = async () => {
    try {
      let response = await PutMain.putmain({
        firstname : FirstName,
        lastname : LastName,
        email : "",
        phone : ""
      });
      console.log(response);
      callinfor();
    } catch {
      alert("session login expired");
      window.location.replace("/");
    }
  };

  const UpdateAva = async () => {
    let formdata = new FormData();
      console.log(Img);
      formdata.append("file","1");
      console.log(formdata);
    try {   
      let response = await PutAva.putava({
        formdata
      });
      console.log(response);
      callinfor();
    } catch {
      alert("session login expired");
      window.location.replace("/");
    }
  };

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

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div>
          <img src={Image} alt="error" className={styles.image} />
        </div>
        <input
          className={styles.changedata}
          type = "file"
          onChange={(e) => setImg(e.target.value)}
        ></input>
        <button onClick={UpdateAva}>update avatar</button>
        <div className={styles.fullname} >{Name}</div>
        <input
          className={styles.changedata}
          value={FirstName}
          placeholder="firstname"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          className={styles.changedata}
          value={LastName}
          placeholder="lastname"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <button onClick={UpdateIntro}>update</button>
      </div>
    </div>
  );
}

export default SetMainInformation;
