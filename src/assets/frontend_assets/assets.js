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
];

export const menu_products = [
  {
    _id: "1",
    name: "Samsung S23",
    image: smarttv,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "Tv",
  },
  {
    _id: "2",
    name: "Vivo Book",
    image: laptop,
    price: "99$",
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Vivo",
    category: "Laptops",
  },

  {
    _id: "3",
    name: "Oppo",
    image: smartphone,
    price: 16,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Oppo",
    category: "Mobile",
  },
  {
    _id: "4",
    name: "Smart Watch",
    image: smartwatch,
    price: 24,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Oppo",
    category: "Watch",
  },
  {
    _id: "5",
    name: "Samsung",
    image: samsung,
    price: 14,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "Mobile",
  },
  {
    _id: "6",
    name: "Speaker",
    image: speakers,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Dell",
    category: "Speaker",
  },
  {
    _id: "7",
    name: "Samsung",
    // image: samsung,
    price: 20,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    image: samsung,
    type: "Samsung",
    category: "Mobile",
  },
  {
    _id: "8",
    name: "Vivo",
    image: smartphone,
    price: 15,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Vivo",
    category: "Mobile",
  },
  {
    _id: "9",
    name: "Fridge",
    image: fridge,
    price: 14,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "LG",
    category: "Fridge",
  },
  {
    _id: "10",
    name: "Asus Rog Strix",
    image: Asus,
    price: 22,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Asus",
    category: "Laptops",
  },
  {
    _id: "11",
    name: "Asus Tuff",
    image: laptop,
    price: 10,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Asus",
    category: "Laptops",
  },
  {
    _id: "12",
    name: "Hp Victus",
    image: laptop,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "HP",
    category: "Laptops",
  },
  {
    _id: "13",
    name: "Hp Pavillion",
    image: laptop,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "HP",
    category: "Laptops",
  },
  {
    _id: "14",
    name: "MacBook Air",
    image: applelaptop,
    price: 18,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Apple",
    category: "Laptops",
  },
  {
    _id: "15",
    name: "MacBook Air 5",
    image: applelaptop,
    price: 16,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Apple",
    category: "Laptops",
  },
  {
    _id: "16",
    name: "Samsung Smart Tv",
    image: smarttv,
    price: 24,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "Smart Tv",
  },
  {
    _id: "17",
    name: "Ac 1.5 Ton",
    image: AC,
    price: 14,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "AC",
  },
  {
    _id: "18",
    name: "AC 1 Ton",
    image: AC,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "AC",
  },
  {
    _id: "19",
    name: "Samsung Ac",
    image: AC,
    price: 20,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "AC",
  },
  {
    _id: "20",
    name: "Fridge ",
    image: fridge,
    price: 15,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "Fridge",
  },
  {
    _id: "21",
    name: "Smart Watch",
    image: smartwatch,
    price: 14,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "Watch",
  },
  {
    _id: "22",
    name: "Redmi note 8 Smart Watch",
    image: smartwatch,
    price: 22,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Redmi",
    category: "Watch",
  },
  {
    _id: "23",
    name: "Redmi note 12",
    image: smartphone,
    price: 10,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Redmi",
    category: "SmartPhone",
  },
  {
    _id: "24",
    name: "Redmi ",
    image: smartphone,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Redmi",
    category: "SmartPhone",
  },
  {
    _id: "25",
    name: "Iphone 15 Pro",
    image: smartphone,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Apple",
    category: "SmartPhone",
  },
  {
    _id: "26",
    name: "Iphone 14 ",
    image: smartphone,
    price: 18,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Apple",
    category: "SmartPhone",
  },
  {
    _id: "27",
    name: "MacBook",
    image: applelaptop,
    price: 16,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Apple",
    category: "Laptops",
  },
  {
    _id: "28",
    name: "MAcbook air 6",
    image: applelaptop,
    price: 24,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Apple",
    category: "Laptops",
  },
  {
    _id: "29",
    name: "Lenovo",
    image: laptop,
    price: 14,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "lenovo",
    category: "Laptops",
  },
  {
    _id: "30",
    name: "Ultra HD 8K Camera",
    image: cameras,
    price: 12,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Samsung",
    category: "Cameras",
  },
  {
    _id: "31",
    name: "Speakers ",
    image: speakers,
    price: 20,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Oppo",
    category: "Speakers",
  },
  {
    _id: "32",
    name: "Oppo f15",
    image: smartphone,
    price: 15,
    description:
      "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
    type: "Oppo",
    category: "Mobile",
  },
];
