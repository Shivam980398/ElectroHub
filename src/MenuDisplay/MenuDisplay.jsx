import React, { useState } from "react";
import style from "./MenuDisplay.module.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import MenuItems from "../components/ExploreProducts/BrandList";
// import Products from "../components/ExploreProducts/Products";
// import { menu_item } from "../assets/frontend_assets/assets";
const MenuDisplay = ({ category, setCategory }) => {
  const [type, settype] = useState("All");
  const { menu_list } = useContext(StoreContext);

  return (
    <div className={style.MenuDisplay}>
      <h2>Popular Brands</h2>
      <MenuItems
        category={category}
        setCategory={setCategory}
        menu_list={menu_list}
        type={type}
        settype={settype}
      />
      {/* <Products
        category={category}
        setCategory={setCategory}
        menu_item={menu_item}
        type={type}
        settype={settype}
      /> */}
      {/* Pass props */}
    </div>
  );
};

export default MenuDisplay;
