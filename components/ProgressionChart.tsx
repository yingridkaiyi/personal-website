"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan 24", skill: 20 },
  { month: "Mar 24", skill: 35 },
  { month: "Jun 24", skill: 45 },
  { month: "Sep 24", skill: 55 },
  { month: "Dec 24", skill: 70 },
  { month: "Mar 25", skill: 85 },
  { month: "Jun 25", skill: 90 },
  { month: "Sep 25", skill: 100 }, // Current
];

export default function ProgressionChart() {
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CF6DFC" stopOpacity={0.8} /> {/* lf-purple */}
              <stop offset="95%" stopColor="#CF6DFC" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#7a7742' }} 
            interval={2}
          />
          <YAxis hide />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', backgroundColor: '#FDFBD4', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
             itemStyle={{ color: '#4a4a4a' }}
          />
          <Area
            type="monotone"
            dataKey="skill"
            stroke="#CF6DFC"
            fillOpacity={1}
            fill="url(#colorSkill)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
