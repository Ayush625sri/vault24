import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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
	useEffect(() => {
		getAllProducts();
	}, []);
	return (
		<Layout title="Dashboard - All Products">
			<div className="flex pb-16 ">
				<AdminMenu />
				<div className="flex flex-col w-full mt-6 mx-10 p-10 pt-6 h-fit  border-2 shadow-gray-400 shadow-xl ">
					<div className="flex justify-center ">
						<h1 className="text-5xl bold">All Products</h1>
					</div>
					<div className="  grid grid-cols-3  w-full ">
						{products?.map((p) => (
							<Link
								to={`/dashboard/admin/product/${p._id}`}
								className=" border-2  mx-7 my-6 shadow-md shadow-gray-400"
								key={p._id}
							>
								<div className="flex flex-col items-center justify-between h-full">
									<img
										src={`/api/v1/product/product-photo/${p._id}`}
										alt={p.name}
										className="w-full h-[75%] border shadow-sm shadow-gray-500"
									/>
									<div className="flex flex-col h-[25%] w-full px-3 pt-3">
										<h3 className="font-bold text-xl ">
											{p.name}
										</h3>
										<p className="text-lg">
											{p.description}
										</p>
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
