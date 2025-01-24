import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
// import { navlinks } from "./NavBar";
// import { getNavLinkPath } from "./NavBar";
// import { menuOpen, setMenuOpen } from "./NavBar";
// import { cart } from "./NavBar";
// import { isActive, setActive } from "./NavBar";
// import { setDisplayLogin } from "./NavBar";
// import { useState } from "react";
// import { useSelector } from "react-redux";

const Navlink = ({
  cart,
  navlinks,
  getNavLinkPath,
  isActive,
  setActive,
  setDisplayLogin,
  menuOpen,
  login,
  setLogin,
}) => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setLogin(false);
      setDisplayLogin(false);
    }
  };
  return (
    <ul className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ""}`}>
      {/* Used map so that no need to style each links */}
      {navlinks.map((navlink, index) => (
        <li
          key={navlink}
          className={`${styles.list} ${
            isActive === navlink ? styles.active : ""
          }`}
          onClick={() => setActive(navlink)}
        >
          <Link className={styles.nav} to={getNavLinkPath(navlink)}>
            {navlink}
            {/*This display links name like home about us */}
            {navlink === "Cart" ? (
              cart.length > 0 && (
                <span className={styles.cart_count}>{cart.length}</span>
              )
            ) : (
              <> </>
            )}
          </Link>
        </li>
      ))}
      <button
        type="button"
        onClick={login ? handleLogout : () => setDisplayLogin(true)}
        className={styles.search_icon}
      >
        {login ? "Logout" : "SignIn"}
      </button>
    </ul>
  );
};

export default Navlink;
