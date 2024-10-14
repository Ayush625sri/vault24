import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // Import the theme context

const Footer = () => {
  const { darkMode } = useTheme(); // Get the darkMode value from context

  // Set the background color to match the header
  const footerBackgroundColor = darkMode ? "bg-stone-950" : "bg-blue-300"; // Ensure it matches the header
  const footerTextColor = darkMode ? "text-white" : "text-gray-800";
//  style={{ backgroundColor: darkMode ? "#333" : "#1976D2" }}
  return (
    <div className={` ${footerBackgroundColor} ${footerTextColor}  text-lg w-full h-fit max-w-screen flex flex-col items-center gap-6 py-4 font-mono bg-gradient-to-r from-blue-300 to-green-300`}>
      <div className="flex flex-col md:flex-row justify-center text-center gap-5">
        <Link to="/about" className="mx-5 hover:text-gray-500 transition">
          About
        </Link>
        {window.innerWidth > 590 && <span>&nbsp;</span>}
        <Link to="/contact" className="mx-5 hover:text-gray-500 transition">
          Contact
        </Link>
        {window.innerWidth > 590 && <span>&nbsp;</span>}
        <Link to="/policy" className="mx-5 hover:text-gray-500 transition">
          Privacy Policy
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 hover:-translate-y-2 duration-300 transition">
          <FaFacebookF size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 hover:-translate-y-2 duration-300 transition">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 hover:-translate-y-2 duration-300 transition">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 hover:-translate-y-2 duration-300 transition">
          <FaLinkedin size={24} />
        </a>
      </div>

      <h4 className={`text-md text-center ${footerTextColor}`}>
        All Rights Reserved &copy; Vault24
      </h4>
    </div>
  );
};

export default Footer;
