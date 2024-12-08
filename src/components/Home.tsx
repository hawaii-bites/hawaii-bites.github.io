"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define types
interface Special {
  name: string;
  location: string;
}

const Home: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<"Breakfast" | "Lunch" | "Dinner">("Breakfast");
  const [search, setSearch] = useState("");
  const [recommendations, setRecommendations] = useState<Special[]>([]);
  const router = useRouter();

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

  useEffect(() => {
    const currentHour = new Date().getHours();
    setTimeOfDay(currentHour < 10 ? "Breakfast" : currentHour < 15 ? "Lunch" : "Dinner");
  }, []);

  return (
    <div>
      <h1>Welcome to Hawaii Bites!</h1>
      <p>Current Time of Day: {timeOfDay}</p>
      {specials[timeOfDay]?.map((special, index) => (
        <div key={index}>
          <h3>{special.name}</h3>
          <p>{special.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
