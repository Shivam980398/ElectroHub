import React, { useState } from "react";
import style from "../Products/Products.module.css";
import styles from "../CartItem/cart.module.css";
import { useAuth } from "../../context/AuthContext";
import { _colorExp } from "gsap/gsap-core";
const ProductItem = ({ filteredProducts, cart, addToCart, removeFromCart }) => {
  const { isAuthenticated } = useAuth();
  const [expanded, setExpanded] = useState({});
  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div>
      <div className={style.Products}>
        {filteredProducts.map((item, index) => {
          const isExpanded = expanded[item._id];

          const shortText =
            item.description.length > 80
              ? item.description.slice(0, 80) + "..."
              : item.description;
          return (
            <div
              key={index}
              className={`${style.ProductsItem} appear-animation1`}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className={styles.cartItemPrice} style={{ minHeight: "70px" }}>
                {isExpanded ? item.description : shortText}
                {item.description.length > 80 && (
                  <span
                    onClick={() => toggleReadMore(item._id)}
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      marginLeft: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {isExpanded ? " Read Less" : " Read More"}
                  </span>
                )}
              </p>
              {cart.some((p) => p._id === item._id) ? (
                <button onClick={() => removeFromCart(item)}>
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    isAuthenticated
                      ? addToCart(item)
                      : alert("Please log in to add items to the cart.");
                  }}
                >
                  {" "}
                  <span style={{ color: "green" }}>₹ {item.price}</span>
                  <br />
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductItem;
