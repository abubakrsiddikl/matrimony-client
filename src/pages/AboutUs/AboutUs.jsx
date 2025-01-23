import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/slider1.jpeg";
import SectionTitle from "../../components/SectionTitle";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-10">
          <SectionTitle heading={"About Us"}></SectionTitle>
          <p className="mt-4 text-lg text-gray-600">
            Building meaningful connections for a lifetime of happiness.
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Image Section */}
          <div>
            <img
              src={bannerImg}
              alt="About Us"
              className="w-96 h-96 rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At <span className="font-bold">Matrimony Platform</span>, we
              strive to connect individuals seeking a meaningful and lifelong
              partnership. With a user-friendly interface, advanced matchmaking
              algorithms, and a commitment to user privacy, we’ve helped
              countless people find their perfect match.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To bring people closer by fostering genuine connections while
              celebrating love, trust, and understanding.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Team Member */}
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/fv4jqnm/myprofile.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Abu Bakr Siddik</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* end banner */}
        <div className="mt-16 bg-blue-600 text-white py-10 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Join Our Community Today!</h2>
          <p className="mt-4 text-lg">
            Take the first step toward finding your perfect match.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
