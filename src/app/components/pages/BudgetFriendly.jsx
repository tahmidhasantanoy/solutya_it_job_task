import React from "react";

const BudgetFriendly = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          An ideal match no matter your budget constraints.
        </h2>

        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="text-gray-600">Per Month</span>
          <div className="bg-green-400 w-14 h-7 rounded-full flex items-center p-1">
            <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
          </div>
          <span className="text-gray-600">Per Year</span>
          <span className="text-green-500 text-sm ml-2">Save 19%</span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Basic Plan */}
        {/* TODO : shadow bootom right */}
        <div className="flex flex-col rounded-2xl shadow-b-r p-8 bg-white w-full max-w-sm">
          <h3 className="text-gray-800 font-semibold text-lg mb-2">
            Basic plan
          </h3>
          <div className="text-3xl font-bold mb-2">
            $10<span className="text-lg font-normal text-gray-600">/mth</span>
          </div>
          <p className="text-gray-500 mb-6">Our most popular plan.</p>

          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full py-2 mb-4">
            Get started
          </button>
          <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold rounded-full py-2 mb-8">
            Chat to sales
          </button>

          <ul className="space-y-3 text-left">
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Access to all basic
              features
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Basic reporting and
              analytics
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Up to 10 individual
              users
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> 20GB individual
              data each user
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Basic chat and
              email support
            </li>
          </ul>
        </div>

        <div className="flex flex-col rounded-2xl shadow-md p-8 bg-white w-full max-w-sm">
          <h3 className="text-gray-800 font-semibold text-lg mb-2">
            Business plan
          </h3>
          <div className="text-3xl font-bold mb-2">
            $20<span className="text-lg font-normal text-gray-600">/mth</span>
          </div>
          <p className="text-gray-500 mb-6">Growing teams up to 20 users.</p>

          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full py-2 mb-4">
            Get started
          </button>
          <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold rounded-full py-2 mb-8">
            Chat to sales
          </button>

          <ul className="space-y-3 text-left">
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Access to all basic
              features
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Basic reporting and
              analytics
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Up to 10 individual
              users
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> 20GB individual
              data each user
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Basic chat and
              email support
            </li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="flex flex-col rounded-2xl shadow-md p-8 bg-white w-full max-w-sm">
          <h3 className="text-gray-800 font-semibold text-lg mb-2">
            Enterprise plan
          </h3>
          <div className="text-3xl font-bold mb-2">
            $40<span className="text-lg font-normal text-gray-600">/mth</span>
          </div>
          <p className="text-gray-500 mb-6">
            Advanced features + unlimited users.
          </p>

          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full py-2 mb-4">
            Get started
          </button>
          <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold rounded-full py-2 mb-8">
            Chat to sales
          </button>

          <ul className="space-y-3 text-left">
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Access to all basic
              features
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Basic reporting and
              analytics
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Up to 10 individual
              users
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> 20GB individual
              data each user
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Basic chat and
              email support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BudgetFriendly;
