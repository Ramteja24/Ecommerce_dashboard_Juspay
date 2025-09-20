import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardPage from "./pages/Dashboard";
import Ecommerce from "./pages/Ecommerce";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";

import UserProfile from "./pages/UserProfile";
import Account from "./pages/Account";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">
          <Routes>
            {/* Dashboard section */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />

            {/* Pages section */}
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
