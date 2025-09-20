import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Tooltip,
} from "recharts";

const projectProgress = [
  { name: "Project X", progress: 85, fill: "#10B981" },
  { name: "Bug Tracker", progress: 45, fill: "#F59E0B" },
  { name: "Analytics Dashboard", progress: 60, fill: "#6366F1" },
];

export default function Projects() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">📂 Projects Overview</h1>

      {/* Project Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "🚀 Project X",
            status: "On Track",
            team: "Team Alpha",
            deadline: "Nov 15, 2025",
            progress: 85,
            color: "bg-green-500",
          },
          {
            title: "🐞 Bug Tracker",
            status: "Delayed",
            team: "QA Team",
            deadline: "Oct 28, 2025",
            progress: 45,
            color: "bg-yellow-500",
          },
          {
            title: "📊 Analytics Dashboard",
            status: "In Progress",
            team: "Data Team",
            deadline: "Dec 10, 2025",
            progress: 60,
            color: "bg-indigo-500",
          },
        ].map((proj, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{proj.title}</h2>
            <p className="text-sm text-gray-500 mb-1">👥 {proj.team}</p>
            <p className="text-sm text-gray-500 mb-1">📅 {proj.deadline}</p>
            <p
              className={`inline-block px-3 py-1 text-xs rounded-full text-white mb-3 ${proj.color}`}
            >
              {proj.status}
            </p>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full transition-all duration-700"
                style={{
                  width: `${proj.progress}%`,
                  backgroundColor: proj.color.replace("bg-", "#"),
                }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-gray-600">
              Progress: <span className="font-semibold">{proj.progress}%</span>
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">📈 Project Completion</h3>
        <div className="h-64">
          <ResponsiveContainer>
            <RadialBarChart
              innerRadius="20%"
              outerRadius="90%"
              data={projectProgress}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={15}
                background
                clockWise
                dataKey="progress"
                isAnimationActive={true}
                animationDuration={1200}
              />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">📝 Recent Updates</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-green-500">✅</span>
            <p>
              Project X released <strong>v2.1 update</strong> with performance
              improvements.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500">🐞</span>
            <p>
              Bug Tracker logged <strong>12 new issues</strong> this week, under
              review by QA team.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500">⚙️</span>
            <p>
              Analytics Dashboard integrated with <strong>real-time API</strong>{" "}
              for live data sync.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
