import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth";
const UserMenu = () => {

	const [auth,setAuth] = useAuth()

	return (
		<div className="flex flex-col w-1/6 text-center m-10 mt-8">
			<h4 className="text-4xl bold">Dashboard</h4>

			<div className="flex flex-col mt-3">
				<NavLink
					id="profile"
					className="text-2xl p-3 bg-gray-100 border-2 border-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 :gb-gray-900"
					to="/dashboard/user/profile"
				>
					Profile
				</NavLink>
				{!(auth?.user?.role >0) &&<NavLink
					id="orders"
					className="text-2xl p-3 bg-gray-100 border-2 border-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 :gb-gray-900"
					to="/dashboard/user/orders"
				>
					Orders
				</NavLink>}
				
			</div>
		</div>
	);
};

export default UserMenu;
