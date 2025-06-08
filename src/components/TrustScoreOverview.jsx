import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import TrustScoreDonut from "./TrustScoreDonut";
import { Shield } from "lucide-react";
import { initialTrustScoreData } from "../data/mockData";

// Amazon brand orange for accents
const AMAZON_ORANGE = "#FF9900";

const TrustScoreOverview = () => (
  <Card className="flex flex-col border border-app bg-app-card rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
    <CardHeader
      title="Trust Score Overview"
      icon={Shield}
      className="bg-app-table-header border-b border-app rounded-t-2xl"
    />
    <div className="p-6 flex-grow">
      <TrustScoreDonut data={initialTrustScoreData} />
      <div className="mt-6 space-y-2 text-sm">
        {initialTrustScoreData.breakdown.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-[color:var(--color-bg)] transition-colors"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full shadow"
                style={{
                  backgroundColor: item.color,
                  border: `2px solid ${AMAZON_ORANGE}`,
                }}
              ></div>
              <span className="text-app font-medium">{item.name}</span>
            </div>
            <span className="font-bold text-app">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default TrustScoreOverview;
