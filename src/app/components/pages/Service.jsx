"use client";

import { motion } from "framer-motion";
import { FaDownload, FaUserPlus, FaClock } from "react-icons/fa";

const Service = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-white py-16 px-6 md:px-12">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Our services/products are trusted by industry leaders
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
          {[
            "videohive",
            "codecanyon",
            "graphicriver",
            "themeforest",
            "videohive",
            "codecanyon",
            "themeforest",
          ].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 justify-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="text-gray-700 font-medium capitalize">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-md mx-auto"
        >
          <div className="absolute -top-7 -left-7 w-full h-full bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-md z-0"></div>

          <div className="relative bg-white p-8 rounded-2xl shadow-2xl z-10 space-y-6">
            <h4 className="font-semibold text-gray-900 text-xl">
              Overall time used
            </h4>
            <p className="text-gray-500 text-sm">
              Here&apos;s we show data about your effective working hours
            </p>

            <div className="flex justify-between text-center text-sm font-semibold text-gray-700">
              <div>
                <p className="text-2xl font-bold">36h</p>
                <p>Total hrs</p>
              </div>
              <div>
                <p className="text-2xl font-bold">32h 20m</p>
                <p>Efc. time</p>
              </div>
              <div>
                <p className="text-2xl font-bold">3h 4m</p>
                <p>Non-efc.</p>
              </div>
              <div>
                <p className="text-2xl font-bold">95%</p>
                <p>Productivity</p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="mt-6 flex items-end justify-between h-32">
              {[4, 6, 10, 8, 7, 5, 2].map((height, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-1">
                  <div
                    className="w-4 bg-blue-500 rounded-t-full"
                    style={{ height: `${height * 10}px` }}
                  />
                  <div className="w-4 bg-purple-300 rounded-t-full h-2" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Simplify scheduling processes for all tasks
          </h2>
          <p className="text-gray-500 text-lg">
            Coca is an effortlessly intuitive, lightweight solution for tracking
            hours and projects, designed for easy adoption and daily use, with a
            focus on lightning-fast performance.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-full">
                <FaDownload size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-lg text-gray-900">
                  Download for free via any device
                </h5>
                <p className="text-sm text-gray-500">
                  Easily download the free Coca app on any device anytime
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-full">
                <FaUserPlus size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-lg text-gray-900">
                  Create your account in minutes
                </h5>
                <p className="text-sm text-gray-500">
                  Create a secure account in minutes with essential information
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-full">
                <FaClock size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-lg text-gray-900">
                  Start tracking time with just one click
                </h5>
                <p className="text-sm text-gray-500">
                  Track time manually or automatically and monitor hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
