import React from "react";

export default function RightPanel() {
  return (
    <div className="space-y-8 w-100">
      {/* Notifications */}
      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <div className="font-semibold mb-3">Notifications</div>
        <ul className="space-y-4 text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">🔔</div>
            <div>
              <div className="font-medium">You have a bug that needs…</div>
              <div className="text-xs text-gray-400">Just now</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">👤</div>
            <div>
              <div className="font-medium">New user registered</div>
              <div className="text-xs text-gray-400">59 minutes ago</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">🐞</div>
            <div>
              <div className="font-medium">You have a bug that needs…</div>
              <div className="text-xs text-gray-400">12 hours ago</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📩</div>
            <div>
              <div className="font-medium">Andi Lane subscribed to you</div>
              <div className="text-xs text-gray-400">Today, 11:59 AM</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Activities */}
      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <div className="font-semibold mb-3">Activities</div>
        <ul className="space-y-4 text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <img src="https://i.pravatar.cc/30?img=1" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-medium">You have a bug that needs…</div>
              <div className="text-xs text-gray-400">Just now</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <img src="https://i.pravatar.cc/30?img=2" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-medium">Released a new version</div>
              <div className="text-xs text-gray-400">59 minutes ago</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <img src="https://i.pravatar.cc/30?img=3" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-medium">Submitted a bug</div>
              <div className="text-xs text-gray-400">12 hours ago</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <img src="https://i.pravatar.cc/30?img=4" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-medium">Modified A data in Page</div>
              <div className="text-xs text-gray-400">Today, 11:59 AM</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <img src="https://i.pravatar.cc/30?img=5" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-medium">Deleted a page in Project</div>
              <div className="text-xs text-gray-400">Feb 2, 2023</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Contacts */}
      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <div className="font-semibold mb-3">Contacts</div>
        <ul className="space-y-3 text-sm text-gray-700">
          {["Natali Craig", "Drew Cano", "Orlando Diggs", "Andi Lane", "Kate Morrison", "Koray Okumus"].map(
            (name, i) => (
              <li key={i} className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/30?img=${i + 10}`} alt="" className="w-8 h-8 rounded-full" />
                <span>{name}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
