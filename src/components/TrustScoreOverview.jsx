// TrustScoreOverview.jsx
import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import TrustScoreDonut from "./TrustScoreDonut";
import { Shield } from "lucide-react";
import { initialTrustScoreData } from "../data/mockData";

const TrustScoreOverview = () => (
  <Card className="flex flex-col border border-slate-100 hover:border-slate-200 transition-colors">
    <CardHeader
      title="Trust Score Overview"
      icon={Shield}
      className="bg-slate-50/50 dark:bg-slate-800/30"
    />
    <div className="p-4 flex-grow">
      <TrustScoreDonut data={initialTrustScoreData} />
      <div className="mt-4 space-y-2 text-sm">
        {initialTrustScoreData.breakdown.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {item.name}
              </span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default TrustScoreOverview;
