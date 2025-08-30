// /components/Chart.jsx
"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example growth data
const data = [
  { month: "Jan", success: 20 },
  { month: "Feb", success: 40 },
  { month: "Mar", success: 60 },
  { month: "Apr", success: 80 },
  { month: "May", success: 120 },
  { month: "Jun", success: 160 },
  { month: "Jul", success: 200 },
];

export default function Chart() {
  return (
    <div className="w-full h-80 bg-white/5 rounded-2xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-white mb-4">
        Business Success Growth
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "1px solid #444",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="success"
            stroke="#38bdf8"
            strokeWidth={3}
            dot={{ r: 5, fill: "#38bdf8" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
