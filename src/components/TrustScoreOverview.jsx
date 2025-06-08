import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import TrustScoreDonut from "./TrustScoreDonut";
import { Shield } from "lucide-react";
import { initialTrustScoreData } from "../data/mockData";

const TrustScoreOverview = () => (
  <Card className="flex flex-col">
    <CardHeader title="Trust Score Overview" icon={Shield} />
    <div className="p-4 flex-grow">
      <TrustScoreDonut data={initialTrustScoreData} />
      <div className="mt-4 space-y-2 text-sm">
        {initialTrustScoreData.breakdown.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-slate-600 dark:text-slate-300">
                {item.name}
              </span>
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default TrustScoreOverview;
