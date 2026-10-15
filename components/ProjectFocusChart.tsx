"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Machine Learning", value: 35, color: "#ff6248" }, // coral
  { name: "Data Engineering", value: 25, color: "#00ffd5" }, // aqua
  { name: "Product Analytics", value: 25, color: "#ff3d7f" }, // pink
  { name: "Visualization", value: 15, color: "#39ff14" }, // lime
];

export default function ProjectFocusChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '10px', border: '1px solid var(--raise)', backgroundColor: 'var(--ink)' }}
            itemStyle={{ color: 'var(--text)' }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: 'var(--dim)', fontSize: 13 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
