import React, { useState } from "react";
import style from "./ExploreListedProducts.module.css";
import { menu_item } from "../../assets/frontend_assets/assets";
import MenuDisplay from "../../MenuDisplay/MenuDisplay";
const ExploreItems = ({ category, setCategory, type, settype }) => {
  // const [items, setItems] = useState("All");
  return (
    <div>
      <div className={style.exploreList}>
        <h1>Explore Products </h1>
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
      <MenuDisplay category={category} setCategory={setCategory}></MenuDisplay>
      <hr />
    </div>
  );
};

export default ExploreItems;
