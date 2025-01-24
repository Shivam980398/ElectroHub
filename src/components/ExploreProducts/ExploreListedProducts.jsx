import React, { useState } from "react";
import style from "./ExploreListedProducts.module.css";
import { menu_item } from "../../assets/frontend_assets/assets";
import BrandDisplay from "../BrandDisplay/BrandDisplay";
const ExploreListedItems = ({ category, setCategory }) => {
  // const [items, setItems] = useState("All");
  return (
    <div>
      <div className={style.exploreList}>
        <h1>Explore Products or Devices </h1>
        <div className={style.exploreListItem}>
          {menu_item.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.name ? "All" : item.name
                  )
                }
                key={index}
                className={style.exploreListItemMenu}
              >
                <img
                  className={` ${category === item.name ? style.active : ""}`}
                  src={item.image}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <BrandDisplay
        category={category}
        setCategory={setCategory}
      ></BrandDisplay>
      <hr />
    </div>
  );
};

export default ExploreListedItems;
