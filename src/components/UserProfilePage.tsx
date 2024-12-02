"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

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
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600">Birthday</label>
                <p className="text-gray-800">{profile.birthday}</p>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600">Address</label>
                <p className="text-gray-800">{profile.address}</p>
              </div>
            </div>
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
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-800"
              onClick={() => setIsPreferencesModalOpen(true)}
            >
              Update Preferences
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

            <label className="block mb-2 font-semibold">Favorite Restaurants</label>
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
              placeholder="e.g., Mama's Fish House, Nobu"
            />

            <label className="block mb-2 font-semibold">Allergies</label>
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
              placeholder="e.g., Peanuts, Gluten"
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
