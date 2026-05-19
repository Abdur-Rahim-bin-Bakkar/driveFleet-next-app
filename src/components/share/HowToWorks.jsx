import React from "react";
import { FaSearch, FaCar, FaKey } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Search Your Car",
      desc: "Browse available cars by type, price, and location easily.",
      icon: <FaSearch />,
    },
    {
      title: "Book Instantly",
      desc: "Select your preferred car and confirm booking in seconds.",
      icon: <FaCar />,
    },
    {
      title: "Enjoy Your Ride",
      desc: "Pick up your car and enjoy a smooth and safe journey.",
      icon: <FaKey />,
    },
  ];

  return (
    <section className="py-16 px-5 md:px-10 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#36ADA3]">
          How DriveFleet Works
        </h2>
        <p className="text-gray-600 mt-2">
          Simple steps to book your dream car in minutes.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border"
          >
            <div className="text-[#36ADA3] text-4xl flex justify-center mb-4">
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {index + 1}. {step.title}
            </h3>

            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;