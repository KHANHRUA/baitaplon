import React from "react";
import styles from "./styles.module.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
