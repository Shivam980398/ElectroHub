import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import style from "../Products/Products.module.css";
// import { CartSlice } from "../redux/slices/CartSlice";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    console.log("Removing item with ID:", item._id);
    dispatch(remove(item._id));
  };
  return (
    <div className={style.exploreProducts}>
      <div
        // key={itemIndex}
        className={`${style.exploreProductsMenu}`}
        // onClick={() => handleClick(item)}
      >
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>
          {item.description}
          {item.price}
        </p>
        <div onClick={removeFromCart}>
          <MdDelete style={{ color: "black" }} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
