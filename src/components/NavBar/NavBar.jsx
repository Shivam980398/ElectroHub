import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";

const NavBar = ({ setDisplayLogin }) => {
  const navlinks = ["Home", "About Us", "Cart", "Contact Us"];
  const [isActive, setActive] = useState("Home");

  return (
    <div>
      <div className={styles.navBar}>
        <Link className={styles.label} to={"/"}>
          ElectroHub
        </Link>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            placeholder="Search Ur need "
          />
          <button className={styles.search_icon}>search</button>
        </div>
        <ul className={styles.navLinks}>
          {/* Use map for cleaner and more maintainable code */}
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
              </Link>
            </li>
          ))}
          <button
            type="button"
            onClick={() => setDisplayLogin(true)}
            className={styles.search_icon}
          >
            SignIn
          </button>
        </ul>
        <div className={styles.menu}>
          <img id="image" src={assets.menubutton} alt="MENU" />
        </div>
      </div>
    </div>
  );
};

// Helper function to simplify path logic
function getNavLinkPath(navlink) {
  switch (navlink) {
    case "Home":
      return "/";
    case "About Us":
      return "/About";
    default:
      return `/${navlink.toLowerCase()}`;
  }
}

export default NavBar;
