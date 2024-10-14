import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About - Vault24"}>
      <div className="pt-20 pb-16 px-20 md:pt-20 font-mono flex flex-col md:p-10 md:text-justify 2xl:flex-row w-full  items-center justify-center gap-10">
        <img
          className="rounded-xl hidden md:block md:w-[50vw] lg:block border-gray-900 border-4"
          src="/images/about.jpeg"
          alt="About Vault24"
        />
        <div className="mx-4 xl:mx-auto">
          <h2 className="text-2xl xl:text-5xl uppercase text-center bg-gray-900 text-white p-4 rounded-lg mb-4 lg:hidden xl:block">
            About Us
          </h2>
          <p className="text-xl mb-4 text-gray-900">
            Welcome to Vault24, your premier online destination for exquisite watches, clocks, and unique antiques. Our mission is to provide collectors, enthusiasts, and casual shoppers with a carefully curated selection of timepieces and treasures that tell a story.
          </p>
          <p className="text-xl mb-4 text-gray-900">
            At Vault24, we believe that every item has a history. Founded by a passionate team of watch aficionados and antique lovers, our platform is designed to connect people with the craftsmanship, elegance, and nostalgia that timeless pieces can bring. From vintage watches to ornate grandfather clocks, we pride ourselves on offering products that are not just functional but also serve as conversation starters.
          </p>
          <p className="text-xl mb-4 text-gray-900">
            We meticulously curate our inventory to ensure that each piece reflects quality and artistry. Whether you’re searching for a classic wristwatch, a unique wall clock, or a rare antique that adds character to your home, you’ll find it at Vault24.
          </p>
          <p className="text-xl mb-4 text-gray-900">
            At Vault24, customer satisfaction is our top priority. We are committed to providing an exceptional shopping experience through quality assurance, knowledgeable customer support, and secure shopping options.
          </p>
          <p className="text-xl mb-4 text-gray-900">
            We invite you to join our community of collectors and enthusiasts. Follow us on social media for the latest arrivals, special promotions, and stories behind our featured items. At Vault24, we’re more than just an e-commerce platform; we’re a community that shares a passion for the art of timekeeping and the beauty of antiques.
          </p>
          <p className="text-xl mb-4 text-gray-900">
            Thank you for choosing Vault24. We look forward to helping you find your next cherished piece!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
