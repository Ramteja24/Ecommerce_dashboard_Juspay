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
  // Sales data for donut chart
  const salesData = [
    { name: "Direct", value: 300.56, color: "#111827" }, // black
    { name: "Affiliate", value: 135.18, color: "#10B981" }, // green
    { name: "Sponsored", value: 154.02, color: "#6366F1" }, // indigo
    { name: "E-mail", value: 48.96, color: "#3B82F6" }, // blue
  ];

  // Revenue by Location
  const locationData = [
    { name: "USA", value: 42000, color: "#3B82F6" },
    { name: "Europe", value: 31000, color: "#10B981" },
    { name: "Asia", value: 22000, color: "#F59E0B" },
    { name: "Others", value: 15000, color: "#EF4444" },
  ];

  // Projections vs Actuals data
  const projectionsData = [
    { month: "Jan", Projection: 4000, Actual: 3800 },
    { month: "Feb", Projection: 5000, Actual: 5200 },
    { month: "Mar", Projection: 6000, Actual: 5900 },
    { month: "Apr", Projection: 7000, Actual: 7200 },
    { month: "May", Projection: 6500, Actual: 6400 },
    { month: "Jun", Projection: 8000, Actual: 7800 },
  ];

  // Revenue data
  const revenueData = [
    { day: "Mon", Current: 8200, Previous: 9100 },
    { day: "Tue", Current: 9300, Previous: 8600 },
    { day: "Wed", Current: 7200, Previous: 7900 },
    { day: "Thu", Current: 8800, Previous: 9400 },
    { day: "Fri", Current: 10200, Previous: 11300 },
    { day: "Sat", Current: 9500, Previous: 10500 },
    { day: "Sun", Current: 7500, Previous: 8700 },
  ];

  // Product data for table
  const products = [
    { name: "ASOS Ridley High Waist", price: 79.49, qty: 82, amount: 6518.18 },
    { name: "Marco Lightweight Shirt", price: 128.5, qty: 37, amount: 4754.5 },
    { name: "Half Sleeve Shirt", price: 39.99, qty: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, qty: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, qty: 64, amount: 1965.81 },
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column (Main Dashboard) */}
      <div className="col-span-8 space-y-6">
        <h2 className="text-xl font-semibold">eCommerce</h2>

        {/* Metrics + Revenue by Location */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Metrics */}
          <div className="col-span-2">
            <Metrics />
          </div>

          {/* Revenue by Location */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue by Location</h3>
            <div className="h-40">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={locationData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={70}
                    innerRadius={40}
                    cx="50%"
                    cy="50%"
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  >
                    {locationData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {locationData.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex justify-between text-gray-600"
                >
                  <span>
                    <span
                      className="inline-block w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: loc.color }}
                    ></span>
                    {loc.name}
                  </span>
                  <span>${loc.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projections vs Actuals */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="font-semibold mb-4">Projections vs Actuals</h3>
            <div style={{ height: 240 }}>
              <ResponsiveContainer>
                <BarChart data={projectionsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Projection"
                    fill="#6366F1"
                    animationDuration={1500}
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    dataKey="Actual"
                    fill="#10B981"
                    animationDuration={1500}
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Line Chart */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Revenue</h3>
              <p className="text-sm text-gray-400">
                Current Week $58,211 • Previous Week $68,768
              </p>
            </div>
            <div style={{ height: 240 }}>
              <ResponsiveContainer>
                <LineChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Current"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    animationDuration={1500}
                  />
                  <Line
                    type="monotone"
                    dataKey="Previous"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Products + Sales Donut */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Selling Products */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
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
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-2">{p.name}</td>
                    <td className="py-2">${p.price}</td>
                    <td className="py-2">{p.qty}</td>
                    <td className="py-2">${p.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Sales Donut Chart */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Total Sales</h3>
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
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
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
                <div key={idx} className="flex justify-between text-gray-600">
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

      {/* Right Column (Notifications / Activities / Contacts) */}
      <div className="col-span-4">
        <RightPanel />
      </div>
    </div>
  );
}
