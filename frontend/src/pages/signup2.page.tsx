import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../components/common/button/button.component";
import { InputComponent } from "../components/common/inputFields/input.component";
import { TextComponent } from "../components/common/TextComponent/TextComponent.component";
import homeSvg from "../assets/media/Home/mobile-home.svg";

export const Signup2 = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 4 || isNaN(Number(otp))) {
      setErrorMessage("Please enter a valid 4-digit OTP.");
      return;
    }

    if (Number(otp) != 1234) {
      setErrorMessage("Please enter a the 4-digit OTP $1234$.");
      return;
    }

    localStorage.setItem("otp", otp);
    navigate("/signup/3");
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
              text="Email Verification"
              variant="title"
              className="text-neutral-900 font-bold text-left"
            />
            <TextComponent
              text="Hang tight before we proceed further"
              as="p"
              variant="body"
              className="text-neutral-600 text-left"
            />

            <div className="bg-[#f3e8ff] text-[#4B0082] px-4 py-3 text-sm rounded-md">
              Enter 4 digit OTP which is 1234
            </div>

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <InputComponent
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Enter OTP"
                className="w-full"
              />

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
          <div className="pt-6 space-y-4 text-center">
            <p className="text-neutral-400 text-sm">
              Didn’t get the code?{" "}
              <button className="text-primary font-medium" onClick={() => alert("Resend OTP triggered!")}>
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
      {svgPosition === "right" && SVGGraphic}
    </div>
  );
};