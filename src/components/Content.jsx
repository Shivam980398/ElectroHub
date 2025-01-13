import React from "react";
import style from "./Content.module.css";
import { menu_list } from "../assets/frontend_assets/assets";
const Content = () => {
  const projects = [
    {
      name: "Item 1",
      description:
        "This is a fitness site where you can gain knowledge about staying healthy.",
      imageUrl: "/fitness.webp", // Update with the actual image URL
      link: "https://shivam980398.github.io/project2/", // Update with the correct project link
    },
    {
      name: "Fitness",
      description:
        "This is a fitness site where you can gain knowledge about staying healthy.",
      imageUrl: "./fitness.webp", // Update with the actual image URL
      link: "https://shivam980398.github.io/project2/", // Update with the correct project link
    },
    {
      name: "Fitness",
      description:
        "This is a fitness site where you can gain knowledge about staying healthy.",
      imageUrl: "./fitness.webp", // Update with the actual image URL
      link: "https://shivam980398.github.io/project2/", // Update with the correct project link
    },
    {
      name: "Fitness",
      description:
        "This is a fitness site where you can gain knowledge about staying healthy.",
      imageUrl: "./fitness.webp", // Update with the actual image URL
      link: "https://shivam980398.github.io/project2/", // Update with the correct project link
    },
    {},
    {},
    {},
    {},
    {},

    {},
    // Add more projects as needed
  ];

  return (
    // <div className={style.boxProject}>
    <div className={style.projectContainer}>
      {projects.map((project, index) => (
        <div className={style.project} key={index}>
          <img src={project.imageUrl} alt={`Project: ${project.name}`} />
          {/* <h1>{project.name}</h1> */}
          <p>{project.description}</p>
          <button onClick={() => (window.location.href = project.link)}>
            Add to Cart
          </button>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Content;
