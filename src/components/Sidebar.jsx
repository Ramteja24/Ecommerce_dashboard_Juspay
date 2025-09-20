import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiPieChart,
  FiShoppingBag,
  FiFolder,
  FiBook,
  FiUser,
  FiSettings,
  FiFileText,
} from "react-icons/fi";

function Item({ to, icon: Icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "flex items-center gap-3 p-2 rounded-lg text-sm transition-colors " +
        (isActive
          ? "bg-gray-100 font-semibold text-blue-600"
          : "text-gray-700 hover:bg-gray-50")
      }
    >
      <Icon />
      <span>{children}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-72 border-r bg-white h-screen sticky top-0 p-6">
      {/* Logo / Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-pink-300 flex items-center justify-center text-white">
          👤
        </div>
        <div>
          <div className="text-sm font-semibold">DashHive</div>
          <div className="text-xs text-gray-400">Product</div>
        </div>
      </div>

      {/* Dashboards */}
      <div className="text-xs text-gray-400 mb-3">Dashboards</div>
      <nav className="space-y-1 mb-6">
        <Item to="/" icon={FiPieChart}>
          Default
        </Item>
        <Item to="/ecommerce" icon={FiShoppingBag}>
          eCommerce
        </Item>
        <Item to="/projects" icon={FiFolder}>
          Projects
        </Item>
        <Item to="/courses" icon={FiBook}>
          Online Courses
        </Item>
      </nav>

      {/* Pages */}
      <div className="text-xs text-gray-400 mb-2">Pages</div>
      <nav className="space-y-1">
        <Item to="/profile" icon={FiUser}>
          User Profile
        </Item>
        <Item to="/account" icon={FiSettings}>
          Account
        </Item>
        <Item to="/blog" icon={FiFileText}>
          Blog
        </Item>
      </nav>
    </aside>
  );
}
