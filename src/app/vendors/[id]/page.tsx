"use client";

import React from "react";
import { useParams } from "next/navigation";

// Define the vendor menu type
interface VendorMenu {
  name: string;
  food: string[];
  drinks?: string[];
  dessert?: string[];
}

// Define the vendorMenus object with a strict type
const vendorMenus: Record<string, VendorMenu> = {
  "krazy-dogs": {
    name: "Krazy Dogs",
    food: [
      "Classic Dog",
      "Bacon Wrapped Dog",
      "Chili Cheese Dog",
      "L.A. Street Dog",
      "Chicago Dog",
    ],
    drinks: ["Classic Lemonade", "Strawberry Lilikoi Lemonade"],
  },
  "middle-eats": {
    name: "Middle Eats",
    food: [
      "Falafel (Vegan)",
      "Egyptian Koshary (Vegan)",
      "Shawarma Brisket",
      "Chicken Kebab",
      "Hummus",
      "Baba Ghanoush",
      "Garlic Toum Sauce",
    ],
  },
  "olays-thai-lao-express": {
    name: "Olay's Thai Lao Express",
    food: [
      "Pork Spring Rolls",
      "Satay Chicken",
      "Garlic Pork Sticks",
      "Veggie Pad Thai",
      "Thai Curry",
      "Orange Chicken",
      "Side Rice",
    ],
    drinks: ["Thai Coffee", "Thai Tea", "Canned Soda", "Bottled Water"],
  },
  "saap-sapp-hi": {
    name: "Saap Sapp HI",
    food: [
      "Signature Lao Sausage Plate",
      "LFC (Lao Fried Chicken) Plate",
      "Braised Pork Stew (Thom Kem)",
    ],
    drinks: [
      "Glitter Fruit Teas: Mango Lilikoi, Lychee Dragon, Peach Pineapple, Strawberry Guava Watermelon",
      "Cream Sodas: Strawberry, Blue Vanilla, Flavor of the Week",
    ],
    dessert: ["Sweet Mango Sago", "Fresh Strawberry Sago"],
  },
  "veggi-dogs": {
    name: "Veggi Dogs",
    food: [
      "#1 Reggi Dog",
      "#2 Surf Dog",
      "#3 Kimchee Dog",
      "Special: Teriyaki-Miso Dog",
    ],
  },
  "jamba-juice": {
    name: "Jamba Juice",
    food: [
      "Classic Sausage, Egg + Cheese",
      "Impossible™ Sausage",
      "Spring Veggie Egg Bake",
    ],
    drinks: [
      "Aloha Pineapple Smoothie",
      "Caribbean Passion Smoothie",
      "Mango-A-Go-Go Smoothie",
      "Vanilla Blue Sky",
      "Apple 'n Greens",
    ],
    dessert: [
      "Acai Tropical Bowl",
      "Greek Yogurt Strawberry + Banana Granola Bowl",
      "Dragon Fruit Delight Bowl",
    ],
  },
  "brito": {
    name: "B'rito",
    food: [
      "Beef Burrito",
      "Kalua Pork Bowl",
      "Shrimp Quesadilla",
      "Flamin' Hot Cheetos Nachos",
    ],
    drinks: [
      "Aguas Frescas",
      "Bottled Soda",
      "Monster Energy Drink",
      "Arizona",
    ],
    dessert: ["Churro Sundae", "Churro Bites"],
  },
  "ding-tea": {
    name: "Ding Tea",
    food: [],
    drinks: [
      "Assam Black Tea",
      "Jasmine Green Tea",
      "Passionfruit Yakult/Yogurt",
      "Brown Sugar Milk Tea",
    ],
  },
  "sama-sama": {
    name: "Sama Sama",
    food: [],
    drinks: [
      "Avocado Milk Tea",
      "Buko Pandan Butterfly Pea Flower Tea",
      "Ube Sampaguita Tea",
    ],
    dessert: [
      "Halo-Halo",
      "Mais Con Yelo",
      "Melon sa Malamig",
      "Avocado Milk Dessert",
    ],
  },
  "the-bean-counter": {
    name: "The Bean Counter",
    food: [
      "Club Wrap",
      "Local Green Salad",
      "Chipotle Corn Salad",
      "Bagel with Cream Cheese",
    ],
    drinks: [
      "Brewed Coffee",
      "Americano",
      "Latte",
      "Chai Latte",
      "Hot Chocolate",
    ],
    dessert: ["Cupcakes", "Chocolate Peanut Butter Cookies"],
  },
  "lasoon": {
    name: "Lasoon",
    food: [
      "Daal (Lentils)",
      "Chana Masala (Chickpeas)",
      "Chicken Curry",
      "Jackfruit Curry",
      "Aloo Gobi (Cauliflower & Potato)",
    ],
    drinks: ["Mango Lassi", "Masala Chai", "Fresh Watermelon Juice"],
  },
  "holo-holo-grill": {
    name: "HoloHolo Grill",
    food: [
      "Turkey Avocado Bomb Panini",
      "Grilled Cheese Panini",
      "Hot Taco Bar",
      "Salad of the Day",
    ],
    drinks: ["Bottled Water", "Smoothies", "Milk Teas"],
  },
  "lnl": {
    name: "L&L Hawaiian Barbecue",
    food: [
      "BBQ Chicken Mini Plate",
      "Chicken Katsu",
      "Loco Moco",
      "Spam Musubi",
    ],
  },
  "panda-express": {
    name: "Panda Express",
    food: [
      "Orange Chicken",
      "Beijing Beef",
      "Chow Mein",
      "Mixed Veggies",
      "Kung Pao Chicken",
    ],
  },
};

const VendorPage: React.FC = () => {
    const params = useParams();
    const vendorId = params?.id as string;
  
    const vendorData = vendorMenus[vendorId];
  
    if (!vendorData) {
      return (
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold text-red-600">Vendor Not Found</h1>
          <p className="text-lg">Please check the name or go back to the homepage.</p>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{vendorData.name}</h1>
  
        {vendorData.food.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Food</h2>
            <ul className="list-disc pl-6 text-gray-900 text-lg">
              {vendorData.food.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
  
        {vendorData.drinks && vendorData.drinks.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Drinks</h2>
            <ul className="list-disc pl-6 text-gray-900 text-lg">
              {vendorData.drinks.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
  
        {vendorData.dessert && vendorData.dessert.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Dessert</h2>
            <ul className="list-disc pl-6 text-gray-900 text-lg">
              {vendorData.dessert.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  };
  
  export default VendorPage;