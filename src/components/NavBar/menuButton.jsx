import React from "react";
import { GiBoomerangCross } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import styles from "./Navbar.module.css";
// import { useState } from "react";

const menuButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <div id="image1" className={styles.crossIconContainer}>
            <GiBoomerangCross className={styles.crossIcon} />{" "}
          </div>
        ) : (
          <div id="image1" className={styles.crossIconContainer}>
            <IoMenuOutline className={styles.crossIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default menuButton;
