import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/all`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  function capitalize(str) {
    if (!str) return str; // Check if the string is empty or null
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title="Dashboard - All Products">
      <div className="flex flex-col xl:flex-row  pt-12 xl:pt-28 md:pb-16 md:pr-16 ">
        <AdminMenu />
        <div className="w-8/12 flex flex-col mt-6 xl:w-full justify-center items-center p-2 md:p-10 pt-6 border-2 shadow-gray-400 shadow-md font-mono text-white">
          <div className="flex justify-center ">
            <h1 className="text-4xl lg:text-5xl bold mb-4">All Products</h1>
          </div>
          <div className="  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {products?.map((p) => (
              <Link
                to={`/dashboard/admin/product/${p._id}`}
                className=" mx-2 my-2"
                key={p._id}
              >
                <div className="flex lg:flex-col items-center justify-between lg:w-80  shadow-2xl rounded-2xl h-full hover:scale-95 transition duration-500">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                    className="w-32  md:w-full md:max-h-[20rem] lg:h-auto outline-none border-none rounded-tl-2xl rounded-tr-2xl"
                  />
                  <div className="flex flex-col px-4 py-8 w-full">
                    <h3 className="font-bold text-xl xl:text-2xl">{capitalize(p.name)}</h3>
                    <p className="text-lg xl:text-xl">{capitalize(p.description)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
