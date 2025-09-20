import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Tooltip,
} from "recharts";

const courseProgress = [
  { name: "React Fundamentals", progress: 80, fill: "#10B981" },
  { name: "Advanced Node.js", progress: 45, fill: "#6366F1" },
  { name: "UI/UX Design Principles", progress: 20, fill: "#F59E0B" },
];

export default function OnlineCourses() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">🎓 Online Courses</h1>

      {/* Course Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "React Fundamentals",
            instructor: "John Doe",
            duration: "12h 30m",
            progress: 80,
            color: "bg-green-500",
          },
          {
            title: "Advanced Node.js",
            instructor: "Jane Smith",
            duration: "15h 10m",
            progress: 45,
            color: "bg-indigo-500",
          },
          {
            title: "UI/UX Design Principles",
            instructor: "Alex Johnson",
            duration: "8h 20m",
            progress: 20,
            color: "bg-yellow-500",
          },
        ].map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
            <p className="text-sm text-gray-500 mb-1">
              👨‍🏫 {course.instructor}
            </p>
            <p className="text-sm text-gray-500 mb-3">⏳ {course.duration}</p>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full transition-all duration-700"
                style={{
                  width: `${course.progress}%`,
                  backgroundColor: course.color.replace("bg-", "#"),
                }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-gray-600">
              Progress:{" "}
              <span className="font-semibold">{course.progress}%</span>
            </p>
          </div>
        ))}
      </div>

      {/* Overall Progress Radial Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">📊 Overall Learning Progress</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <RadialBarChart
              innerRadius="20%"
              outerRadius="90%"
              data={courseProgress}
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

      {/* Learning Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">📅 Recent Learning Activity</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-green-500">✅</span>
            <p>
              Completed <strong>Hooks in React</strong> lesson from{" "}
              <em>React Fundamentals</em>.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500">📖</span>
            <p>
              Started <strong>Middleware & Authentication</strong> in{" "}
              <em>Advanced Node.js</em>.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-yellow-500">🎨</span>
            <p>
              Reviewed <strong>Color Psychology</strong> module in{" "}
              <em>UI/UX Design Principles</em>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
