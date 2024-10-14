import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <div className="flex flex-col xl:w-3/12 m-10 mt-8 font-mono">
      <h4 className="text-4xl text-center text-white ">Admin Dashboard</h4>

      <div className="flex flex-col mt-3  gap-6">
        <NavLink
          className={` text-2xl p-3 shadow-lg shadow-gray-600 hover:scale-95 bg-gray-100 border-2 border-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition duration-500 rounded-lg  `}
          to="/dashboard/admin/create-category"
        >
          Create Category
        </NavLink>
        <NavLink
          className={` text-2xl p-3 shadow-lg shadow-gray-600 hover:scale-95 bg-gray-100 border-2 border-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition duration-500 rounded-lg  `}
          to="/dashboard/admin/create-product"
        >
          Create Product
        </NavLink>
        <NavLink
          className={` text-2xl p-3 shadow-lg shadow-gray-600 hover:scale-95 bg-gray-100 border-2 border-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition duration-500 rounded-lg  `}
          to="/dashboard/admin/products"
        >
          Products
        </NavLink>
        <NavLink
          className={` text-2xl p-3 shadow-lg shadow-gray-600 hover:scale-95 bg-gray-100 border-2 border-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition duration-500 rounded-lg  `}
          to="/dashboard/admin/orders"
        >
          Orders
        </NavLink>
        <NavLink
          className={` text-2xl p-3 shadow-lg shadow-gray-600 hover:scale-95 bg-gray-100 border-2 border-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition duration-500 rounded-lg  `}
          to="/dashboard/admin/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
