"use client";

import { motion } from "framer-motion";

const GoodUI = () => {
  return (
    <section className="flex flex-col items-center p-8 md:p-16 bg-white">
      <div className="text-center max-w-3xl space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our user-friendly interface allows for <br />
          easy management of tasks
        </h2>
        <p className="text-gray-500 text-lg">
          The Simple Solution to Task Management: Our Interface Offers an Easy{" "}
          <br />
          and Efficient Way to Manage Your Tasks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border rounded-2xl p-6 shadow-md space-y-6"
        >
          <p>Top Clients</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Jonatan Cristy</h4>
                <p className="text-sm text-gray-500">New York</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
              Active
            </span>
          </div>

          <div className="space-y-2 pt-2">
            <h5 className="font-semibold text-lg text-gray-900">
              Manage customer relationships
            </h5>
            <p className="text-sm text-gray-500">
              Improve Customer Satisfaction with Effective Relationship
              Management
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white border rounded-2xl p-6 shadow-md space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-semibold text-gray-900">Jonatan Cristy</h4>
              <p className="text-sm text-gray-500">
                Utilizing Feedback Insights
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h5 className="font-semibold text-lg text-gray-900">
              Get insights from feedback to improve
            </h5>
            <p className="text-sm text-gray-500">
              Utilizing Feedback Insights to Enhance Your Performance and
              Achieve Your Goals
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white border rounded-2xl p-6 shadow-md space-y-6"
        >
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>Copywriting</span>
                <span>5/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>Illustration</span>
                <span>4/7</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "57%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>UX Design</span>
                <span>3/8</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: "37%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <h5 className="font-semibold text-lg text-gray-900">
              Review your hard work&apos;s outcome
            </h5>
            <p className="text-sm text-gray-500">
              Analyzing Your Hard Work’s Outcome: The Key to Continued Growth
              and Success
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoodUI;
