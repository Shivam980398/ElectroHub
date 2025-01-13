import React, { useState } from "react";
import style from "./Home.module.css";
import ExploreItems from "../../components/ExploreProducts/ExploreListedProducts";
import MenuItems from "../../components/ExploreProducts/BrandList";
import AboutUs from "../AboutUS/AboutUs";
const Home = () => {
  const [category, setCategory] = useState("All");
  const [type, settype] = useState("All");
  return (
    <div>
      <ExploreItems category={category} setCategory={setCategory} />
      <MenuItems type={type} settype={settype} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <AboutUs />
    </div>
  );
};

export default Home;
