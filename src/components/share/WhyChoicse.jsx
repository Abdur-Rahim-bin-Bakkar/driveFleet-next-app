import React from "react";
import { FaCar, FaMoneyBillWave, FaShieldAlt, FaMapMarkerAlt, FaHeadset, FaBolt } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      title: "Wide Range of Cars",
      desc: "Choose from economy, SUV, sedan, and luxury cars for every need.",
      icon: <FaCar />,
    },
    {
      title: "Affordable Pricing",
      desc: "Best daily rental prices with no hidden charges.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Secure Booking",
      desc: "Safe and verified booking system with user protection.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Easy Pickup Locations",
      desc: "Multiple pickup points across major cities.",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "24/7 Support",
      desc: "We are always ready to help you anytime.",
      icon: <FaHeadset />,
    },
    {
      title: "Fast Process",
      desc: "Quick booking and instant confirmation system.",
      icon: <FaBolt />,
    },
  ];

  return (
    <section className="py-16 px-5 md:px-10 bg-gray-50 text-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#36ADA3]">
          Why Choose DriveFleet
        </h2>
        <p className="text-gray-600 mt-2">
          A better way to rent cars with comfort, safety and affordability.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-[#36ADA3] text-3xl mb-3">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;