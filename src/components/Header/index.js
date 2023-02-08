import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.navi}>
        <button>Home</button>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
