import React from "react";
import { FiCpu, FiCode, FiLayout } from "react-icons/fi";

export default function Blog() {
  const posts = [
    {
      title: "How AI is Changing Web Development",
      date: "Sep 12, 2025",
      author: "Carter",
      excerpt: "AI tools are streamlining frontend workflows, automating repetitive tasks, and improving developer productivity.",
      tags: ["AI", "Web Dev", "Future"],
      icon: <FiCpu className="text-indigo-600 text-5xl" />
    },
    {
      title: "Top 10 React Best Practices",
      date: "Aug 28, 2025",
      author: "Admin",
      excerpt: "From hooks to folder structure, these tips will help you write cleaner and scalable React code.",
      tags: ["React", "JavaScript"],
      icon: <FiCode className="text-green-600 text-5xl" />
    },
    {
      title: "Building Dashboards with TailwindCSS",
      date: "Aug 10, 2025",
      author: "Simon",
      excerpt: "Learn how to build responsive and modern dashboards using TailwindCSS utility classes.",
      tags: ["Tailwind", "UI/UX", "Frontend"],
      icon: <FiLayout className="text-blue-600 text-5xl" />
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Latest Blog Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 hover:shadow-lg transition flex flex-col items-start"
          >
            <div className="mb-4">{post.icon}</div>
            <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              {post.date} • {post.author}
            </p>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button className="mt-4 text-blue-600 hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
