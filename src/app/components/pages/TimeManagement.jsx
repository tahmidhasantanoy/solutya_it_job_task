"use client";

import { motion } from "framer-motion";

const TimeManagement = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      <div className="max-w-lg space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Master the art of <br />
          managing your work <br />
          hours effectively
        </h1>

        <p className="font-semibold text-gray-800">
          Time management is essential for ensuring that you have enough time to
          complete your tasks.
        </p>

        <p className="text-gray-600">
          Time is a crucial element in our lives, helping us to structure and
          organize our daily activities into good habits. By understanding the
          value of time, we can gain valuable experience and develop ourselves.
        </p>

        <a
          href=""
          className="inline-flex items-center text-black font-medium hover:underline"
        >
          Discover More
          <span className="ml-2">→</span>
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mt-12 md:mt-0 w-full max-w-sm"
      >
        <div className="absolute -top-7 -left-7 w-full h-full bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-md z-0"></div>

        <div className="relative bg-white rounded-2xl p-8 shadow-2xl z-10">
          <h3 className="text-center font-medium text-gray-800 mb-6">
            Project scope
          </h3>

          <div className="flex items-center justify-center mb-8">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>

              {/*  Circle */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset="50"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00BFFF" />
                    <stop offset="100%" stopColor="#8A2BE2" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-800">
                <span className="text-xl font-bold">72h 30m</span>
                <span className="text-xs text-gray-500">Total time</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                Branding
              </div>
              <span>17h 30m</span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                User Interface
              </div>
              <span>23h 30m</span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                Illustration
              </div>
              <span>6h 30m</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TimeManagement;
