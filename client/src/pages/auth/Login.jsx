import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { signInWithGoogle } from "../../firebase"; // Import the Google sign-in function

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="p-3 text-md border-2 border-blue-300 rounded-xl w-full"
              />
            </div>
            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="p-3 text-md border-2 border-blue-300 rounded-xl w-full"
              />
            </div>

            <div className="text-right">
              <p
                onClick={() => navigate("/forgot-password")}
                className="text-lg mt-2 text-blue-600 underline hover:cursor-pointer"
              >
                Forgot Password?
              </p>
            </div>

            <div className="my-6 text-center">
              <button className="text-xl text-white bg-blue-600 border-blue-600 border-2 w-full p-2 hover:bg-white hover:text-blue-600 hover:scale-95 rounded-xl transition ease-in-out duration-300">
                Login
              </button>
            </div>
          </form>

          <span className="text-gray-400 text-center mt-4 block">Or</span>

          <div className="my-4">
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center  shadow-md text-blue-600 w-full p-2 mt-4 bg-white  border-2 shadow-indigo-300 hover:scale-95 rounded-xl transition duration-300 ease-in-out"
            >
              <img
                src="public/images/google-g-icon.png"
                alt="Google"
                className="h-5 mr-2"
              />
              Sign In with Google
            </button>
          </div>

          <div className="text-right mt-4">
            <p
              onClick={() => navigate("/register")}
              className="text-lg mt-2 text-blue-600 underline hover:cursor-pointer"
            >
              Create New Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
