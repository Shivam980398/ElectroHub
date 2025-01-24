import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AboutUs from "./pages/AboutUS/AboutUs";
import Login from "./components/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import ProductDetails from "./components/ExploreProducts/ProductDetails.jsx";

const App = () => {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [isActive, setActive] = useState("Home");
  const [login, setLogin] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  // };

  return (
    <>
      <NavBar
        setDisplayLogin={setDisplayLogin}
        isActive={isActive}
        setActive={setActive}
        login={login}
        setLogin={setLogin}
      />
      {displayLogin ? (
        <Login
          setDisplayLogin={setDisplayLogin}
          login={login}
          setLogin={setLogin}
        />
      ) : (
        <></>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Cart"
          element={<Cart isActive={isActive} setActive={setActive} />}
        />
        <Route path="/About" element={<AboutUs />} />
        {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
      </Routes>
      <br />
      <br />
    </>
  );
};

export default App;
