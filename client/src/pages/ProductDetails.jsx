import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { BsCart2, BsCart3, BsCart4 } from "react-icons/bs";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [cart, setCart] = useCart();

  useEffect(() => {
    if (params?.id) getProduct();
  }, [params?.id]);
  function capitalize(str) {
    if (!str) return str; // Check if the string is empty or null
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get/${params.id}`);
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={capitalize(product.name)}>
      <div className="pt-28 px-8 lg:px-16 font-mono pb-8 text-white">
        <div className="lg:mt-20 w-96 md:w-auto xl:w-[1200px] m-auto flex flex-col md:flex-row items-center justify-between shadow-2xl rounded-2xl">
          <div className="w-full md:w-80 lg:w-96 ">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="w-full rounded-tl-2xl rounded-bl-2xl"
              alt={capitalize(product.name)}
            />
          </div>
          <div className="flex flex-col mt-4 px-4 md:h-full w-full lg:px-10 lg:pb-8">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-center  ">
              {capitalize(product.name)}
            </h1>
            <hr className="my-2 lg:my-4 2xl:my-4 lg:mb-10" />
            {/* <h2 className="text-2xl md:text-3xl font-bold m-1 mt-2">
              {capitalize(product.name)}
            </h2> */}
            <h2 className="text-xl md:text-2xl m-1">{capitalize(product.description)}</h2>
            <h2 className="text-xl md:text-2xl m-1 text-red-600">
              Stock : {product.quantity}
            </h2>
            <h2 className="text-xl lg:text-2xl  m-1">
               {product?.category?.name}
            </h2>
          </div>
          <div className="w-full md:w-[15%] flex md:flex-col md:gap-12 xl:gap-24 justify-around items-center my-6 px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
            &#8377;{product.price}
            </h2>
            <button
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item Added To Cart");
              }}
              className=" hover:scale-95 border-2 border-green-600 rounded-md text-lg px-4 py-2 lg:text-xl lg:px-10 lg:py-4 bg-green-600 text-white shadow-xl transition duration-300"
            >
              <BsCart4  className="text-2xl"/>
            </button>
          </div>
        </div>

        <hr className="my-8 xl:my-16" />
        <div className="flex flex-col xl:mb-16">
          <h1 className="text-3xl xl:text-4xl   ">
            Similar Products : {relatedProduct.length}
          </h1>

          {relatedProduct.length < 1 && <p> No Similar Products Found</p>}
          <hr className="mt-4 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:flex xl:flex-wrap gap-12 xl:gap-16">
            {relatedProduct?.map((p) => (
              <div
                onClick={() => navigate(`/product/${p._id}`)}
                className="w-80 lg:w-72  flex flex-col items-center justify-between rounded-2xl  shadow-2xl hover:cursor-pointer hover:scale-95 pb-2 transition duration-300"
                key={capitalize(p._id)}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  alt={capitalize(p.name)}
                  className="w-full  max-h-[65%]  rounded-tl-2xl rounded-tr-2xl"
                />
                <div className="w-full flex flex-col justify-between py-4 px-4 h-full">
                  <div className="">
                    <h3 className="font-bold text-xl md:text-2xl ">{capitalize(p.name)}</h3>
                    <p className="text-lg md:text-xl">
                      {capitalize(p.description.substring(0, 30))}
                    </p>
                    <p className="text-lg md:text-xl text-red-600">Stock : {p.quantity}</p>
                    <p className="text-lg md:text-xl font-bold"> &#8377;{p.price}</p>
                  </div>
                  <div className="flex gap-2 mt-2 justify-between  ">
                    <button
                      onClick={() => navigate(`/product/${p._id}`)}
                      className="shadow-xl border-2 border-blue-600 rounded-md text-lg px-2 py-1 lg:px-2 lg:py-2 bg-blue-600 text-white hover:scale-95 transition duration-300"
                    >
                      More Details
                    </button>
                    <button
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added To Cart");
                      }}
                      className="shadow-xl border-2 border-yellow-600 rounded-md text-xl px-4 py-1  lg:px-4 lg:py-2 bg-yellow-600 text-white hover:scale-95 transition duration-300"
                    >
                      <BsCart4 />
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

export default ProductDetails;
