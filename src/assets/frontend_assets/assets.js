import hp from "./hp.png";
import lenovo from "./lenovo.jpeg";
import acer from "./acer.png";
import samsung from "./samsung.webp";
import Redmi from "./redmi.jpg";
import apple from "./apple.webp";
import oppo from "./oppo.jpeg";
import vivo from "./vivo.webp";
import Asus1 from "./Asus1.jpeg";
import Asus from "./Asus1.jpg";
import dell from "./dell.webp";

import AC from "./ac.jpeg";
import fridge from "./fridge.jpeg";
import smartphone from "./smartphone.jpeg";
import smartwatch from "./smartwatch.jpeg";
import smarttv from "./smarttv.jpeg";
import headphones from "./headphones.jpeg";
import cameras from "./cameras.jpeg";
import laptop from "./laptop1.jpeg";
import speakers from "./speakers.jpeg";
import applelaptop from "./applelaptop.jpeg";

import cross_icon from "./cross_icon.png";
import menubutton from "./menubutton.png";

export const assets = {
  cross_icon,
  menubutton,
};

export const menu_item = [
  {
    name: "Laptops",
    image: laptop,
  },
  {
    name: "SmartPhone",
    image: smartphone,
  },
  {
    name: "Watch",
    image: smartwatch,
  },
  {
    name: "Fridge",
    image: fridge,
  },
  {
    name: "AC",
    image: AC,
  },
  {
    name: "Speakers",
    image: speakers,
  },
  {
    name: "Cameras",
    image: cameras,
  },
  {
    name: "HeadPhones",
    image: headphones,
  },
  {
    name: "Mobile",
    image: samsung,
  },
  {
    name: "Smart Tv",
    image: smarttv,
  },
];

export const menu_list = [
  {
    menu_name: "HP",
    menu_image: hp,
    category: "Laptops",
  },
  {
    menu_name: "Lenovo",
    menu_image: lenovo,
    category: "Laptops",
  },
  {
    menu_name: "Asus",
    menu_image: Asus1,
    category: "Laptops",
  },
  {
    menu_name: "Samsung",
    menu_image: samsung,
    category: "Laptops",
  },
  {
    menu_name: "Redmi",
    menu_image: Redmi,
    category: "Laptops",
  },
  {
    menu_name: "Apple",
    menu_image: apple,
    category: "Mobile",
  },
  {
    menu_name: "Apple",
    menu_image: apple,
    category: "Laptops",
  },
  {
    menu_name: "Oppo",
    menu_image: oppo,
    category: "Mobile",
  },
  {
    menu_name: "Dell",
    menu_image: dell,
    category: "Laptops",
  },
  {
    menu_name: "Vivo",
    menu_image: vivo,
    category: "Mobile",
  },
  {
    menu_name: "Samsung",
    menu_image: samsung,
    category: "Mobile",
  },
  {
    menu_name: "Acer",
    menu_image: acer,
    category: "Laptops",
  },
  {
    menu_name: "Samsung",
    menu_image: AC,
    category: "AC",
  },
];

