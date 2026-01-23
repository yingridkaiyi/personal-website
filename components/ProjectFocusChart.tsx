"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Machine Learning", value: 35, color: "#CF6DFC" }, // lf-purple
  { name: "Data Engineering", value: 25, color: "#C1BFFF" }, // lf-lavender
  { name: "Product Analytics", value: 25, color: "#BDB96A" }, // lf-green
  { name: "Visualization", value: 15, color: "#7a7742" }, // lf-dark-green
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
            contentStyle={{ borderRadius: '12px', border: 'none', backgroundColor: '#FDFBD4', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#4a4a4a' }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
