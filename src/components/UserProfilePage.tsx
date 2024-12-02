"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const UserProfilePage: React.FC = () => {
  // Profile State
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    profilePicture: null,
    birthday: "1990-01-01",
    address: "123 Main Street, Honolulu, HI",
  });

  // Modal State
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

  // Preferences State
  const [preferences, setPreferences] = useState({
    favoriteFoods: "",
    favoriteRestaurants: "",
    allergies: "",
    dietaryRestrictions: "",
  });

  // Profile Picture Upload Handler
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

  // Handle Preferences Form Submit
  const handlePreferencesSubmit = () => {
    alert(
      `Preferences updated:\n- Favorite Foods: ${preferences.favoriteFoods}\n- Favorite Restaurants: ${preferences.favoriteRestaurants}\n- Allergies: ${preferences.allergies}\n- Dietary Restrictions: ${preferences.dietaryRestrictions}`
    );
    setIsPreferencesModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="container mx-auto p-5 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
          User Profile
        </h1>

        {/* Profile Information */}
        <section className="mb-10">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 relative">
              <Image
                src={profile.profilePicture || "/placeholder.png"}
                alt="Profile Picture"
                className="rounded-full object-cover border-4 border-green-700 shadow-lg"
                width={128}
                height={128}
              />
              <label className="absolute bottom-0 right-0 bg-green-700 text-white p-2 rounded-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePictureUpload}
                />
                Upload
              </label>
            </div>
            <p className="text-xl font-bold">{profile.firstName} {profile.lastName}</p>
            <p className="text-lg text-gray-600">{profile.email}</p>
          </div>
          <div className="mt-6">
            <p className="text-lg">Birthday: {profile.birthday}</p>
            <p className="text-lg">Address: {profile.address}</p>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md mb-4">
              Change Password
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md">
              Delete Account
            </button>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
              User Guide
            </button>
          </div>
        </section>

        {/* Preferences Button */}
        <div className="text-center">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md"
            onClick={() => setIsPreferencesModalOpen(true)}
          >
            Update Preferences
          </button>
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
              value={preferences.favoriteFoods}
              onChange={(e) => setPreferences({ ...preferences, favoriteFoods: e.target.value })}
            />

            <label className="block mb-2 font-semibold">Favorite Restaurants</label>
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
              placeholder="e.g., Mama's Fish House, Nobu"
              value={preferences.favoriteRestaurants}
              onChange={(e) => setPreferences({ ...preferences, favoriteRestaurants: e.target.value })}
            />

            <label className="block mb-2 font-semibold">Allergies</label>
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
              placeholder="e.g., Peanuts, Gluten"
              value={preferences.allergies}
              onChange={(e) => setPreferences({ ...preferences, allergies: e.target.value })}
            />

            <label className="block mb-2 font-semibold">Dietary Restrictions</label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
              placeholder="e.g., Vegetarian, Vegan"
              value={preferences.dietaryRestrictions}
              onChange={(e) => setPreferences({ ...preferences, dietaryRestrictions: e.target.value })}
            />

            <div className="flex justify-end">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => setIsPreferencesModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
                onClick={handlePreferencesSubmit}
              >
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
