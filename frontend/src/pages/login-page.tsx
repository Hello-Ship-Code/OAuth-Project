import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import { ButtonComponent } from "../components/common/button/button.component";
import { InputComponent } from "../components/common/inputFields/input.component";
import { TextComponent } from "../components/common/TextComponent/TextComponent.component";
import homeSvg from '../assets/media/Home/mobile-home.svg'

export const Login = () => {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const svgPosition: "left" | "right" = "left";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    console.log(baseUrl)
    try {
      const response = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();

      const data = JSON.parse(text);

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem('token', data.token);

        // Check if the user has categories already
        const token = data.token;

        const categoriesResponse = await fetch(`${baseUrl}/profile/get-user-categories`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        const categoriesData = await categoriesResponse.json();

        if (categoriesResponse.ok && categoriesData) {
          navigate('/profile');
        } else {
          navigate('/category');
        }
      } else {
        setErrorMessage(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const handleGoogleSignIn = () => {
    alert('we are working on it!!!');
  };

  const SVGGraphic = (
    <div className="hidden lg:flex w-full lg:w-1/2 h-60 lg:h-full items-center justify-center bg-blue-50">
      <img src={homeSvg} />
    </div>
  );

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row overflow-hidden">
      {svgPosition === "left" && SVGGraphic}

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md flex flex-col justify-center min-h-screen py-4">
          {/* Top Section */}
          <div className="space-y-6">
            <div className="space-y-1">
              <TextComponent
                as="h1"
                text="SIGN IN"
                variant="title"
                className="text-primary font-bold text-left"
              />
              <TextComponent
                text="Connect & Collect...!"
                as="p"
                variant="body"
                className="text-neutral-600 text-left"
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <form onSubmit={handleLogin} className="space-y-4 w-full">
              <InputComponent
                type="text"
                name="email"
                value={email}
                onChange={(e) => setUserEmail(e.target.value)}
                size="medium"
                variant="primary-input"
                placeholder="Email Id"
                className="w-full"
              />

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

              <div className="flex justify-between items-center text-sm text-gray-500">
                <label className="flex items-center gap-2">
                  <InputComponent
                    type="checkbox"
                    name="terms"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="w-4 h-4"
                    size="small"
                    variant="primary-input"
                    placeholder=""
                  />
                  <span>Remember Me</span>
                </label>

                <Link to="/forget-password" className="text-primary">
                  Forgot Password?
                </Link>
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
              New to DENAURLEN?{" "}
              <Link to="/signup" className="text-primary font-medium">
                Try it Now!
              </Link>
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
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full border border-neutral-300 bg-white text-neutral-600 flex items-center justify-center gap-2"
              icon={<FcGoogle size={20} />}
            />
          </div>
        </div>
      </div>

      {/* {svgPosition === "right" && SVGGraphic} */}
    </div>
  );
};