import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "Customers", value: "3,781", meta: "+11.01%" },
  { title: "Orders", value: "1,219", meta: "-0.03%" },
  { title: "Revenue", value: "$695", meta: "+15.03%" },
  { title: "Growth", value: "30.1%", meta: "+6.08%" },
];

export default function Metrics() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((c, i) => (
        <motion.div key={c.title} whileHover={{ scale: 1.02 }} className={`p-5 rounded-2xl border ${i===0 || i===3 ? "bg-blue-50" : "bg-white"}`}>
          <div className="text-sm text-gray-500">{c.title}</div>
          <div className="text-3xl font-bold mt-2">{c.value}</div>
          <div className="text-sm text-gray-400 mt-1">{c.meta} ⤴</div>
        </motion.div>
      ))}
    </div>
  );
}
