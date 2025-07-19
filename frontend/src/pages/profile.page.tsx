import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Category } from "../utils/cats.types";
import { User } from "../utils/user.types";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to home if no token is found
      return;
    }

    // Get user profile
    axios
      .get(`${baseUrl}/profile/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((e) => console.log(`Error fetching user profile: ${e}`));

    // Get selected categories
    axios
      .get(`${baseUrl}/profile/get-user-categories`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Full category response:", res.data);
        if (Array.isArray(res.data)) {
          setSelectedCategories(res.data);
        } else if (Array.isArray(res.data.categories)) {
          setSelectedCategories(res.data.categories);
        } else {
          console.warn("Unexpected format for selected categories:", res.data);
        }
      })
      .catch((e) => console.log(`Error fetching categories: ${e}`));
  },);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("categories");
    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-bold text-primary">OAuth Project</div>
        <div className="flex items-center space-x-2 bg-primary text-white text-xs px-3 py-1 rounded-full">
          <span>🪙</span>
          <span>{user?.wallet.userCoins}</span>
        </div>
      </div>

      {/* Greeting Banner */}
      <h2 className="text-center font-semibold text-sm md:text-base p-4 rounded-xl bg-[#f1d5ff] mb-6">
        {user ? `Welcome back, ${user.fullName}!` : "Hello"}
      </h2>

      {/* Display Selected Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Your Selected Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {selectedCategories.length > 0 ? (
            selectedCategories.map((cat) => (
              <div
                key={cat.id}
                className="border rounded-2xl p-4 flex flex-col items-center"
              >
                {cat.src ? (
                  <img
                    src={cat.src}
                    alt={cat.name}
                    className="w-8 h-8 mb-2"
                  />
                ) : (
                  <div className="w-8 h-8 mb-2 bg-neutral-200 rounded-full" />
                )}
                <span className="text-sm text-center">{cat.name}</span>
              </div>
            ))
          ) : (
            <div className="text-sm text-neutral-400">No categories selected.</div>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}