import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear } from "../components/redux/slices/CartSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAuthenticated, setAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = () => {
    setAuthenticated(true);
    // navigate("/dashboard");
  };

  const logout = () => {
    console.log("Logout clicked, clearing cart...");
    setAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    dispatch(clear()); //
    // localStorage.removeItem("cart"); // optional; Redux store.subscribe will overwrite to []
    // navigate("/"); // optional navigation
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
