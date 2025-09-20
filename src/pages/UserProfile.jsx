import React from "react";

export default function UserProfile() {
  const user = {
    name: "Simon Carter",
    email: "simon.carter@example.com",
    role: "Full Stack Developer",
    joined: "March 2023",
    location: "San Francisco, USA",
    bio: "Full Stack Developer with a passion for creating scalable web apps and beautiful UI/UX experiences. Skilled in JavaScript, React, Node.js, and cloud services.",
    avatar: "https://ui-avatars.com/api/?name=Simon+Carter&background=2563eb&color=fff&size=128",
    skills: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    social: {
      github: "https://github.com/simoncarter",
      linkedin: "https://linkedin.com/in/simoncarter",
      twitter: "https://twitter.com/simoncarter",
    },
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Cover Banner */}
      <div className="h-40 bg-gradient-to-r from-indigo-600 to-blue-400 relative">
        <div className="absolute -bottom-12 left-8">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-6 mt-12 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
          <p className="text-sm text-gray-400">{user.location}</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Follow
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
            Message
          </button>
        </div>
      </div>

      {/* Bio */}
      <div className="px-6 pb-6 text-gray-700">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p>{user.bio}</p>
      </div>

      {/* Profile Sections */}
      <div className="border-t px-6 py-6 grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Joined:</span> {user.joined}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <ul className="space-y-1 text-blue-600 text-sm">
              <li>
                <a href={user.social.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={user.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={user.social.twitter} target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column (Activity/Projects) */}
        <div className="md:col-span-2 space-y-6">
          {/* Recent Activity */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>✅ Completed "E-commerce Dashboard Redesign"</li>
              <li>🚀 Deployed "Portfolio Website" on Vercel</li>
              <li>💡 Exploring AI integrations with React</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg hover:shadow">
                <h4 className="font-medium">E-commerce Dashboard</h4>
                <p className="text-sm text-gray-500">
                  React + Tailwind admin dashboard for online store.
                </p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow">
                <h4 className="font-medium">AI Chatbot</h4>
                <p className="text-sm text-gray-500">
                  NLP-powered chatbot built with Python & React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
