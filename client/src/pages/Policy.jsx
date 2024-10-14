import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Vault24"}>
      <div className="p-20 flex flex-col w-full font-mono text-gray-900">
        <div className="mx-auto">
          <h2 className="text-2xl lg:text-5xl uppercase text-center bg-gray-900 text-white p-4 rounded-lg mb-4">
            Privacy Policy
          </h2>
          <p className="text-xl mb-4">
            At Vault24, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, make purchases, or engage with our services.
          </p>
          <h3 className="text-2xl mt-6 mb-2">Information We Collect</h3>
          <p className="text-xl mb-4">
            We may collect personal information from you in various ways, including when you visit our site, register on the site, place an order, subscribe to our newsletter, or interact with other activities, services, features, or resources we make available. The personal information we may collect includes:
            <ul className="list-disc ml-8 mt-2">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Shipping Address</li>
              <li>Payment Information (processed securely)</li>
            </ul>
          </p>
          <h3 className="text-2xl mt-6 mb-2">How We Use Your Information</h3>
          <p className="text-xl mb-4">
            We may use the information we collect from you in the following ways:
            <ul className="list-disc ml-8 mt-2">
              <li>To process transactions and send you confirmation.</li>
              <li>To improve customer service and respond to your support needs.</li>
              <li>To personalize user experience and improve our website based on your feedback.</li>
              <li>To send periodic emails regarding your order or other products and services.</li>
              <li>To follow up with you after correspondence (live chat, email, or phone inquiries).</li>
            </ul>
          </p>
          <h3 className="text-2xl mt-6 mb-2">Data Protection</h3>
          <p className="text-xl mb-4">
            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
          </p>
          <h3 className="text-2xl mt-6 mb-2">Disclosure of Your Information</h3>
          <p className="text-xl mb-4">
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
          <h3 className="text-2xl mt-6 mb-2">Your Rights</h3>
          <p className="text-xl mb-4">
            You have the right to request copies of your personal information, to rectify any information that you believe is inaccurate or incomplete, and to request that we delete your personal data under certain conditions. If you wish to exercise any of these rights, please contact us.
          </p>
          <h3 className="text-2xl mt-6 mb-2">Changes to This Privacy Policy</h3>
          <p className="text-xl mb-4">
            We may update this Privacy Policy from time to time. When we do, we will revise the updated date at the bottom of this page. We encourage you to periodically review this policy to stay informed about how we are protecting your information.
          </p>
          <h3 className="text-2xl mt-6 mb-2">Contact Us</h3>
          <p className="text-xl mb-4">
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us:
            <ul className="list-disc ml-8 mt-2">
              <li>Email: vault24@ecommerce.com</li>
              <li>Phone: 012-91xxxxxxx</li>
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
