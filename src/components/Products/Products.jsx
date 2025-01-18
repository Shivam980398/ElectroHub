import React from "react";
// import style from "./Products.module.css";
import { menu_products } from "../../assets/frontend_assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { add, remove } from "../redux/slices/CartSlice";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";

const Products = ({ type = "All", category = "All" }) => {
  const { searchTerm } = useContext(SearchContext);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Function for adding item to cart
  const addToCart = (item) => {
    // console.log("Adding item to cart", item._id);
    dispatch(add(item));
    toast.success(`${item.description} Added to cart`, {
      position: "top-center",
      autoClose: 5000, // Duration in milliseconds
      closeButton: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  // Function for removing item from cart
  const removeFromCart = (item) => {
    dispatch(remove(item._id));
    // console.log("Removing item with ID:", item._id);
    toast.error("Item removed from cart", {
      position: "top-center",
      autoClose: 5000, // Duration in milliseconds
      closeButton: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  //Return the filtered products based on type and category
  const filteredProducts = menu_products.filter((item) => {
    return (
      // item &&
      (type === "All" || item.type === type) &&
      (category === "All" || item.category.includes(category)) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.price.toString().includes(searchTerm))
      // item._id.includes(searchTerm)
    );
  });

  return (
    <div>
      <ProductItem
        filteredProducts={filteredProducts}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default Products;
