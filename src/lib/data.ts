import advanced from "$lib/assets/icon-advanced.svg";
import arcade from "$lib/assets/icon-arcade.svg";
import pro from "$lib/assets/icon-pro.svg";

export const plans = [
  { title: "Arcade", price: 9, icon: arcade },
  { title: "Advanced", price: 12, icon: advanced },
  { title: "Pro", price: 15, icon: pro }
];

export const addons = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
    selected: false
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    selected: false
  },
  {
    title: "Cutomizable profile",
    description: "Custom theme on your profile",
    price: 3,
    selected: false
  }
];