export const menu_products = [
  {
    _id: "1",
    name: "Samsung S23",
    image: smarttv,
    price: 12,
    description:
      "Samsung S23: Cutting-edge smart TV with immersive picture quality, 4K resolution, and voice control.",
    type: "Samsung",
    category: "Tv",
  },
  {
    _id: "2",
    name: "Vivo Book",
    image: laptop,
    price: "99$",
    description:
      "Vivo Book: High-performance laptop with sleek design, 16GB RAM, 1TB SSD, and dedicated graphics.",
    type: "Vivo",
    category: "Laptops",
  },
  {
    _id: "3",
    name: "Oppo",
    image: smartphone,
    price: "$16",
    description:
      "Oppo: Stylish smartphone with 50MP triple camera, 8GB RAM, 128GB storage, and fast charging.",
    type: "Oppo",
    category: "Mobile",
  },
  {
    _id: "4",
    name: "Smart Watch",
    image: smartwatch,
    price: 24,
    description:
      "Smart Watch: Sleek and functional watch with fitness tracking, heart rate monitoring, and smartphone notifications.",
    type: "Oneplus",
    category: "Watch",
  },
  {
    _id: "5",
    name: "Samsung",
    image: samsung,
    price: 14,
    description:
      "Samsung: Versatile mobile phone with a powerful processor, 6.7-inch AMOLED display, and 5G connectivity.",
    type: "Samsung",
    category: "Mobile",
  },
  {
    _id: "6",
    name: "Speaker",
    image: speakers,
    price: 12,
    description:
      "Speaker: High-quality audio with deep bass, crystal-clear sound, and Bluetooth connectivity.",
    type: "Dell",
    category: "Speaker",
  },
  {
    _id: "7",
    name: "Samsung",
    image: samsung,
    price: 20,
    description:
      "Samsung: Reliable and innovative mobile with 128GB storage, 8GB RAM, and a long-lasting battery.",
    type: "Samsung",
    category: "Mobile",
  },
  {
    _id: "8",
    name: "Vivo",
    image: smartphone,
    price: 15,
    description:
      "Vivo: Experience seamless performance and stunning visuals with 5G support and a high-refresh-rate display.",
    type: "Vivo",
    category: "Mobile",
  },
  {
    _id: "9",
    name: "Fridge",
    image: fridge,
    price: 14,
    description:
      "Fridge: Spacious and energy-efficient refrigerator with a large capacity and multiple compartments.",
    type: "LG",
    category: "Fridge",
  },
  {
    _id: "10",
    name: "Asus Rog Strix",
    image: Asus,
    price: 22,
    description:
      "Asus Rog Strix: Gaming laptop with high-end performance, 16GB RAM, RTX 3060 graphics, and 1TB SSD.",
    type: "Asus",
    category: "Laptops",
  },
  {
    _id: "11",
    name: "Asus Tuff",
    image: laptop,
    price: 10,
    description:
      "Asus Tuff: Durable laptop with 8GB RAM, 512GB SSD, and military-grade durability for everyday use.",
    type: "Asus",
    category: "Laptops",
  },
  {
    _id: "12",
    name: "Hp Victus",
    image: laptop,
    price: 12,
    description:
      "Hp Victus: Robust laptop with 16GB RAM, 512GB SSD, and dedicated graphics for smooth gaming and multitasking.",
    type: "HP",
    category: "Laptops",
  },
  {
    _id: "13",
    name: "Hp Pavillion",
    image: laptop,
    price: 12,
    description:
      "Hp Pavillion: Stylish laptop with 8GB RAM, 256GB SSD, and a vibrant display for everyday use.",
    type: "HP",
    category: "Laptops",
  },
  {
    _id: "14",
    name: "MacBook Air",
    image: applelaptop,
    price: 18,
    description:
      "MacBook Air: Ultra-light laptop with M2 chip, 8GB RAM, 256GB SSD, and exceptional battery life.",
    type: "Apple",
    category: "Laptops",
  },
  {
    _id: "15",
    name: "MacBook Air 5",
    image: applelaptop,
    price: 16,
    description:
      "MacBook Air 5: The perfect blend of portability and powerful performance with M2 chip and 16GB RAM.",
    type: "Apple",
    category: "Laptops",
  },
  {
    _id: "16",
    name: "Samsung Smart Tv",
    image: smarttv,
    price: 24,
    description:
      "Samsung Smart TV: Experience stunning visuals with 4K resolution, HDR support, and a wide range of smart features.",
    type: "Samsung",
    category: "Smart Tv",
  },
  {
    _id: "17",
    name: "Ac 1.5 Ton",
    image: AC,
    price: 14,
    description:
      "AC 1.5 Ton: Efficient cooling for large rooms with advanced air purification and inverter technology.",
    type: "Samsung",
    category: "AC",
  },
  {
    _id: "18",
    name: "AC 1 Ton",
    image: AC,
    price: 12,
    description:
      "AC 1 Ton: Compact and efficient cooling solution for small spaces with energy-saving features.",
    type: "Samsung",
    category: "AC",
  },
  {
    _id: "19",
    name: "Samsung Ac",
    image: AC,
    price: 20,
    description:
      "Samsung AC: Powerful air conditioning with energy-saving features and Wi-Fi connectivity.",
    type: "Samsung",
    category: "AC",
  },
  {
    _id: "20",
    name: "Fridge ",
    image: fridge,
    price: 15,
    description:
      "Fridge: Keep your food fresh with advanced cooling technology and a spacious interior.",
    type: "Samsung",
    category: "Fridge",
  },
  {
    _id: "21",
    name: "Smart Watch",
    image: smartwatch,
    price: 14,
    description:
      "Smart Watch: Track your fitness, monitor your heart rate, and stay connected with smartphone notifications.",
    type: "Samsung",
    category: "Watch",
  },
  {
    _id: "22",
    name: "Redmi note 8 Smart Watch",
    image: smartwatch,
    price: 22,
    description:
      "Redmi Note 8 Smart Watch: Stylish design with comprehensive health tracking, including sleep monitoring and stress detection.",
    type: "Redmi",
    category: "Watch",
  },
  {
    _id: "23",
    name: "Redmi note 12",
    image: smartphone,
    price: 10,
    description:
      "Redmi Note 12: A budget-friendly smartphone with 50MP main camera, 6GB RAM, and 128GB storage.",
    type: "Redmi",
    category: "SmartPhone",
  },
  {
    _id: "24",
    name: "Redmi ",
    image: smartphone,
    price: 12,
    description:
      "Redmi: Reliable smartphone with excellent performance, 48MP dual camera, and a long-lasting battery.",
    type: "Redmi",
    category: "SmartPhone",
  },
  {
    _id: "25",
    name: "Iphone 15 Pro",
    image: smartphone,
    price: 12,
    description:
      "iPhone 15 Pro: The latest iPhone with A17 Bionic chip, Pro camera system, and durable design.",
    type: "Apple",
    category: "SmartPhone",
  },
];
