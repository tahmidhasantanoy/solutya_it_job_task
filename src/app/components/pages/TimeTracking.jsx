// pages/time-tracking.tsx

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const incomeExpensesData = [
  { name: "14 Mar", earnings: 8, labor: 6 },
  { name: "15 Mar", earnings: 9, labor: 5 },
  { name: "16 Mar", earnings: 7, labor: 6 },
  { name: "17 Mar", earnings: 8, labor: 4 },
];

const timeTrackingData = [
  { day: "22", tracking: 3000 },
  { day: "23", tracking: 1000 },
  { day: "24", tracking: 3000 },
  { day: "25", tracking: 1500 },
  { day: "26", tracking: 800 },
  { day: "27", tracking: 2000 },
];

const budgetData = [
  { day: "10", estimation: 700, budget: 750 },
  { day: "11", estimation: 500, budget: 730 },
  { day: "12", estimation: 400, budget: 720 },
  { day: "13", estimation: 300, budget: 700 },
  { day: "14", estimation: 200, budget: 690 },
  { day: "15", estimation: 100, budget: 680 },
];

const TimeTracking = () => {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-blue-500 via-indigo-500 to-green-400 flex flex-col items-center justify-center p-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Improve efficiency through time tracking.
        </h1>
        <p className="text-white text-lg">
          How to overcome common challenges and pitfalls when trying to adopt
          time tracking and efficient work habits, and build sustainable habits
          that lead to lasting success.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-6 mb-16">
        <button className="bg-green-300 hover:bg-green-400 text-green-900 font-semibold px-6 py-3 rounded-full shadow-md">
          Get Trial Project
        </button>
        <button className="flex items-center text-white hover:underline gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.64z" />
          </svg>
          Watch Demo
        </button>
      </div>

      {/* Chart Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold mb-4">Income vs Expenses</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incomeExpensesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" fill="#34d399" radius={[5, 5, 0, 0]} />
                <Bar dataKey="labor" fill="#60a5fa" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Center Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold mb-4">Time Tracking</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeTrackingData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tracking" fill="#34d399" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold mb-4">Time vs Budget</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="estimation"
                  stroke="#34d399"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="budget"
                  stroke="#60a5fa"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="flex flex-col md:flex-row gap-12 items-center text-white text-center">
        <div>
          <h4 className="text-3xl font-bold mb-2">15+</h4>
          <p className="text-lg">Years of experience</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold mb-2">84k</h4>
          <p className="text-lg">Customers worldwide</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold mb-2">140k+</h4>
          <p className="text-lg">Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default TimeTracking;
