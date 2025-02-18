import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

import { userDetail } from "../../context/userContext";
import { useAuth } from "../../context/AuthContext";
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

  menuOpen,
  // login,
  // setLogin,
}) => {
  const { setDisplayLogin } = useContext(userDetail);
  const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      logout();
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
      <div>
        {isAuthenticated ? (
          <FaUserCircle
            className="text-6xl text-gray-600 mb-2"
            style={{
              position: "absolute",
              top: "-15px",
              right: "52px",
              height: "20px",
              width: "20px",
              cursor: "pointer",
            }}
          />
        ) : null}
      </div>
      <button
        type="button"
        onClick={isAuthenticated ? handleLogout : () => setDisplayLogin(true)}
        className={`${styles.search_icon}`}
        style={{
          position: "absolute",
          top: "15px",
          right: "40px",
          cursor: "pointer",
        }}
      >
        {isAuthenticated ? "Logout" : "SignIn"}
      </button>
    </ul>
  );
};

export default Navlink;
