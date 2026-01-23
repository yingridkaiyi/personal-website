"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "Data Analysis",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Machine Learning",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "Product Design",
    A: 86,
    fullMark: 150,
  },
  {
    subject: "Frontend Dev",
    A: 99,
    fullMark: 150,
  },
  {
    subject: "UX Research",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "Statistics",
    A: 110,
    fullMark: 150,
  },
];

export default function SkillChart() {
  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name="My Skills"
            dataKey="A"
            stroke="#2563eb"
            strokeWidth={3}
            fill="#3b82f6"
            fillOpacity={0.6}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#1f2937', fontWeight: 600 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}




