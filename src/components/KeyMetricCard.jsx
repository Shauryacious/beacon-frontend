import React from "react";
import Card from "./Card";

const KeyMetricCard = ({ icon: Icon, title, value, change, changeType }) => {
  const isPositive = changeType === "positive";
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-lg ${
            isPositive ? "bg-green-500/10" : "bg-red-500/10"
          }`}
        >
          <Icon
            className={`w-6 h-6 ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          />
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
          <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {value}
          </h4>
        </div>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
        <span
          className={`font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>{" "}
        vs last week
      </p>
    </Card>
  );
};

export default KeyMetricCard;
