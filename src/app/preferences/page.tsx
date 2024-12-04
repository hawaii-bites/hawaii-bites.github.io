"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "Healthy Options",
  "Vegetarian/Vegan",
  "Meaty Delights",
  "Spicy",
  "Sweet Treats",
  "Seafood",
  "Beverages",
  "Ethnic Favorites",
  "Comfort Food",
];

const PreferencesPage: React.FC = () => {
  const [preferences, setPreferences] = useState<string[]>([]);

  const togglePreference = (category: string) => {
    setPreferences((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = () => {
    alert(`Preferences saved: ${preferences.join(", ")}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-5 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
          Set Your Food Preferences
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`p-5 border-2 rounded-lg shadow-md text-center font-bold ${
                preferences.includes(category)
                  ? "bg-green-600 text-white border-green-800"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
              onClick={() => togglePreference(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-800 shadow-md"
            onClick={handleSubmit}
          >
            Save Preferences
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreferencesPage;
