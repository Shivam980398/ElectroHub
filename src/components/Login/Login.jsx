import React, { useState } from "react";
import style from "./Login.module.css";
import { assets } from "../../assets/frontend_assets/assets";
const Login = ({ setDisplayLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className={style.loginPanel}>
      <form className={style.loginPanelContainer}>
        <div className={style.loginPanelTitle}>
          <h2> {currState}</h2>
          <img
            onClick={() => setDisplayLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className={style.loginPanelInputs}>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email Id" required />
          <input type="password" placeholder="Enter Ur Password" required />
        </div>
        <button>{currState === "SignUp" ? "Create Account" : "Login"}</button>
        <div className={style.loginPanelCondition}>
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p className={style.whichState}>
            Create a new account{" "}
            <span onClick={() => setCurrState("SignUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
export default Login;
