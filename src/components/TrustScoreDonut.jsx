import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const TrustScoreDonut = ({ data }) => {
  const { score, breakdown } = data;

  const getScoreColor = (s) => {
    if (s > 80) return "text-green-500";
    if (s > 50) return "text-yellow-500";
    return "text-red-500";
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
                className="focus:outline-none"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              borderColor: "rgba(51, 65, 85, 0.5)",
              borderRadius: "0.75rem",
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-slate-500 dark:text-slate-400 text-sm">
          Overall Score
        </span>
        <span className={`text-6xl font-bold ${getScoreColor(score)}`}>
          {score}
        </span>
      </div>
    </div>
  );
};

export default TrustScoreDonut;
