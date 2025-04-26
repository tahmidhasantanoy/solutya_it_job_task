import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Trail = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-green-400 text-white overflow-hidden py-24">
      <div className="absolute top-[65%] left-20 transform -translate-y-1/2 -translate-x-1/4 text-[500px] font-bold text-white opacity-10 pointer-events-none select-none z-0">
        C
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          Are you ready to get started? <br /> Begin your free trial today
        </h2>
        <p className="text-base md:text-lg xl:text-lg mb-8">
          Experience the Possibilities: Start Your Free Trial and Get Started
          Today
        </p>
        <div className="flex justify-center gap-6 text-sm mb-10 flex-wrap">
          <span>Ready for 30 days trial</span>
          <span>|</span>
          <span>Exclusive support</span>
          <span>|</span>
          <span>No fees</span>
        </div>

        {/* Input & Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <div className="flex items-center">
            <div className="relative">
              <HiOutlineMail className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl mx-2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter Email"
                className="pl-10 px-6 py-3 rounded-full text-black focus:outline-none w-full"
              />
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full">
            Request Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trail;
