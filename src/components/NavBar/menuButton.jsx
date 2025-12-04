import React from "react";
import { GiBoomerangCross } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import styles from "./Navbar.module.css";
// import { useState } from "react";

const menuButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <div id="image1" className={styles.crossIconContainer}>
            <RxCross2 className={styles.crossIcon} />{" "}
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
