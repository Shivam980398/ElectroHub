import React from "react";
import style from "../Products/Products.module.css";
import { useAuth } from "../../context/AuthContext";
const ProductItem = ({ filteredProducts, cart, addToCart, removeFromCart }) => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <div className={style.exploreProducts}>
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className={`${style.exploreProductsMenu} appear-animation1`}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.description} {item.price}
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
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
