import { useState } from "react";
import style from "./BrandList.module.css";
import { menu_list } from "../../assets/frontend_assets/assets.js";
import Products from "./Products.jsx";
import ItemDisplay from "../../ItemDisplay/ItemDisplay.jsx";

const MenuItems = ({ category, setCategory, type, settype }) => {
  // Use a Set to keep track of displayed brands
  const displayedBrands = new Set();

  return (
    <div>
      <div className={style.exploreMenuItem}>
        {menu_list.map((item, index) => {
          if (
            (category === "All" || category === item.category) &&
            !displayedBrands.has(item.menu_name)
          ) {
            displayedBrands.add(item.menu_name); // Mark this brand as displayed
            return (
              <div
                className={style.exploreMenuItemList}
                key={index}
                onClick={() =>
                  settype((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <img
                  className={` ${type === item.menu_name ? style.active : ""}`}
                  src={item.menu_image}
                  alt={item.menu_name}
                />
                <p>{item.menu_name}</p>
              </div>
            );
          }
          return null; // Skip duplicates
        })}
      </div>
      <ItemDisplay
        type={type}
        settype={settype}
        category={category}
        setCategory={setCategory}
      ></ItemDisplay>
    </div>
  );
};

export default MenuItems;
