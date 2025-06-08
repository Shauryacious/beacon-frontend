// TrustScoreDonut.jsx
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const TrustScoreDonut = ({ data }) => {
  const { score, breakdown } = data;

  const getScoreColor = (s) => {
    if (s > 80) return "text-green-600 dark:text-green-400";
    if (s > 50) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="relative h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={breakdown}
            cx="50%"
            cy="50%"
            innerRadius="65%"
            outerRadius="90%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {breakdown.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="outline-none"
                strokeWidth={0}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              borderColor: "#e2e8f0",
              borderRadius: "0.5rem",
              color: "#1e293b",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            itemStyle={{ color: "#1e293b" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
          Overall Score
        </span>
        <span
          className={`text-5xl font-bold ${getScoreColor(
            score
          )} drop-shadow-sm`}
        >
          {score}
        </span>
      </div>
    </div>
  );
};

export default TrustScoreDonut;
