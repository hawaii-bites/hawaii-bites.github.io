"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import supabase from "@/lib/supabaseClient";

const VendorPage = () => {
  const params = useParams();
  const vendorId = params?.id as string;
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", category: "", description: "" });
  const [message, setMessage] = useState("");

  // Fetch menu items from Supabase
  const fetchMenuItems = async () => {
    const { data, error } = await supabase
      .from("MenuItems")
      .select("*")
      .eq("vendor_id", vendorId);

    if (error) {
      console.error("Error fetching menu items:", error.message);
    } else {
      setMenuItems(data);
    }
  };

  // Add new menu item to Supabase
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from("MenuItems")
      .insert([{ 
        vendor_id: vendorId, 
        item_name: newItem.name, 
        category: newItem.category, 
        description: newItem.description 
      }]);

    if (error) {
      setMessage("Failed to add menu item.");
      console.error("Error adding menu item:", error.message);
    } else {
      setMessage("Menu item added successfully!");
      setNewItem({ name: "", category: "", description: "" });
      fetchMenuItems(); // Refresh the list
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, [vendorId]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Vendor Menu</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Current Menu Items</h2>
        {menuItems.length > 0 ? (
          <ul className="list-disc pl-6 text-gray-900 text-lg">
            {menuItems.map((item) => (
              <li key={item.id} className="mb-2">
                <strong>{item.item_name}</strong> - {item.category} - {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No items found for this vendor.</p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Add New Menu Item</h2>
        <form onSubmit={handleAddItem} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md"
              placeholder="Enter item name"
              value={newItem.name}
              onChange={(e) => setNewItem((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md"
              placeholder="Enter item category"
              value={newItem.category}
              onChange={(e) => setNewItem((prev) => ({ ...prev, category: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full p-2 border-gray-300 rounded-md"
              placeholder="Enter item description"
              value={newItem.description}
              onChange={(e) => setNewItem((prev) => ({ ...prev, description: e.target.value }))}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Add Item
          </button>
        </form>
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </section>
    </div>
  );
};

export default VendorPage;
