import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { useAuth } from "../../context/auth.jsx";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput.jsx";
import useCategory from "../../hooks/useCategory.jsx";
import { Badge } from "antd";
import { useCart } from "../../context/cart.jsx";

const Header = () => {
	const [auth, setAuth] = useAuth();
	const [cart] = useCart();
	const categories = useCategory();
	const handleLogout = () => {
		localStorage.removeItem("auth");
		setAuth({
			...auth,
			user: null,
			token: "",
		});
		toast.success("Logout Successfully");
	};
	const [category, setCategory] = React.useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	return (
		<nav className="flex items-center justify-around lg:justify-between w-full bg-gray-900 lg:w-full p-1 shadow-md shadow-gray-500">
			<div className="flex items-center flex-shrink-0 text-white mr- lg:w-[38%]">
				<HiMiniShoppingBag className="mx-4 text-3xl hover:text-teal-600 hover:rotate-45" />
				<NavLink
					className="font-semibold text-3xl tracking-tight hover:text-teal-600 hover:skew-x-6 hover:-translate-x-2"
					to="/"
				>
					eCommerce App
				</NavLink>
			</div>

			<div className="block lg:hidden lg:w-0">
				<button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-teal-300 hover:border-white">
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className="w-full  block flex-grow lg:flex lg:flex-end lg:items-center lg:justify-between  mx-10">
				<div className="">
					<SearchInput />
				</div>
				<div className="text-xl lg:flex lg:items-center lg:gap-5 ">
					<NavLink
						to="/"
						className="block lg:px-5 lg:py-5 lg:inline lg:text-2xl text-white hover:text-gray-800 hover:bg-white hover:scale-110  "
					>
						Home
					</NavLink>

					<NavLink className="group block lg:px-5 lg:py-5  lg:inline items-center lg:text-2xl text-white bg-gray-900 hover:text-gray-800 hover:bg-white hover:scale-105">
						Categories
						<ul className="mt-5  group-hover:flex group-hover:flex-col group-hover:justify-center hidden w-full absolute right-0 transition-all ease-in-out duration-500 ">
							<li className="text-center text-base clear-both w-full flex justify-center  relative float-left duration-100 text-white bg-gray-800 hover:bg-white hover:text-gray-800 border-2 border-gray-800 hover:cursor-pointer focus-within:gb-white focus-within:text-gray-800 focus-within:cursor-pointer ">
								<NavLink
									className="px-4 py-5 "
									to={`/categories`}
								>
									All Categories
								</NavLink>
							</li>
							{categories.map((c, idx) => (
								<li
									key={idx}
									className="text-center  text-base clear-both w-full flex justify-center  relative float-left duration-100 text-white bg-gray-800 hover:bg-white hover:text-gray-800 border-2 border-gray-800 hover:cursor-pointer focus-within:gb-white focus-within:text-gray-800 focus-within:cursor-pointer "
								>
									<Link
										className="px-4 py-5"
										to={`/category/${c?.slug}`}
									>
										{c.name}
									</Link>
								</li>
							))}
						</ul>
					</NavLink>
					{!auth.user ? (
						<>
							<NavLink
								to="/register"
								className="block lg:px-5 lg:py-5 lg:inline lg:text-2xl text-white hover:text-gray-800 hover:bg-white hover:scale-110"
							>
								Register
							</NavLink>
							<NavLink
								to="/login"
								className="block lg:px-5 lg:py-5 lg:inline lg:text-2xl text-white hover:text-gray-800 hover:bg-white hover:scale-110"
							>
								Login
							</NavLink>
						</>
					) : (
						<NavLink
							to={auth?.user  && `/dashboard/user/profile`}
							className="w-[8.4rem] group block lg:px-8 lg:py-5  lg:inline items-center lg:text-2xl text-white bg-gray-900 hover:text-gray-800 hover:bg-white  hover:scale-105 "
						>
							{auth.user.name[0].toUpperCase() +
								auth.user.name.slice(1)}
							<ul className=" group-hover:flex group-hover:flex-col mt-5 group-hover:justify-center hidden  absolute right-0 transition-all  duration-500 ">
								<li className=" flex justify-center duration-100 text-white bg-gray-800 hover-cursor-pointer  ">
									<NavLink
										to={`/dashboard/${
											auth?.user?.role === 1
												? "admin"
												: "user"
										}`}
										className="block text-lg  px-5 py-5 text-white hover:text-gray-800 hover:bg-white border-gray-800 border-2"
									>
										Dashboard
									</NavLink>
								</li>
								<li className="  flex justify-center duration-100 text-white bg-gray-800  hover:cursor-pointer ">
									<NavLink
										onClick={handleLogout}
										to="/login"
										className="block text-lg px-9 py-5 text-white hover:text-gray-800 hover:bg-white border-gray-800 border-2"
									>
										Logout
									</NavLink>
								</li>
							</ul>
						</NavLink>
					)}
					{cart?.length > 0 ? <Badge
						count={cart?.length}
						showZero
					>
						<NavLink
							to="/cart"
							className="flex items-center  lg:px-2 lg:py-6 lg:inline lg:text-2xl text-white hover:text-gray-800 hover:bg-white   "
						>
							<span>Cart {" "}</span>{cart?.length > 0 &&
							   <BsCart4 className=" text-3xl inline hover:scale-110" />
							}
						</NavLink>
					</Badge> : <NavLink
							to="/cart"
							className="flex items-center  lg:px-2 lg:py-6 lg:inline lg:text-2xl text-white hover:text-gray-800 hover:bg-white   "
						>
							<span>Cart {" "}</span>{cart?.length > 0 &&
							   <BsCart4 className=" text-3xl inline hover:scale-110" />
							}
						</NavLink> }
				</div>
			</div>
		</nav>
	);
};

export default Header;
