import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Dummy data
const salesTrend = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 1200 },
  { month: "May", sales: 900 },
  { month: "Jun", sales: 1500 },
];

const categoryData = [
  { category: "Electronics", value: 1200 },
  { category: "Fashion", value: 900 },
  { category: "Home", value: 600 },
  { category: "Beauty", value: 400 },
];

const revenueDist = [
  { name: "Website", value: 3200, color: "#6366F1" },
  { name: "Mobile App", value: 2100, color: "#10B981" },
  { name: "Affiliate", value: 900, color: "#F59E0B" },
  { name: "Retail", value: 500, color: "#EF4444" },
];

export default function Ecommerce() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4">📊 E-commerce Insights</h1>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Orders", value: "1,219", color: "bg-blue-500" },
          { label: "Customers", value: "3,781", color: "bg-green-500" },
          { label: "Revenue", value: "$695", color: "bg-purple-500" },
          { label: "Growth", value: "30.1%", color: "bg-pink-500" },
          { label: "Conversion", value: "4.5%", color: "bg-yellow-500" },
          { label: "Returns", value: "2.1%", color: "bg-red-500" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl text-white shadow-lg transform transition hover:scale-105 ${stat.color}`}
          >
            <p className="text-sm opacity-80">{stat.label}</p>
            <h2 className="text-2xl font-bold mt-1 animate-pulse">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">📈 Sales Trend</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={salesTrend}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  isAnimationActive={true}
                  animationDuration={1200}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Sales Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">🛍️ Category Sales</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={categoryData}>
                <XAxis dataKey="category" stroke="#888" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#10B981"
                  barSize={40}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Revenue Distribution Donut */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">💵 Revenue Distribution</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={revenueDist}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={50}
                isAnimationActive={true}
                animationDuration={1500}
              >
                {revenueDist.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
