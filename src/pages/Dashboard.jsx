import React from "react";
import Metrics from "../components/Metrics";
import RightPanel from "../components/RightPanel";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";

export default function DashboardPage() {
  const salesData = [
    { name: "Direct", value: 300.56, color: "#111827" },
    { name: "Affiliate", value: 135.18, color: "#10B981" },
    { name: "Sponsored", value: 154.02, color: "#6366F1" },
    { name: "E-mail", value: 48.96, color: "#3B82F6" },
  ];

  const projectionsData = [
    { month: "Jan", Projection: 4000, Actual: 3800 },
    { month: "Feb", Projection: 5000, Actual: 5200 },
    { month: "Mar", Projection: 6000, Actual: 5900 },
    { month: "Apr", Projection: 7000, Actual: 7200 },
    { month: "May", Projection: 6500, Actual: 6400 },
    { month: "Jun", Projection: 8000, Actual: 7800 },
  ];

  const revenueData = [
    { month: "Jan", Current: 10000, Previous: 12000 },
    { month: "Feb", Current: 18000, Previous: 15000 },
    { month: "Mar", Current: 9000, Previous: 14000 },
    { month: "Apr", Current: 15000, Previous: 10000 },
    { month: "May", Current: 20000, Previous: 18000 },
    { month: "Jun", Current: 25000, Previous: 21000 },
  ];

  const products = [
    { name: "ASOS Ridley High Waist", price: 79.49, qty: 82, amount: 6518.18 },
    { name: "Marco Lightweight Shirt", price: 128.5, qty: 37, amount: 4754.5 },
    { name: "Half Sleeve Shirt", price: 39.99, qty: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, qty: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, qty: 64, amount: 1965.81 },
  ];

  const locationData = [
    { city: "New York", value: 72000 },
    { city: "San Francisco", value: 39000 },
    { city: "Sydney", value: 25000 },
    { city: "Singapore", value: 61000 },
  ];

  return (
    <div className="p-6 bg-gray-60 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Left Side */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">eCommerce</h2>

          {/* Metrics + Projections beside each other */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <Metrics />
            </div>
            <div className="col-span-12 lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">
                Projections vs Actuals
              </h3>
              <div style={{ height: 200 }}>
                <ResponsiveContainer>
                  <BarChart data={projectionsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="Projection"
                      fill="#cde9ffff"
                      radius={[6, 6, 0, 0]}
                    />
                    <Bar
                      dataKey="Actual"
                      fill="#88b9e9ff"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Revenue + Revenue by Location */}
          <div className="grid grid-cols-12 gap-6">
            {/* Revenue */}
            <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Revenue</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-black"></span>
                    <span>Current Week</span>
                    <span className="font-semibold">$58,211</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-300"></span>
                    <span>Previous Week</span>
                    <span className="font-semibold">$68,768</span>
                  </span>
                </div>
              </div>

              <div style={{ height: 240 }}>
                <ResponsiveContainer>
                  <LineChart data={revenueData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E5E7EB"
                      vertical={false}
                    />
                    <XAxis dataKey="month" tick={{ fill: "#9CA3AF" }} />
                    <YAxis
                      tick={{ fill: "#9CA3AF" }}
                      tickFormatter={(val) => `${(val / 1000).toFixed(0)}M`}
                    />
                    <Tooltip />
                    {/* Current Week: solid black */}
                    <Line
                      type="monotone"
                      dataKey="Current"
                      stroke="#000000"
                      strokeWidth={3}
                      dot={false}
                    />
                    {/* Previous Week: dashed blue */}
                    <Line
                      type="monotone"
                      dataKey="Previous"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Revenue by Location */}
            <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Revenue by Location
              </h3>

              {/* Background world map with blue tint */}
              <div className="relative h-40 mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
                  alt="World map"
                  className="w-full h-full object-contain opacity-20"
                />

                {/* Location markers */}
                <div className="absolute top-6 left-10 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-8 left-16 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-16 right-24 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-20 right-16 w-2 h-2 bg-black rounded-full"></div>
              </div>

              {/* Revenue list */}
              <div className="space-y-4 text-sm">
                {locationData.map((loc, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-gray-700 mb-1">
                      <span>{loc.city}</span>
                      <span>{(loc.value / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1 rounded">
                      <div
                        className="bg-blue-500 h-1 rounded"
                        style={{
                          width: `${(loc.value / 72000) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Selling Products + Total Sales */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Top Selling Products
              </h3>
              <table className="w-full text-left text-gray-700 text-sm">
                <thead>
                  <tr className="border-b text-gray-500">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Price</th>
                    <th className="pb-2">Quantity</th>
                    <th className="pb-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, idx) => (
                    <tr
                      key={idx}
                      className="border-b last:border-0 hover:bg-gray-50"
                    >
                      <td className="py-3">{p.name}</td>
                      <td className="py-3">${p.price}</td>
                      <td className="py-3">{p.qty}</td>
                      <td className="py-3">${p.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Total Sales
              </h3>
              <div className="h-64">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={salesData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={50}
                    >
                      {salesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {salesData.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-gray-600"
                  >
                    <span>
                      <span
                        className="inline-block w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: s.color }}
                      ></span>
                      {s.name}
                    </span>
                    <span>${s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
