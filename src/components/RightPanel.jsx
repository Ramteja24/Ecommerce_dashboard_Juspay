import React from "react";

export default function RightPanel() {
  return (
    <div className="w-80 p-5 space-y-8 bg-gray-50">
      {/* Notifications */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Notifications</h3>
          <button className="text-xs text-blue-500 hover:underline">View all</button>
        </div>
        <ul className="space-y-4 text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-lg">
              🔔
            </div>
            <div>
              <p className="font-medium text-gray-800">You have a bug that needs…</p>
              <p className="text-xs text-gray-400">Just now</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-lg">
              👤
            </div>
            <div>
              <p className="font-medium text-gray-800">New user registered</p>
              <p className="text-xs text-gray-400">59 minutes ago</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-lg">
              🐞
            </div>
            <div>
              <p className="font-medium text-gray-800">Bug reported in dashboard</p>
              <p className="text-xs text-gray-400">12 hours ago</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-lg">
              📩
            </div>
            <div>
              <p className="font-medium text-gray-800">Andi Lane subscribed to you</p>
              <p className="text-xs text-gray-400">Today, 11:59 AM</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Activities */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Activities</h3>
          <button className="text-xs text-blue-500 hover:underline">View all</button>
        </div>
        <ul className="space-y-4 text-sm text-gray-700">
          {[
            { img: 1, text: "Commented on a post", time: "Just now" },
            { img: 2, text: "Released a new version", time: "59 minutes ago" },
            { img: 3, text: "Submitted a bug", time: "12 hours ago" },
            { img: 4, text: "Modified data in a page", time: "Today, 11:59 AM" },
            { img: 5, text: "Deleted a project page", time: "Feb 2, 2023" },
          ].map((a, i) => (
            <li key={i} className="flex items-start gap-3">
              <img
                src={`https://i.pravatar.cc/36?img=${a.img}`}
                alt=""
                className="w-9 h-9 rounded-full border"
              />
              <div>
                <p className="font-medium text-gray-800">{a.text}</p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Contacts</h3>
          <button className="text-xs text-blue-500 hover:underline">View all</button>
        </div>
        <ul className="space-y-3 text-sm text-gray-700">
          {[
            "Natali Craig",
            "Drew Cano",
            "Orlando Diggs",
            "Andi Lane",
            "Kate Morrison",
            "Koray Okumus",
          ].map((name, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/36?img=${i + 10}`}
                  alt=""
                  className="w-9 h-9 rounded-full border"
                />
                <span className="text-gray-800">{name}</span>
              </div>
              <button className="text-xs px-3 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100">
                Message
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
