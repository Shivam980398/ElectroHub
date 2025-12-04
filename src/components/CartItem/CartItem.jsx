import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import style from "./cart.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    console.log("Removing item with ID:", item._id);
    dispatch(remove(item._id));
  };

  return (
    <div className={style.cartItemWrapper}>
      <div className={style.cartItemCard}>
        <div className={style.cartItemImageBox}>
          <img
            src={item.image}
            alt={item.name}
            className={style.cartItemImage}
          />
        </div>

        <div className={style.cartItemDetails}>
          <h3 className={style.cartItemTitle}>{item.name}</h3>
          <p className={style.cartItemDesc}>{item.description}</p>
          <p className={style.cartItemPrice}>₹ {item.price}</p>
        </div>

        <button className={style.cartDeleteButton} onClick={removeFromCart}>
          <MdDelete size={22} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
