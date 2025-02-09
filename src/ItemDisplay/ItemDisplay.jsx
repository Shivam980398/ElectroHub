import React from "react";
import style from "./ItemDisplay.module.css";
import { useContext } from "react";
import { StoreItem } from "../context/StoreItem";
import Products from "../components/Products/Products";
// import ProductDetails from "../components/ExploreProducts/ProductDetails";

const ItemDisplay = ({ type, settype, category, setCategory, searchTerm }) => {
  const { menu_products } = useContext(StoreItem);

  return (
    <div className={style.ItemDisplay}>
      <hr />
      <Products
        type={type}
        settype={settype}
        category={category}
        setCategory={setCategory}
        menu_products={menu_products}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default ItemDisplay;
