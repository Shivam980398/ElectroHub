import React from "react";
import style from "../Products/Products.module.css";
const ProductItem = ({ filteredProducts, cart, addToCart, removeFromCart }) => {
  return (
    <div>
      <div className={style.exploreProducts}>
        {filteredProducts.map((item, index) => (
          <div key={index} className={style.exploreProductsMenu}>
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
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
