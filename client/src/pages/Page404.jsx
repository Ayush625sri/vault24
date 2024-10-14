import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Page404 = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div className="h-[95vh] flex flex-col items-center justify-center text-3xl text-white font-mono">
        <h1 className="text-5xl md:text-8xl  font-bold ">404</h1>
        <h3 className="p-2 mb-16">Oops ! Page Not Found</h3>
        <NavLink
          to="/"
          className="bg-gray-900 text-white hover:bg-white hover:text-gray-800 hover:scale-95 shadow-md shadow-gray-400  px-4 py-3 border-gray-900 border-2 rounded-2xl text-xl tranistion duration-300"
        >
          Go Back To Home Page
        </NavLink>
      </div>
    </Layout>
  );
};

export default Page404;
