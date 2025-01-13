// import React from "react";
// import styles from "./ProductDetails.module.css";
// import { useNavigate } from "react-router-dom";
// // Import CSS modul

// const ProductDetails = ({ product, recommendedProducts }) => {
//   // const navigate = useNavigate();
//   const handleBack = () => {
//     // You might want to scroll back to the top of the page or trigger other actions here
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div>
//       <div className={styles.productDetails}>
//         <div className={styles.div}>
//           <div> </div>

//           <div>
//             {" "}
//             <img src={product.image} alt={product.name} />{" "}
//           </div>

//           <div>
//             {" "}
//             <img src={product.image} alt={product.name} />{" "}
//           </div>

//           <div>
//             {" "}
//             <img src={product.image} alt={product.name} />{" "}
//           </div>
//         </div>
//         <div>
//           {" "}
//           <img src={product.image} alt={product.name} />
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>{product.price}</p>
//         </div>
//       </div>
//       <hr />
//       <h2>Recommended Products</h2>
//       {recommendedProducts.length > 0 ? (
//         <div className={styles.recommendedProducts}>
//           {recommendedProducts.map((item) => (
//             <div key={item.id}>
//               <img src={item.image} alt={item.name} />
//               <h3>{item.name}</h3>
//               <p>{item.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No recommendations found.</p>
//       )}
//       <button onClick={handleBack}>Back to Products</button>
//     </div>
//   );
// };

// export default ProductDetails;
