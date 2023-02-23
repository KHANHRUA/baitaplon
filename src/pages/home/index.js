import styles from "./styles.module.css";
import khanh from "../profile/khanh.json";

function Home() {
  const callpost = (temp) =>{
    console.log("aaaa");
    return(
      <div className={styles.post}>
        <div className={styles.nameandava}>
          <img
            src={khanh.avatar}
            alt="errorimg"
            className={styles.avatar}
          />
          <div className={styles.name}>{khanh.name}</div>
        </div>
        <img src={temp.img} alt="errorimg" className={styles.img} />
      </div>
    )
  }
  const allpost = () =>{
    const a = [];
    for(let i = 0;i< khanh.post.length;i++)
    {
      a.push(callpost(khanh.post[i]))
    }
    return(
      a
    )
  }
  return (
    <div className={styles.all}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.containerpost}>
          <div> {allpost()}</div>
          <div className={styles.post}>
            <div className={styles.nameandava}>
              <img
                src={khanh.avatar}
                alt="errorimg"
                className={styles.avatar}
              />
              <div className={styles.name}>{khanh.name}</div>
            </div>
            <img src={khanh.avatar} alt="errorimg" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
