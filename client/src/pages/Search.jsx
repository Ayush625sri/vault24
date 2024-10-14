import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useSearch } from "../context/search";
import { BsCart4 } from "react-icons/bs";

const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();

  function capitalize(str) {
    if (!str) return str; // Check if the string is empty or null
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const navigate = useNavigate();
  return (
    <Layout title={"Search Results"}>
      <div className="font-mono flex text-white">
        <div className="flex w-full justify-center flex-col text-center xl:w-full pt-20 lg:pt-28">
          <h1 className=" text-4xl xl:text-5xl text-center">Search Results</h1>
          <h6 className="text-2xl mt-4">
            {values?.results.length < 1 || values?.results === " "
              ? "No Products Found"
              : `Found ${values?.results.length} Items`}
          </h6>
          <hr className="my-4" />
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16 my-8 mx-32 md:mx-16 lg:mx-64 items-center">
            {values?.results?.map((p) => (
              <div
              onClick={() => navigate(`/product/${p._id}`)}
              className="flex flex-col items-center justify-between h-full shadow-2xl  hover:scale-95 transition duration-300 hover:cursor-pointer rounded-2xl"
              key={p._id}
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
                className="w-full max-h-[65%]  rounded-tr-2xl rounded-tl-2xl"
              />
              <div className="flex flex-col justify-between  w-full px-3 py-4 relative">
                <div className="relative text-left">
                  <h3 className="font-bold text-xl ">{capitalize(p.name)}</h3>
                  <p className="text-lg">
                    {capitalize(p.description.substring(0, 30))}
                  </p>
                  <p className="text-lg text-red-600">Stock : {p.quantity}</p>
                  <p className="text-xl font-bold ">&#8377;{p.price}</p>
                </div>
                <div className=" mt-2  absolute bottom-5 right-5">
                 
                  <button
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added To Cart");
                    }}
                    className="shadow-xl  border-2 border-yellow-600 rounded-md text-xl p-3 bg-yellow-600 text-white hover:scale-95 transition duration-300"
                  >
                    {/* Add to Cart */}
                    <BsCart4 className="text-2xl"  />
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
