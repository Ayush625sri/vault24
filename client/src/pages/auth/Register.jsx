import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase"; // Import Google sign-in function

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        question,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <div div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 font-sans">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="p-3 text-md border-2 border-blue-300  rounded-xl w-full"
              />
            </div>
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="p-3 text-md border-2 border-blue-300  rounded-xl w-full"
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
                className="p-3 text-md border-2 border-blue-300  rounded-xl w-full"
              />
            </div>
            <div>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                id="phone"
                placeholder="Enter Your Phone"
                className="p-3 text-md border-2 border-blue-300  rounded-xl w-full"
              />
            </div>
            <div>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                id="address"
                placeholder="Enter Your Address"
                className="p-3 text-md border-2 border-blue-300  rounded-xl w-full"
              />
            </div>
            <div>
              <input
                type="text"
                required
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                name="question"
                id="question"
                placeholder="Security Key"
                className="p-3 text-md border-2 border-blue-300  rounded-xl w-full"
              />
            </div>
            <div className="my-6  text-center">
              <button className="text-xl text-white  bg-blue-600   w-full p-2  hover:scale-95  shadow-md shadow-blue-400 rounded-xl transition ease-in-out duration-300">
                Register
              </button>
            </div>
          </form>

          <span className="text-gray-400 text-center mt-4 block">Or</span>

          <div className="my-4">
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center  shadow-md   w-full p-2 mt-4 bg-white text-blue-600 border-2 shadow-indigo-300 hover:scale-95 rounded-xl transition duration-300 ease-in-out"
            >
              <img src="public/images/google-g-icon.png" alt="Google" className="h-5 mr-2" />
              Sign In with Google
            </button>
          </div>

          <div className="text-right">
            <p
              onClick={() => navigate("/login")}
              className="text-lg mt-2 text-blue-600 underline hover:cursor-pointer"
            >
              Already Have an Account?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
