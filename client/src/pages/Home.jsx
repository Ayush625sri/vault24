import { Checkbox, Radio } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import { BsCart4 } from "react-icons/bs";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [checked, setChecked] = useState([]);

  const [radio, setRadio] = useState([]);

  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [cart, setCart] = useCart();

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`/api/v1/category/get-categories`);
      if (data?.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotal();

    //eslint-disable-next-line
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products.reverse());
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/count/all`);
      setTotal(data.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };
  function capitalize(str) {
    if (!str) return str; // Check if the string is empty or null
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);
  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="flex flex-col 2xl:flex-row p-8 pt-28 font-mono">
        <div className="flex flex-col  2xl:flex-col mr-20 mb-20 gap-8 ">
          <div className="flex flex-col gap-8 md:flex-row 2xl:flex-col justify-between xl:justify-around  text-white">
            <div className="">
              {/* {JSON.stringify(checked, null,4)} */}
              <h1 className=" text-3xl mb-2">Filter By Category</h1>
              <hr className="mb-2" />
              <div className="flex flex-col">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    className="text-lg text-gray-200 "
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>
            </div>

            <div className="">
              {/* {JSON.stringify(radio, null,4)} */}
              <h1 className=" text-3xl mb-2">Filter By Prices</h1>
              <hr className="mb-2" />
              <div className="flex flex-col">
                <Radio.Group
                  onChange={(e) => setRadio(e.target.value)}
                  className="flex flex-col"
                >
                  {Prices?.map((p) => (
                    <Radio className="text-lg text-gray-200" key={p._id} value={p.array}>
                      {p.name}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8  xl:items-center ">
            <button
              className=" shadow-md shadow-gray-500 w-full xl:w-[70%] 2xl:w-full text-center text-xl px-4 py-2 rounded-lg  border-2 border-red-600 bg-red-600 text-white hover:scale-95 transition "
              onClick={() => window.location.reload()}
            >
              Clear Filters
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center 2xl:w-[75vw] text-white">
          <h1 className="text-center text-5xl mb-6">All Products</h1>
          <div className="flex  flex-col gap-4">
            <h1 className="text-4xl ">Watches</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16 ">
              {products?.map((p) => (
                <div
                  onClick={() => navigate(`/product/${p._id}`)}
                  className="flex flex-col items-center justify-between h-full border-none  shadow-xl  hover:scale-95 hover:-translate-y-1 transition duration-300 hover:cursor-pointer text-black bg-white rounded-2xl"
                  key={p._id}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                    className="w-full max-h-[65%]  shadow-sm shadow-gray-400 border-none rounded-tl-2xl rounded-tr-2xl "
                  />
                  <div className="flex flex-col justify-between  w-full px-3 py-4 relative">
                    <div className="relative">
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
                        className="shadow-md shadow-gray-400 border-2 border-yellow-600 rounded-md text-xl p-3 bg-yellow-600 text-white hover:scale-95 transition duration-300"
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
          <div className="mt-4">
            {products && products.length < total && (
              <button
                className=" hover:scale-95  shadow-lg w-full text-center text-xl mt-5 px-4 py-2 rounded-lg  border-2 border-blue-600 bg-blue-600 text-white transition"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading" : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
