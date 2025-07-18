import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../components/common/button/button.component";
import { InputComponent } from "../components/common/inputFields/input.component";
import { TextComponent } from "../components/common/TextComponent/TextComponent.component";
import homeSvg from "../assets/media/Home/mobile-home.svg";

export const Signup4 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Collect data from sessionStorage
    const email = sessionStorage.getItem("email");
    const fullName = sessionStorage.getItem("fullName");
    const userName = sessionStorage.getItem("userName");
    const location = sessionStorage.getItem("location");
    const dob = sessionStorage.getItem("dob");
    const gender = sessionStorage.getItem("gender");

    const payload = {
      email,
      fullName,
      userName,
      location,
      dob,
      gender,
      password,
    };

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      const data = JSON.parse(text);

      if (response.ok) {
        console.log("Signup successful:", data);
        navigate("/login");
      } else {
        setErrorMessage(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const svgPosition: "left" | "right" = "right";
  const SVGGraphic = (
    <div className="hidden lg:flex w-full lg:w-1/2 h-60 lg:h-full items-center justify-center bg-blue-50">
      <img src={homeSvg} alt="Home Illustration" />
    </div>
  );

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md flex flex-col justify-center min-h-screen py-4">

          {/* Top Section */}
          <div className="space-y-6">
            <TextComponent
              as="h1"
              text="Create Password"
              variant="title"
              className="text-neutral-900 font-bold text-left"
            />
            <TextComponent
              text="Your identity has been verified! Set a password"
              as="p"
              variant="body"
              className="text-neutral-600 text-left"
            />

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <InputComponent
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Password"
                className="w-full"
              />

              <InputComponent
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Confirm Password"
                className="w-full"
              />

              <ButtonComponent
                type="submit"
                text="Complete Signup"
                size="large"
                className="w-full mt-2"
                variant="primary-btn"
              />
            </form>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 space-y-6">
            <p className="text-center text-neutral-400 text-sm">
              Already a User?{" "}
              <a href="/login" className="text-primary font-medium">
                Sign In
              </a>
            </p>

            <div className="flex items-center">
              <div className="flex-grow border-t border-neutral-300" />
              <span className="mx-3 text-neutral-400 text-sm">OR</span>
              <div className="flex-grow border-t border-neutral-300" />
            </div>

            <ButtonComponent
              text="Sign Up with Google"
              size="large"
              variant="icon-btn"
              onClick={() => alert("We are working on it!")}
              type="button"
              className="w-full border border-neutral-300 bg-white text-neutral-600 flex items-center justify-center gap-2"
              icon={<FcGoogle size={20} />}
            />
          </div>
        </div>
      </div>
      {svgPosition === "right" && SVGGraphic}
    </div>
  );
};