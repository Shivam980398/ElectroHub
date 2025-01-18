import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "../../components/NavBar/Navbar.module.css";

const Cart = ({ isActive, setActive }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item._id} item={item} itemIndex={index} />;
            })}
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is Empty</h1>
          <Link to={"/"}>
            <button
              onClick={() => setActive("Home")} // Directly update active state to "Home"
              className={`${styles.list} ${
                isActive === "Home" ? styles.active : ""
              }`}
            >
              {" "}
              Shop Now{" "}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
