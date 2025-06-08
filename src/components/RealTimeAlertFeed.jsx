import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { Bell, Filter, AlertTriangle, CheckCircle } from "lucide-react";
import { alertFeedData } from "../data/mockData";

const RealTimeAlertFeed = () => {
  const getAlertStyle = (type) => {
    switch (type) {
      case "High Risk":
        return {
          icon: AlertTriangle,
          color: "text-red-500",
          bg: "bg-red-500/10",
        };
      case "Medium Risk":
        return {
          icon: AlertTriangle,
          color: "text-yellow-500",
          bg: "bg-yellow-500/10",
        };
      case "Low Risk":
        return {
          icon: AlertTriangle,
          color: "text-blue-500",
          bg: "bg-blue-500/10",
        };
      default:
        return {
          icon: CheckCircle,
          color: "text-green-500",
          bg: "bg-green-500/10",
        };
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader title="Real-Time Alerts" icon={Bell}>
        <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
          <Filter className="w-5 h-5 text-slate-500 dark:text-slate-400" />
        </button>
      </CardHeader>
      <div className="p-4 flex-grow overflow-y-auto h-96 no-scrollbar">
        <div className="flex flex-col gap-4">
          {alertFeedData.map((alert) => {
            const { icon: Icon, color, bg } = getAlertStyle(alert.type);
            return (
              <div
                key={alert.id}
                className={`flex gap-3 p-3 rounded-lg ${bg} transition-transform hover:scale-[1.02]`}
              >
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${color}`} />
                <div>
                  <p className="text-sm text-slate-800 dark:text-slate-200">
                    {alert.message}
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {alert.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default RealTimeAlertFeed;
