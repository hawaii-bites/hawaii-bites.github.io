"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import supabase from "@lib/supabaseClient";





const UserProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    address: string;
  }>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    birthday: "1990-01-01",
    address: "123 Main Street, Honolulu, HI",
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [fieldValue, setFieldValue] = useState("");
  const [preferences, setPreferences] = useState<string[]>([]);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

  const saveField = () => {
    if (editingField) {
      setProfile((prev) => ({
        ...prev,
        [editingField]: fieldValue,
      }));
      setEditingField(null);
    }
  };

  const handleSavePreferences = async () => {
    const userId = 1; // Replace this with actual user ID logic
    console.log("Preferences to save:", preferences);
  
    const { data, error } = await supabase
      .from("UserPreferences")
      .upsert({ user_id: userId, preferences });
  
    if (error) {
      console.error("Error saving preferences:", error);
      alert("Failed to save preferences.");
    } else {
      console.log("Preferences saved successfully:", data);
      alert("Preferences saved successfully!");
    }
  };
  
  

  const startEditing = (field: string, currentValue: string) => {
    setEditingField(field);
    setFieldValue(currentValue);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="container mx-auto py-10 px-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              {profile.firstName} {profile.lastName}
            </h1>
            <p className="text-lg text-gray-500">{profile.email}</p>
          </div>

          {/* Profile Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {["firstName", "lastName", "email", "birthday", "address"].map(
              (field, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-600 capitalize">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    {editingField === field ? (
                      <input
                        className="border-2 border-gray-300 rounded-lg p-2"
                        value={fieldValue}
                        onChange={(e) => setFieldValue(e.target.value)}
                      />
                    ) : (
                      <p className="text-gray-800">{profile[field as keyof typeof profile]}</p>
                    )}
                  </div>
                  {editingField === field ? (
                    <button
                      className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-800"
                      onClick={saveField}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="ml-4 text-blue-600 underline"
                      onClick={() => {
                        const value = profile[field as keyof typeof profile];
                        if (typeof value === "string") {
                          startEditing(field, value);
                        }
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
              )
            )}
          </div>

          {/* Preferences Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Preferences</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
  "Entree",
  "Snacks & Sides",
  "Sticks & Rolls",
  "Rice & Noodles",
  "Drinks",
  "Desserts",
  "Hot Dogs",
  "Smoothies",
  "Bowls",
  "Breakfast",
  "Burritos",
  "Nachos",
  "Quesadillas",
  "Flavored Teas",
  "Milk Teas",
  "Coffee",
  "Sandwiches",
  "Salads",
  "Tacos",
  "Soup",
  "Musubis",
].map((preference) => (
                <label key={preference} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={preference}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPreferences((prev) => [...prev, preference]);
                      } else {
                        setPreferences((prev) =>
                          prev.filter((item) => item !== preference)
                        );
                      }
                    }}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="text-gray-700">{preference}</span>
                </label>
              ))}
            </div>
            <button
              onClick={handleSavePreferences}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-800"
            >
              Save Preferences
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-800">
              Change Password
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-800">
              Delete Account
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-800">
              User Guide
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {isPreferencesModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Update Preferences</h2>
            <label className="block mb-2 font-semibold">Favorite Types of Food</label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
              placeholder="e.g., Italian, Sushi"
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => setIsPreferencesModalOpen(false)}
              >
                Cancel
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UserProfilePage;
