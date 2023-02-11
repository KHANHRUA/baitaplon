import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

function Header() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className={styles.container}>
      <Link to="/home">
        <div className={styles.logo}></div>
      </Link>
      <div className={styles.navi}>
        <button className={styles.buttonnav}>
          <svg data-testid="HomeIcon" className={styles.icons}>
            <HomeIcon />
          </svg>
          Home
        </button>
        <button className={styles.buttonnav}>
          <svg data-testid="SearchIcon" className={styles.icons}>
            <SearchIcon />
          </svg>
          Search
        </button>
        <button className={styles.buttonnav}>
          <svg data-testid="NotificationsActiveIcon" className={styles.icons}>
            <NotificationsActiveIcon />
          </svg>
          Notification
        </button>
        <button className={styles.buttonnav}>Profile</button>
      </div>
      <div className={styles.endheader}>
        <div>
          {state && (
            <button
              className={
                state === false
                  ? styles.buttonlogoutclose
                  : styles.buttonlogoutopen
              }
            >
              <svg data-testid="LogoutIcon" className={styles.icons}>
                <LogoutIcon color="primary" />
              </svg>
              Log out
            </button>
          )}
        </div>
        <button className={styles.buttonsetting} onClick={handleClick}>
          <svg
            data-testid="SettingsIcon"
            className={state === false ? styles.close : styles.open}
          >
            <SettingsIcon color="inherit" />
          </svg>
          Setting
        </button>
      </div>
    </div>
  );
}

export default Header;
