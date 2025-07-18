import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../components/common/button/button.component";
import { InputComponent } from "../components/common/inputFields/input.component";
import { TextComponent } from "../components/common/TextComponent/TextComponent.component";
import homeSvg from '../assets/media/Home/mobile-home.svg';

export const Signup = () => {
  const [email, setUserEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const svgPosition: "left" | "right" = "right";
  const SVGGraphic = (
    <div className="hidden lg:flex w-full lg:w-1/2 h-60 lg:h-full items-center justify-center bg-blue-50">
      <img src={homeSvg} alt="Home Illustration" />
    </div>
  );

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Store the data in sessionStorage
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("fullName", fullName);

    // Navigate to the second signup page
    navigate("/signup/2");
  };

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md flex flex-col justify-center min-h-screen py-4">

          {/* Top Section */}
          <div className="space-y-6">
            <TextComponent
              as="h1"
              text="SIGN UP"
              variant="title"
              className="text-primary font-bold text-left"
            />
            <TextComponent
              text="Connect & Collect...!"
              as="p"
              variant="body"
              className="text-neutral-600 text-left"
            />
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <InputComponent
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Full Name"
                className="w-full"
              />

              <InputComponent
                type="email"
                name="email"
                value={email}
                onChange={(e) => setUserEmail(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Email id"
                className="w-full"
              />

              <div className="flex items-start gap-2 text-sm text-gray-500">
                <InputComponent
                  type="checkbox"
                  placeholder=""
                  name="terms"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 w-4 h-4"
                  size="small"
                  variant="primary-input"
                />
                <span>
                  I agree with the{" "}
                  <a href="/terms-and-conditions" className="text-primary underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>

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