import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";

const NavBar = ({ setDisplayLogin, isActive, setActive }) => {
  const navlinks = ["Home", "About Us", "Cart", "Contact Us"];
  const { searchTerm, handleSearch } = useContext(SearchContext);
  // const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    // setSearchTerm(event.target.value);
    handleSearch(event.target.value); // Pass search term to parent component
  };

  return (
    <div>
      <div className={styles.navBar}>
        {/* Logo */}
        <Link className={styles.label} to={"/"}>
          ElectroHub
        </Link>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            placeholder="Search Ur need "
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className={styles.search_icon}>search</button>
        </div>
        {/* Maping links name object as unorder list */}
        <ul className={styles.navLinks}>
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
                {navlink} {/*This display links name like home about us */}
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
