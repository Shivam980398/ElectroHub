import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";
import { useSelector } from "react-redux";
import Navlink from "./Navlink";
import MenuButton from "./menuButton";

const NavBar = ({ setDisplayLogin, isActive, setActive, login, setLogin }) => {
  const navlinks = ["Home", "About Us", "Cart", "Contact Us"];
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu toggle

  const { searchTerm, handleSearch } = useContext(SearchContext);
  // const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    // setSearchTerm(event.target.value);
    handleSearch(event.target.value); // Pass search term to parent component
  };
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className={styles.navBar}>
        {/* Logo */}
        <Link
          className={`${styles.label} ${styles.list} ${
            isActive === "Home" ? styles.active : ""
          }`}
          to={"/"}
          onClick={
            () => setActive("Home") // Directly update active state to "Home"
          }
        >
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
        <Navlink
          className={styles.navLinks}
          cart={cart}
          getNavLinkPath={getNavLinkPath}
          navlinks={navlinks}
          isActive={isActive}
          setActive={setActive}
          setDisplayLogin={setDisplayLogin}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          login={login}
          setLogin={setLogin}
        />
        <MenuButton
          className={styles.menu}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
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
