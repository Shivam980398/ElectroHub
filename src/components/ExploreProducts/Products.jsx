import React, { useState, useEffect } from "react";
import style from "./Products.module.css";
import { menu_products } from "../../assets/frontend_assets/assets";
// import ProductDetails from "./ProductDetails"; // Import the ProductDetails component

const Products = ({ type, category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState(false);

  // Function to generate recommendations based on selected product type
  const generateRecommendations = (selectedType) => {
    if (!selectedType) return; // Handle no selected product
    const filteredRecommendations = menu_products.filter((item) => {
      // Logic to determine recommended products (e.g., similar type, category, etc.)

      return item.name !== selectedProduct?.name;
    });
    setRecommendedProducts(filteredRecommendations);
  };

  useEffect(() => {
    // Generate recommendations on initial render and on selectedProduct change
    generateRecommendations(selectedProduct?.type);
  }, [selectedProduct]); // Add selectedProduct as a dependency

  const handleClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  // Filter products based on predefined type and category props
  const filteredProducts = menu_products.filter((item) => {
    return (
      (type === "All" || item.type === type) &&
      (category === "All" || item.category === category)
    );
  });

  return (
    <div>
      {/* {showProductDetails ? (
        <ProductDetails
          product={selectedProduct}
          recommendedProducts={recommendedProducts}
        />
      ) : ( */}
      <div className={style.exploreProducts}>
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className={`${style.exploreProductsMenu}`}
            // ${
            //   selectedProduct?.name === item.name ? style.active : ""
            //   }

            onClick={() => handleClick(item)}
          >
            <img
              // className={` ${
              //   type === item.type || type === "All" ? style.active : ""
              // }`}
              src={item.image}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <p>
              {item.description}
              {item.price}
            </p>
            <button onClick={() => (window.location.href = item.link)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
