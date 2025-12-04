import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p className={styles.subtitle}>
        Have questions or need help? We’re here to support you.
      </p>

      <div className={styles.contactGrid}>
        {/* LEFT SIDE – DETAILS */}
        <div className={styles.contactDetails}>
          <h2>Get in Touch</h2>
          <p>
            Email: <span>electrohub@gmail.com</span>
          </p>
          <p>
            Phone: <span>9876543210</span>
          </p>
          <p>
            Address: <span>Mumbai, India</span>
          </p>

          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter / X</li>
          </ul>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
