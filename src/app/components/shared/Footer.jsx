import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Big C background */}
      <div className="absolute top-[95%] left-3/4 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[850px] font-bold text-gray-300 opacity-10 pointer-events-none select-none z-0">
        C
      </div>

      {/* Main footer content */}
      <div className="relative z-10 p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-20">
          <div className="max-w-4xl">
            <h2 className="text-[64px] font-bold mb-4 leading-tight">
              Are you prepared to collaborate with us?
            </h2>
          </div>
          <button className="bg-[#23F0A9] hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-full mt-6 md:mt-0">
            Get Start a Project →
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-sm mt-16 mb-20 mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="bg-[#494E6B] p-3 rounded-full">
              <CiLocationOn />
            </span>
            1929, Bancangan, Sambit, Suroboyo, Wakanda
          </div>
          <div className="flex items-center text-white gap-2">
            <span className="bg-[#494E6B] p-3 rounded-full">
              <HiOutlineMail />
            </span>
            hello@cocapay.co
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-xs max-w-7xl mx-auto">
          <p>© Coca Pay by Sans Brothers</p>
          <div className="flex gap-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
