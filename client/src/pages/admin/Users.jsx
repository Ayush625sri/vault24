import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Users = () => {
	const [auth, setAuth] = useAuth();
	const [users, setUsers] = useState([]);

	const getAllUsers = async () => {
		try {
			const { data } = await axios.get(`/api/v1/auth/users/all`);
			setUsers(data?.users);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (auth?.token) getAllUsers();
	}, [auth?.token]);
	return (
		<Layout title={"Dashboard - Users"}>
			<div className="flex mb-8">
				<AdminMenu />
				<div className="flex flex-col w-full mt-6 mx-10 p-10 pt-4 h-fit  border-2 shadow-gray-400 shadow-xl ">
					<div className="flex justify-center">
						<h1 className="text-5xl bold">Users</h1>
					</div>
					<table className="mt-8 ">
						<thead className="border-b-2 ">
							<tr>
							<th scope="col" className="text-3xl pb-4 font-medium">Name</th>
							<th scope="col" className="text-3xl pb-4 font-medium">Role</th>
							<th scope="col" className="text-3xl pb-4 font-medium">Email</th>
							<th scope="col" className="text-3xl pb-4 font-medium">Phone</th>
							<th scope="col" className="text-3xl pb-4 font-medium">Address</th>
							</tr>
						</thead>
						{/* <hr className="my-4" />/ */}
						{users?.map((u, i) => (
							<tbody
							key={i}
							className="border-b-2 "
							>
								<tr>

								<td className="text-2xl py-4 font-normal text-center">{u.name}</td>
								<td className="text-2xl py-4 font-normal text-center">{u?.role == '0' ? 'User' : 'Admin'}</td>
								<td className="text-2xl py-4 font-normal text-center">{u.email}</td>
								<td className="text-2xl py-4 font-normal text-center">{u.phone}</td>
								<td className="text-2xl py-4 font-normal text-center">{u.address}</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			</div>
		</Layout>
	);
};

export default Users;
