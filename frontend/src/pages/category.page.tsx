import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { cn } from "../utils/helper";

import { Category } from "../utils/cats.types";
import { User } from "../utils/user.types";

const MAX_SELECTION = 10;

export default function CategorySelector() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const hasFetchedRef = useRef(false);
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to home if no token is found
      return;
    }

    axios
      .get(`${baseUrl}/profile/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((e) => console.log(`error from user profile: ${e}`));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to home if no token is found
      return;
    }

    axios
      .get(`${baseUrl}/api/get-categories`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCategories(res.data);
        localStorage.setItem("categories", JSON.stringify(res.data));
      })
      .catch((e) => console.log(`error from categories: ${e}`));
  }, []);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : prev.length < MAX_SELECTION
          ? [...prev, id]
          : prev
    );
  };

  const handleNext = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to home if no token is found
      return;
    }
    axios
      .post(
        `${baseUrl}/profile/user-categories`,
        selected,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("Categories saved:", res.data);
        navigate('/profile')

      })
      .catch((e) => console.log("Error saving categories:", e));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-bold text-primary">DENAURLEN</div>
        <div className="flex items-center space-x-2 bg-primary text-white text-xs px-3 py-1 rounded-full">
          <span>🪙</span>
          <span>{user?.wallet.userCoins}</span>
        </div>
      </div>

      {/* Greeting Banner */}
      <h2 className="text-center font-semibold text-sm md:text-base p-4 rounded-xl bg-[#f1d5ff] mb-6">
        {user
          ? `Hey ${user.fullName}, Choose Your Favourite Top #10 Categories to Know Yourself`
          : "Hello"}
      </h2>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
        {categories.map((category) => {
          const isSelected = selected.includes(category.id);
          return (
            <button
              key={category.id}
              onClick={() => toggleSelect(category.id)}
              className={cn(
                "border rounded-2xl p-4 flex flex-col items-center transition",
                isSelected
                  ? "border-primary bg-violet-100 shadow-lg"
                  : "border-neutral-300"
              )}
            >
              {category.src ? (
                <img
                  src={category.src}
                  alt={category.name}
                  className="w-8 h-8 mb-2"
                />
              ) : (
                <div className="w-8 h-8 mb-2 bg-neutral-200 rounded-full" />
              )}
              <span className="text-sm text-center">{category.name}</span>
              {isSelected && (
                <div className="text-xs mt-1 text-primary font-medium">
                  Selected
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <div className="flex justify-center">
        <button
          className="bg-primary text-white px-6 py-2 rounded-xl disabled:opacity-50"
          disabled={selected.length !== MAX_SELECTION}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}