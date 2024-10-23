import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
const UserMenu = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div className="flex flex-col xl:w-3/12 text-center mb-3 mt-8 lg:m-10 items-center font-mono  ">
      <h4 className="text-4xl  font-bold  text-white shadow-smbg-clip-text ">Dashboard</h4>

      <div className="flex xl:flex-col mt-3 gap-8 w-[200px]">
        <NavLink
          id="profile"
          className={` text-2xl p-3 shadow-lg shadow-gray-400 bg-white hover:bg-gray-900 hover:text-white border-2 border-gray-500 hover:scale-95 transition duration-500 rounded-lg  `}
          to="/dashboard/user/profile"
        >
          Profile
        </NavLink>

        {!(auth?.user?.role < 0) && (
          <NavLink
            id="orders"
            className={` text-2xl p-3 shadow-lg shadow-gray-400 bg-white hover:bg-gray-900 hover:text-white border-2 border-gray-500 hover:scale-95 transition duration-500 rounded-lg  `}
            to="/dashboard/user/orders"
          >
            Orders
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
