"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const vendors = [
  { id: "krazy-dogs", name: "Krazy Dogs" },
  { id: "middle-eats", name: "Middle Eats" },
  { id: "olays-thai-lao-express", name: "Olay's Thai Lao Express" },
  { id: "saap-saap-hi", name: "Saap Saap HI" },
  { id: "veggi-dogs", name: "Veggi Dogs" },
  { id: "jamba-juice", name: "Jamba Juice" },
  { id: "brito", name: "B'rito" },
  { id: "ding-tea", name: "Ding Tea" },
  { id: "sama-sama", name: "Sama Sama" },
  { id: "the-bean-counter", name: "The Bean Counter" },
  { id: "lasoon", name: "Lasoon" },
  { id: "holo-holo-grill", name: "HoloHolo Grill" },
  { id: "lnl", name: "L&L Hawaiian Barbecue" },
  { id: "panda-express", name: "Panda Express" },
];

const fuzzyMatch = (input: string, target: string): boolean => {
  const normalizedInput = input.trim().toLowerCase();
  const normalizedTarget = target.trim().toLowerCase();

  if (normalizedTarget.includes(normalizedInput)) return true;

  let mismatches = 0;
  for (let i = 0, j = 0; i < normalizedInput.length && j < normalizedTarget.length; i++, j++) {
    if (normalizedInput[i] !== normalizedTarget[j]) {
      mismatches++;
      if (mismatches > 1) return false;
      i--;
    }
  }
  return mismatches <= 1;
};

const MainContent: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const currentHour = new Date().getHours();
    setTimeOfDay(currentHour < 10 ? "Breakfast" : currentHour < 15 ? "Lunch" : "Dinner");
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const vendor = vendors.find((v) => fuzzyMatch(search, v.name));
    if (vendor) {
      router.push(`/vendors/${vendor.id}`);
    } else {
      alert("Vendor not found! Please try again.");
    }
  };

  const categories = ["Healthy", "Vegetarian", "Popular"];

  const handleCategoryClick = (category: string) => {
    router.push(`/categories/${category.toLowerCase()}`);
  };

  const specials = {
    Breakfast: [
      { name: "Acai Bowl", location: "Jamba Juice" },
      { name: "Breakfast Burrito", location: "Campus Center Food Court" },
    ],
    Lunch: [
      { name: "Chicken Katsu", location: "L&L Hawaiian Barbecue" },
      { name: "Falafel", location: "Middle Eats" },
    ],
    Dinner: [
      { name: "Grilled Salmon", location: "Gateway Café" },
      { name: "Loco Moco", location: "Hale Aloha Café" },
    ],
  };

  const dailySpecials = [
    { name: "Chili Cheese Dog", location: "Krazy Dogs", deal: "10% off today!" },
    { name: "Lao Fried Chicken Plate", location: "Saap Saap HI", deal: "Limited time only!" },
  ];

  const popularChoices = [
    { name: "Teriyaki Chicken Bowl", location: "Campus Center" },
    { name: "Vegetarian Sushi", location: "Manoa Gardens" },
    { name: "BBQ Pork Sandwich", location: "Food Truck Row" },
  ];

  return (
    <main className="flex-grow container mx-auto py-16 px-8 bg-[#f0fdf4] font-poppins">
      {/* Welcome Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#065f46] mb-6">Welcome to Hawaii Bites!</h1>
        <p className="text-xl text-gray-700 mb-10">
          Discover your favorite campus meals and check out what’s available today.
        </p>
        <form onSubmit={handleSearch} className="flex justify-center gap-4 mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for meals, cuisines, or vendors..."
            className="w-2/3 md:w-1/3 p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669]"
          >
            Search
          </button>
        </form>
        {/* Explore by Category */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="px-6 py-3 bg-[#bbf7d0] text-[#065f46] font-bold rounded-lg hover:bg-[#86efac]"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Time-Based Meals Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-[#065f46] mb-8">{`${timeOfDay} Specials`}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specials[timeOfDay]?.map((special, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#065f46] mb-2">{special.name}</h3>
              <p className="text-gray-600">Available at {special.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Choices Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-[#065f46] mb-8">Popular Choices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {popularChoices.map((choice, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#065f46] mb-2">{choice.name}</h3>
              <p className="text-gray-600">{choice.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Specials Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-[#065f46] mb-8">Today&apos;s Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dailySpecials.map((special, index) => (
            <div
              key={index}
              className="p-6 bg-[#fef9c3] border border-gray-200 rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#a16207] mb-2">{special.name}</h3>
              <p className="text-gray-600">Available at {special.location}</p>
              <p className="text-[#065f46] font-bold mt-2">{special.deal}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
