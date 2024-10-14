import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
const Categories = () => {
  const categories = useCategory();
  const navigate = useNavigate();
  function capitalize(str) {
    if (!str) return str; // Check if the string is empty or null
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return (
    <Layout title={"All Categories"}>
      <h1 className="pt-20 lg:pt-28 text-3xl md:text-5xl text-center text-white font-mono">
        All Categories
      </h1>
      <hr className="my-4" />
      <div className="flex justify-center items-center xl:h-[80vh] ">
        <div className="px-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-8 mb-10">
          {categories.map((c, idx) => (
            <div className="">
              <button
                key={idx}
                className="font-mono active:scale-95 shadow-2xl shadow-gray-600  w-full text-center text-xl px-28 py-16 rounded-lg  font-bold  text-white hover:scale-95 hover:text-gray-800 hover:bg-white transition duration-500"
                onClick={() => navigate(`/category/${c.slug}`)}
              >
                {capitalize(c.name)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
