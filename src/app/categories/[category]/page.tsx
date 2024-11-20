"use client";

import React from "react";
import { useParams } from "next/navigation";

// Example menu items
const menuItems = [
  { name: "Apple 'n Greens Smoothie", category: "healthy", vendor: "Jamba Juice", description: "A refreshing plant-based smoothie." },
  { name: "Sweet Mango Sago", category: "healthy", vendor: "Saap Saap HI", description: "Delicious mango dessert with sago." },
  { name: "Reggi Dog", category: "vegetarian", vendor: "Veggi Dogs", description: "Topped with sauerkraut, spicy chili mayo, and crispy onion." },
  { name: "Daal", category: "vegetarian", vendor: "Lasoon", description: "Flavorful Indian lentil curry." },
  { name: "Fresh Cut Fruit Bowl", category: "healthy", vendor: "HoloHolo Grill", description: "Assorted fresh fruits in a bowl." },
  { name: "Orange Chicken", category: "popular", vendor: "Panda Express", description: "Tangy, crispy chicken in orange sauce." },
  { name: "Chili Cheese Dog", category: "popular", vendor: "Krazy Dogs", description: "Hot dog topped with chili, nacho cheese, and onions." },
  { name: "Loco Moco", category: "popular", vendor: "L&L", description: "Traditional Hawaiian comfort food with hamburger, gravy, and rice." },
];

const CategoryPage = () => {
  const params = useParams();
  const category = params?.category;

  if (!category) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold capitalize mb-4">Invalid Category</h1>
        <p className="text-gray-600">Please select a valid category from the homepage.</p>
      </div>
    );
  }

  // Filter items based on the category from the URL
  const filteredItems = menuItems.filter((item) => item.category === category.toLowerCase());

  if (filteredItems.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold capitalize mb-4">Category: {category}</h1>
        <p className="text-gray-600">No items found for this category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold capitalize text-center mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg border">
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-sm text-gray-500 mt-2">Vendor: {item.vendor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
