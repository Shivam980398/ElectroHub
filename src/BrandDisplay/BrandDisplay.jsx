import React, { useState } from "react";
import style from "./BrandDisplay.module.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import BrandList from "../components/BrandList/BrandList";
// import Products from "../components/ExploreProducts/Products";
// import { menu_item } from "../assets/frontend_assets/assets";
const BrandsDisplay = ({ category, setCategory, searchTerm }) => {
  const [type, settype] = useState("All");
  const { menu_list } = useContext(StoreContext);

  return (
    <div className={style.BrandsDisplay}>
      <h2>Popular Brands</h2>
      <BrandList
        category={category}
        setCategory={setCategory}
        menu_list={menu_list}
        type={type}
        settype={settype}
        searchTerm={searchTerm}
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

export default BrandsDisplay;
