import React from "react"; 
import { Helmet } from "react-helmet"; 
import { Toaster } from "react-hot-toast"; 
import Footer from "./Footer.jsx"; 
import Header from "./Header.jsx"; 
import { useTheme } from "../../context/ThemeContext"; // Adjust path as necessary

const Layout = ({ children, title, description, keywords, author }) => {
  const { darkMode } = useTheme(); // Get dark mode state from context

  return (
    <div className={`w-screen ${darkMode ? "bg-stone-700" : "bg-white"} ${darkMode ? "text-white" : "text-black"} `}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <Toaster />
      <main className="min-h-[100vh] bg-gradient-to-r from-blue-600 to-green-600 ">{children}</main>
      {/* <main className="min-h-[100vh]  ">{children}</main> */}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Vault24 - Shop Now",
  description: "A Marketplace for Antiques",
  keywords: "mern, react, nodejs",
  author: "ayush625sri",
};

export default Layout;
