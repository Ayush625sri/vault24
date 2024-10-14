import React from "react";
import { IoIosMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact - Vault24"}>
      <div className="font-mono px-16 pt-0 flex flex-col  lg:text-justify xl:flex-row w-full h-[100vh] items-center justify-center gap-12 text-gray-900">
        <img
          className="w-[50vw] rounded-xl hidden md:block md:w-[60vw] lg:block border-gray-900 border-4"
          src="/images/contactus.jpeg"
          alt="Contact Us"
        />
        <div className="mx-auto">
          <h2 className="text-5xl uppercase text-center bg-gray-900 text-white p-4 rounded-lg mb-4">
            Contact Us
          </h2>
          <p className="text-xl mb-4">
            For any queries or information about products, feel free to call us anytime.
          </p>
          <p className="text-xl mb-5">We are available 24/7</p>

          <div className="flex flex-col gap-3">
            <p className="text-2xl flex items-center gap-2">
              <IoIosMail aria-hidden="true" /> <span>: vault24@ecommerce.com</span>
            </p>
            <p className="text-2xl flex items-center gap-2">
              <LuPhoneCall aria-hidden="true" /> <span>: 012-91xxxxxxx</span>
            </p>
            <p className="text-2xl flex items-center gap-2">
              <TfiHeadphoneAlt aria-hidden="true" /> <span>: 1800-0000-xxxx-xxxx </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
