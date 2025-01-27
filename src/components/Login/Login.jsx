import React, { useState } from "react";
import style from "./Login.module.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ setDisplayLogin, setLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      const backendUrl = "http://localhost:4001/api/v1";
      if (currState === "Login") {
        response = await axios.post(`${backendUrl}/login`, {
          email,
          password,
        });
        if (response.status === 200 && response.data) {
          Cookies.set("token", response.data.token, { expires: 1 });
          toast.success("Login Successful");
          setLogin(true);
          setDisplayLogin(false);
        } else {
          if (error.response && error.response.data) {
            toast.error(error.response.data.message || `${currState} failed`);
          } else {
            toast.error(`${currState} failed due to invalid credentials`);
          }
        }
      } else if (currState === "SignUp") {
        response = await axios.post(`${backendUrl}/signup`, {
          email,
          password,
          firstName,
          lastName,
          number,
        });
        if (response.status === 200 && response.data) {
          Cookies.set("token", response.data.token, { expires: 1 });

          toast.success("Account Created Successfully");
          setLogin(true);
          setDisplayLogin(false);
        } else {
          toast.error("Invalid Credentials");
        }
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || `${currState} failed`);
      } else {
        toast.error(`${currState} failed due to network error`);
      }
    }
  };

  return (
    <div className={style.loginPanel}>
      <form className={style.loginPanelContainer} onSubmit={handleSubmit}>
        <div className={style.loginPanelTitle}>
          <h2>{currState}</h2>
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
            <>
              <input
                type="text"
                placeholder="FirstName"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="LastName"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Your Number"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </>
          )}
          <input
            type="email"
            placeholder="Your Email Id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          {currState === "SignUp" ? "Create Account" : "Login"}
        </button>
        <div className={style.loginPanelCondition}>
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
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
