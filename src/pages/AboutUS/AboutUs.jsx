import React from "react";
import style from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <h1>About Us</h1>
      <p>
        We are passionate about providing you with the latest and greatest
        electronic devices. ELECTROHUB was founded in 2024 with a mission to
        make high-quality electronics accessible to everyone. Our team of
        experts is dedicated to sourcing the best products from around the world
        and offering them at competitive prices.
      </p>
      <p>
        We believe that electronics should enrich your life and help you stay
        connected, informed, and entertained. Whether you're a tech enthusiast,
        a student, a professional, or simply someone who enjoys using
        electronics to make your life easier, we have something for you.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>
          <b>Quality:</b> We only offer products that meet our high standards
          for quality and performance.
        </li>
        <li>
          <b>Selection:</b> We offer a wide variety of electronics to meet your
          needs and budget.
        </li>
        <li>
          <b>Service:</b> We are committed to providing exceptional customer
          service before, during, and after your purchase.
        </li>
        <li>
          <b> Innovation:</b> We are always looking for new and innovative
          products to bring to our customers.
        </li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        We value your feedback and questions. Please feel free to contact us
        using the following methods:
      </p>
      <ul>
        <li>Email: Electrohub@gmail.com</li>
        <li>Phone: 987654321</li>
        <li>
          Social Media: Follow us on [List social media platforms, e.g.,
          Facebook, Twitter] ([Links to social media pages (optional)])
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
