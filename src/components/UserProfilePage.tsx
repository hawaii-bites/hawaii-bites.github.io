"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

const UserProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    profilePicture: null,
    birthday: "1990-01-01",
    address: "123 Main Street, Honolulu, HI",
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [fieldValue, setFieldValue] = useState("");
  const [preferences, setPreferences] = useState<string[]>([]);

  const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, profilePicture: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const startEditing = (field: string, currentValue: string) => {
    setEditingField(field);
    setFieldValue(currentValue);
  };

  const saveField = () => {
    setProfile((prev) => ({
      ...prev,
      [editingField as keyof typeof profile]: fieldValue,
    }));
    setEditingField(null);
  };

  const handleSavePreferences = async () => {
    const userId = 1; // Replace this with actual user ID logic

    const { data, error } = await supabase
      .from("UserPreferences")
      .upsert({ user_id: userId, preferences });

    if (error) {
      console.error("Error saving preferences:", error);
      alert("Failed to save preferences.");
    } else {
      alert("Preferences saved successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="container mx-auto py-10 px-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 mb-4">
              <Image
                src={profile.profilePicture || "/placeholder.png"}
                alt="Profile Picture"
                className="rounded-full border-4 border-green-600 shadow-lg object-cover"
                width={112}
                height={112}
              />
              <label className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full cursor-pointer shadow-md">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePictureUpload}
                />
                Upload
              </label>
            </div>
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
                      <p className="text-gray-800">
                        {profile[field as keyof typeof profile]}
                      </p>
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
                      onClick={() =>
                        startEditing(
                          field,
                          profile[field as keyof typeof profile] as string
                        )
                      }
                    >
                      Edit
                    </button>
                  )}
                </div>
              )
            )}
          </div>

          {/* Preferences Form */}
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

      <Footer />
    </div>
  );
};

export default UserProfilePage;
