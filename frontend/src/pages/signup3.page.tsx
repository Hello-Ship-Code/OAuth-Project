import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../components/common/button/button.component";
import { InputComponent } from "../components/common/inputFields/input.component";
import { TextComponent } from "../components/common/TextComponent/TextComponent.component";
import homeSvg from '../assets/media/Home/mobile-home.svg';

export const Signup3 = () => {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Store the data in sessionStorage
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("location", location);
    sessionStorage.setItem("dob", dob);
    sessionStorage.setItem("gender", gender);

    // Navigate to the third signup page
    navigate("/signup/4");
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
              text="Woah! Verified Successfully..!"
              variant="title"
              className="text-neutral-900 font-bold text-left"
            />
            <TextComponent
              text="Fill the below details to continue"
              as="p"
              variant="body"
              className="text-neutral-600 text-left"
            />

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {/* User Name Input */}
              <InputComponent
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="User Name"
                className="w-full"
              />

              {/* Location Input */}
              <InputComponent
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Location"
                className="w-full"
              />

              {/* Date of Birth Input */}
              <InputComponent
                type="date"
                name="dob"
                placeholder=""
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                size="medium"
                variant="primary-input"
                className="w-full"
              />

              {/* Gender Input */}
              <InputComponent
                type="text"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Gender"
                className="w-full"
              />

              {/* Submit Button */}
              <ButtonComponent
                type="submit"
                text="Next"
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