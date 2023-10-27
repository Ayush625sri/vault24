import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link, useNavigate } from "react-router-dom";
const Categories = () => {
	const categories = useCategory();
    const navigate = useNavigate()
	return (
		<Layout title={"All Categories"}>
			<h1 className="text-5xl text-center mt-12">All Categories</h1>
			<hr className="my-8" />
			<div className="flex justify-center items-center h-[50vh] ">

				<div className="grid grid-cols-4 gap-8">
					{categories.map((c, idx) => (
						<div className="">
							<button 
                            key={idx}
								className="active:scale-95 shadow-lg shadow-gray-400 w-full text-center text-xl px-28 py-16 rounded-lg  border-2 border-gray-800 bg-gray-800 text-white hover:text-gray-800 hover:bg-white "
                                onClick={()=>navigate(`/category/${c.slug}`)}

                            >
								{c.name}    
							</button>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Categories;
