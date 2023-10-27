import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/search'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [values, setValues] = useSearch()
	const navigate = useNavigate()
  return (
    <Layout title={'Search Results'}> 
    <div className='flex'>
        <div className='text-center'>
            <h1 className='text-lg'>Search Results</h1>
            <h6 className='text-md'>{values?.results.length < 1 ? "No Products Found" : `Found ${values?.results.length}`}</h6>

            <div className="grid grid-cols-3 gap-16 mx-8 my-10">
							{values?.results?.map((p) => (
								<div
									className="flex flex-col items-center justify-between h-full border-2 "
									key={p._id}
								>
									<img
										src={`/api/v1/product/product-photo/${p._id}`}
										alt={p.name}
										className="w-full max-h-[65%] border shadow-sm shadow-gray-500"
									/>
									<div className="flex flex-col justify-between  w-full px-3 py-4">
										<div className="">
											<h3 className="font-bold text-xl ">
												{p.name}
											</h3>
											<p className="text-lg">
												{p.description.substring(0, 30)}
											</p>
											<p className="text-lg">
												Price : $ {p.price}
											</p>
											<p className="text-lg">
												Stock : {p.quantity}
											</p>
										</div>
										<div className="flex gap-2 mt-2 justify-between ">
											<button
											onClick={() =>
												navigate(
													`/product/${p._id}`
												)
											}
											 className="border-2 border-blue-600 rounded-md text-xl px-2 py-1 bg-blue-600 text-white hover:text-blue-600 hover:bg-white">
												More Details
											</button>
											<button className="border-2 border-gray-600 rounded-md text-xl px-2 py-1 bg-gray-600 text-white hover:text-gray-600 hover:bg-white">
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
        </div>
    </div>
        
    </Layout>
  )
}

export default Search