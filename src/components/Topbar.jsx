import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="text-sm text-gray-500">Dashboards / Default</div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input placeholder="Search" className="pl-8 pr-3 py-2 rounded-lg border text-sm" />
          <FiSearch className="absolute left-2 top-2 text-gray-400" />
        </div>
        <button className="p-2 rounded-lg border bg-white"><FiBell /></button>
        <div className="w-9 h-9 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
