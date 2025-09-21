import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiPieChart,
  FiShoppingBag,
  FiFolder,
  FiBook,
  FiUser,
  FiSettings,
  FiFileText,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

function Item({ to, icon: Icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all " +
        (isActive
          ? "text-blue-600 font-medium border-l-4 border-blue-600 bg-blue-50"
          : "text-gray-600 hover:text-gray-800 hover:bg-gray-50")
      }
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <aside className="w-64 border-r bg-white h-screen sticky top-0 p-6 space-y-8">
      {/* Logo / Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
          B
        </div>
        <div>
          <div className="text-base font-semibold">ByeWind</div>
          <div className="text-xs text-gray-400">Dashboard</div>
        </div>
      </div>

      {/* Favorites */}
      <div>
        <p className="text-xs uppercase text-gray-400 mb-2">Favorites</p>
        <nav className="space-y-1">
          <Item to="/overview" icon={FiPieChart}>
            Overview
          </Item>
          <Item to="/projects" icon={FiFolder}>
            Projects
          </Item>
        </nav>
      </div>

      {/* Dashboards */}
      <div>
        <p className="text-xs uppercase text-gray-400 mb-2">Dashboards</p>
        <nav className="space-y-1">
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
      </div>

      {/* Pages */}
      <div>
        <p className="text-xs uppercase text-gray-400 mb-2">Pages</p>
        <nav className="space-y-1">
          {/* User Profile with Arrow Toggle */}
          <div className="flex items-center justify-between">
            {/* Clicking here goes to /profile */}
            <Item to="/profile" icon={FiUser}>
              User Profile
            </Item>
            {/* Clicking arrow only expands submenu */}
            <button
              onClick={() => setOpenProfile(!openProfile)}
              className="text-gray-500 hover:text-gray-800 p-1"
            >
              {openProfile ? (
                <FiChevronDown className="w-4 h-4" />
              ) : (
                <FiChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Submenu */}
          {openProfile && (
            <div className="ml-8 mt-1 space-y-1">
              <Item to="/profile/overview">Overview</Item>
              <Item to="/profile/projects">Projects</Item>
              <Item to="/profile/campaigns">Campaigns</Item>
              <Item to="/profile/documents">Documents</Item>
              <Item to="/profile/followers">Followers</Item>
            </div>
          )}

          <Item to="/account" icon={FiSettings}>
            Account
          </Item>
          <Item to="/blog" icon={FiFileText}>
            Blog
          </Item>
        </nav>
      </div>
    </aside>
  );
}
