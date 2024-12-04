"use client";

import { useState, useEffect } from "react";
import supabase from "@/lib/supabaseClient";

const ManageMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [newItem, setNewItem] = useState({
    vendor_id: "",
    item_name: "",
    category: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch existing menu items
  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase.from("MenuItems").select("*");
      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error("Error fetching menu items:", error.message);
      setErrorMessage("Error fetching menu items.");
    }
  };

  // Fetch vendor list
  const fetchVendors = async () => {
    try {
      const { data, error } = await supabase.from("FoodVendors").select("*");
      if (error) throw error;
      setVendors(data || []);
    } catch (error) {
      console.error("Error fetching vendors:", error.message);
    }
  };

  // Add a new menu item
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("MenuItems").insert([newItem]);
      if (error) throw error;
      alert("Item added successfully!");
      setNewItem({ vendor_id: "", item_name: "", category: "", description: "" });
      fetchMenuItems(); // Refresh the list
    } catch (error) {
      console.error("Error adding menu item:", error.message);
      setErrorMessage("Error adding menu item.");
    }
  };

  useEffect(() => {
    fetchMenuItems();
    fetchVendors();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Menu Items</h1>

      <h2 className="text-2xl font-semibold mb-4 text-green-700">Current Menu Items</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {menuItems.length > 0 ? (
        <ul className="list-disc pl-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <strong>{item.item_name}</strong> ({item.category}) - {item.description}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">No items found for this vendor.</p>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Add New Menu Item</h2>
      <form onSubmit={handleAddItem} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Vendor</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={newItem.vendor_id}
            onChange={(e) => setNewItem({ ...newItem, vendor_id: e.target.value })}
            required
          >
            <option value="">Select a Vendor</option>
            {vendors.map((vendor) => (
              <option key={vendor.id} value={vendor.id}>
                {vendor.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md"
            value={newItem.item_name}
            onChange={(e) => setNewItem({ ...newItem, item_name: e.target.value })}
            placeholder="Enter item name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            required
          >
            <option value="">Select a Category</option>
            <option value="entree">Entree</option>
            <option value="Drinks">Drinks</option>
            <option value="Snacks & Sides">Snacks & Sides</option>
            <option value="Sticks & Rolls">Sticks & Rolls</option>
            <option value="Rice & Noodles">Rice & Noodles</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="mt-1 block w-full p-2 border rounded-md"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            placeholder="Enter item description"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ManageMenuItems;
