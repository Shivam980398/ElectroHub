import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { userDetail } from "../../context/userContext";
import { useNavigate } from "react-router-dom"; // Import Navigate for redirection

const ResetPass = () => {
  const { password, setPassword } = useContext(userDetail);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams(); // Get the token from the URL
  const navigate = useNavigate(); // Use useNavigate for redirection
  const { setCurrState, setDisplayLogin } = useContext(userDetail);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    try {
      const backendUrl = "http://localhost:4001/api/v1";
      const response = await axios.post(
        `${backendUrl}/resetpassword/${token}`,
        {
          password,
          confirmPassword,
        }
      );
      if (response.status === 200 && response.data) {
        toast.success("Password Changed Successfully");
        setCurrState("Login"); // Reset the state to Login after successful password change
        // navigate("/"); // Redirect to the home page or any other page
        setTimeout(() => {
          navigate("/"); // ✅ Navigate after state update
        }, 100);
        setDisplayLogin(true); // Close the login modal if it was open
      } else {
        toast.error(response.data.message || "Changing password failed");
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
          "Changing password failed due to network error"
      );
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Your Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Change Pass</button>
      </form>
    </div>
  );
};

export default ResetPass;
