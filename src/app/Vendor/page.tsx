"use client";

import { useState, useEffect } from "react";
import supabase from "@lib/supabaseClient";

interface Vendor {
  id: string;
  name: string;
  location: string;
}

const ManageMenuItems = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<string>("");
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    vendor_id: "",
    item_name: "",
    category: "",
    description: "",
  });

  // Fetch vendors dynamically from Supabase
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const { data, error } = await supabase.from("FoodVendors").select("*");
        console.log("Fetched data:", data);
        if (error) {
          console.error("Error fetching vendors:", error.message);
          alert("Failed to load vendors.");
        } else {
          setVendors(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred.");
      }
    };
  
    fetchVendors();
  }, []);
  

  // Handle adding a new menu item
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.vendor_id) {
      alert("Please select a vendor.");
      return;
    }

    try {
      const { data, error } = await supabase.from("MenuItems").insert([newItem]);
      if (error) {
        console.error("Error adding item:", error);
        alert("Failed to add the item. Please try again.");
        return;
      }
      alert("Item added successfully!");
      setMenuItems((prev) => [...prev, ...data]);
      setNewItem({ vendor_id: "", item_name: "", category: "", description: "" });
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  if (vendors.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-red-600">Failed to load vendors. Please try again later.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Manage Menu Items</h1>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Add New Menu Item</h2>
        <form onSubmit={handleAddItem} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          {/* Vendor Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Vendor</label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              value={newItem.vendor_id}
              onChange={(e) => setNewItem({ ...newItem, vendor_id: e.target.value })}
              required
            >
              <option value="">Select a Vendor</option>
              {vendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                  {vendor.name} - {vendor.location}
                </option>
              ))}
            </select>
          </div>

          {/* Item Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              value={newItem.item_name}
              onChange={(e) => setNewItem({ ...newItem, item_name: e.target.value })}
              placeholder="Enter item name"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              required
            >
              <option value="">Select a Category</option>
              <option value="entree">Entree</option>
              <option value="drinks">Drinks</option>
              <option value="snacks & sides">Snacks & Sides</option>
              <option value="sticks & rolls">Sticks & Rolls</option>
              <option value="rice & noodles">Rice & Noodles</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              placeholder="Enter item description"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 shadow-md"
          >
            Add Item
          </button>
        </form>
      </section>
    </div>
  );
};

export default ManageMenuItems;
