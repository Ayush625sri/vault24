import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
const Dashboard = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout title={'Dashboard'}>
        <div className="flex mb-8">
				<UserMenu />
				<div className="flex flex-col w-full mt-20 mx-10 p-10 pt-4 h-fit border-2 shadow-gray-800 shadow-lg">
					<h1 className="text-2xl bold">
						Name : {auth?.user?.name}
					</h1>
					<h1 className="text-2xl bold">
						Email : {auth?.user?.email}
					</h1>
					<h1 className="text-2xl bold">
						Address : {auth?.user?.address}
					</h1>
					
				</div>
			</div>
    </Layout>
  )
}

export default Dashboard