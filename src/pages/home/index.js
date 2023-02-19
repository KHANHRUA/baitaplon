import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerpost}>
        <div className={styles.post}>
          <div className={styles.avatar}>
            <div className={styles.name}>username</div>
          </div>
          <div className={styles.img}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
