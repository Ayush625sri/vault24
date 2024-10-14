import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(`/api/v1/auth/orders`);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Dashboard - Orders"}>
      <div className="flex flex-col xl:flex-row pt-10 md:pt-28  font-mono">
        <UserMenu />
        <div className="flex flex-col xl:w-full xl:mt-20 p-4 md:p-10 pt-4 h-fit text-white ">
          <h1 className="text-5xl bold text-center ">All Orders</h1>
          <div className="table">
            <div className=" xl:mx-20 lg:my-8  border-1">
              {orders?.map((o, i) => {
                return (
                  <div key={i}>
                    <table className="w-full text-center my-2 border-2 ">
                      <thead>
                        <tr className="text-xl h-12 ">
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Orders</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-lg h-10">
                          <td>{i + 1}</td>
                          <td>{o?.status}</td>

                          <td>{o?.buyer?.name}</td>
                          <td>{moment(o?.createdAt).fromNow()}</td>
                          <td>&#8377; {o?.payment?.params?.transaction?.amount || o?.payment?.transaction.amount}</td>
                          {/* {console.log(o?.payment)} */}
                          <td>{o?.payment.success ? "Success" : "Failed"}</td>
                          <td>{o?.products?.length}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex flex-col text-black">
                      {o?.products?.map((p) => (
                        <div
                          className="mb-2 flex items-center justify-between pr-20 bg-gray-100 border  shadow-lg shadow-gray-400"
                          key={p._id}
                        >
                          <div className="flex gap-6 lg:gap-16  bg-gray-100">
                            <img
                              src={`/api/v1/product/product-photo/${p._id}`}
                              alt={p.name}
                              className="w-32 h-32 lg:h-auto lg:w-64  border-none"
                            />
                            <div className="flex flex-col justify-around bg-gray-100 py-2 px-6 ">
                              <div className="">
                                <h1 className="text-2xl md:text-3xl mb-2 font-bold">
                                  {p.name}
                                </h1>
                                <h1 className="text-lg mb lg:mb-4">
                                  {p.description}
                                </h1>
                              </div>
                              <div className="mt-3 flex gap-8 items-center justify-between">
                                <h1 className="text-3xl font-bold text-green-800 ">
                                  &#8377;{p.price}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
