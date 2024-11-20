import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

interface UserProfile {
  name: string;
  email: string;
  likes: string[];
  dislikes: string[];
  profilePicture: string | null;
}

const availableFoods = [
  "Classic Dog",
  "Falafel",
  "Chicken Katsu",
  "Orange Chicken",
  "Loco Moco",
  "Teriyaki Chicken",
  "Vegetarian Sushi",
  "Thai Curry",
  "Acai Bowl",
];

const availableDislikes = [
  "Spicy",
  "Seafood",
  "Pork",
  "Beef",
  "Sugar",
  "Gluten",
  "Lactose",
];

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    name: "John Doe",
    email: "john.doe@example.com",
    likes: ["Vegetarian Sushi", "Chicken Katsu"],
    dislikes: ["Spicy", "Seafood"],
    profilePicture: null,
  });

  const [newLike, setNewLike] = useState<string>("");
  const [newDislike, setNewDislike] = useState<string>("");
  const [pendingLikes, setPendingLikes] = useState<string[]>([...user.likes]);
  const [pendingDislikes, setPendingDislikes] = useState<string[]>([...user.dislikes]);

  // Profile picture upload handler
  const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePicture: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a new food to the pending likes list
  const handleAddLike = () => {
    if (newLike && !pendingLikes.includes(newLike) && availableFoods.includes(newLike)) {
      setPendingLikes((prevLikes) => [...prevLikes, newLike]);
      setNewLike("");
    } else {
      alert("Please select a valid food item from the available list.");
    }
  };

  // Add a new food to the pending dislikes list
  const handleAddDislike = () => {
    if (newDislike && !pendingDislikes.includes(newDislike) && availableDislikes.includes(newDislike)) {
      setPendingDislikes((prevDislikes) => [...prevDislikes, newDislike]);
      setNewDislike("");
    } else {
      alert("Please select a valid dislike from the available list.");
    }
  };

  // Remove a food from the pending likes list
  const handleRemoveLike = (like: string) => {
    setPendingLikes((prevLikes) => prevLikes.filter((item) => item !== like));
  };

  // Remove a food from the pending dislikes list
  const handleRemoveDislike = (dislike: string) => {
    setPendingDislikes((prevDislikes) => prevDislikes.filter((item) => item !== dislike));
  };

  // Submit pending changes
  const handleSubmitChanges = () => {
    setUser((prevUser) => ({
      ...prevUser,
      likes: pendingLikes,
      dislikes: pendingDislikes,
    }));
    alert("Your changes have been saved!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="container mx-auto p-5 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
          Set Your Food Preferences
        </h1>

        {/* Profile Picture and Account Information Section */}
        <section className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4 relative">
            <Image
              src={user.profilePicture || "/placeholder.png"} // Default placeholder if no picture
              alt="Profile Picture"
              className="rounded-full object-cover border-4 border-green-700 shadow-lg"
              width={128}
              height={128}
            />
            <label className="absolute bottom-0 right-0 bg-green-700 text-white p-2 rounded-full cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={handleProfilePictureUpload} />
              Upload
            </label>
          </div>

          {/* Account Info */}
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800">{user.name}</p>
            <p className="text-lg text-gray-600">{user.email}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800">
              Edit Account Info
            </button>
          </div>
        </section>

        {/* Likes and Dislikes Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-gray-50 p-5 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Foods You Like</h2>
            <ul className="space-y-2 mb-3">
              {pendingLikes.map((like, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <span className="text-lg text-gray-800 font-medium">{like}</span>
                  <button className="text-red-700 hover:underline" onClick={() => handleRemoveLike(like)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex mb-3">
              <input
                type="text"
                className="flex-grow p-3 border border-gray-300 rounded-l-lg"
                placeholder="Add a food you like"
                value={newLike}
                onChange={(e) => setNewLike(e.target.value)}
                list="available-foods"
              />
              <datalist id="available-foods">
                {availableFoods.map((food, index) => (
                  <option key={index} value={food} />
                ))}
              </datalist>
              <button className="px-5 py-3 bg-green-600 text-white rounded-r-lg hover:bg-green-800" onClick={handleAddLike}>
                Add
              </button>
            </div>
          </div>

          <div className="card bg-gray-50 p-5 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Foods You Don’t Like</h2>
            <ul className="space-y-2 mb-3">
              {pendingDislikes.map((dislike, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <span className="text-lg text-gray-800 font-medium">{dislike}</span>
                  <button className="text-red-700 hover:underline" onClick={() => handleRemoveDislike(dislike)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex mb-3">
              <input
                type="text"
                className="flex-grow p-3 border border-gray-300 rounded-l-lg"
                placeholder="Add a food you dislike"
                value={newDislike}
                onChange={(e) => setNewDislike(e.target.value)}
                list="available-dislikes"
              />
              <datalist id="available-dislikes">
                {availableDislikes.map((dislike, index) => (
                  <option key={index} value={dislike} />
                ))}
              </datalist>
              <button className="px-5 py-3 bg-green-600 text-white rounded-r-lg hover:bg-green-800" onClick={handleAddDislike}>
                Add
              </button>
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-800 shadow-md"
            onClick={handleSubmitChanges}
          >
            Submit Changes
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfilePage;
