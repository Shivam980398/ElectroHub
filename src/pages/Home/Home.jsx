import React, { useState } from "react";
import style from "./Home.module.css";
import ExploreItems from "../../components/ExploreProducts/ExploreListedProducts";
import AboutUs from "../AboutUS/AboutUs";
import BrandList from "../../components/BrandList/BrandList";
const Home = ({ searchTerm }) => {
  const [category, setCategory] = useState("All");
  const [type, settype] = useState("All");
  return (
    <div>
      <ExploreItems
        category={category}
        setCategory={setCategory}
        searchTerm={searchTerm}
      />
      {/* <BrandList type={type} settype={settype} /> */}
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
