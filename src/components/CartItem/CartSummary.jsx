import React, { useState, useEffect } from "react";
import style from "./cart.module.css";

const CartSummary = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    let total = 0;

    cart.forEach((item) => {
      const price = item.price || 0;
      const qty = item.qty || 1;
      total += price * qty;
    });

    setSubtotal(total);
  }, [cart]);

  useEffect(() => {
    setFinalAmount(subtotal - discount);
  }, [subtotal, discount]);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE10") {
      const calc = subtotal * 0.1;
      setDiscount(calc);
      alert("Coupon Applied Successfully!");
    } else {
      setDiscount(0);
      alert("Invalid Coupon Code!");
    }
  };

  const handleBuyNow = () => {
    alert(`Your total payable amount is ₹${finalAmount}`);
  };

  return (
    <div className={style.summaryCard}>
      <h2 className={style.summaryTitle}>Order Summary</h2>

      <div className={style.sumRow}>
        <span>Subtotal:</span>
        <span>₹ {subtotal.toFixed(2)}</span>
      </div>

      <div className={style.sumRow}>
        <span>Discount:</span>
        <span>- ₹ {discount.toFixed(2)}</span>
      </div>

      {/* Coupon Input */}
      <div className={style.couponBox}>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button onClick={applyCoupon}>Apply</button>
      </div>

      <hr />

      <div className={style.sumRowTotal}>
        <span>Total Payable:</span>
        <span>₹ {finalAmount.toFixed(2)}</span>
      </div>

      <button className={style.buyNowBtn} onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default CartSummary;
