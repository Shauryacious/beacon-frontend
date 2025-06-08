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
          textColor: "text-[color:var(--color-badge-low-text)]",
          bgColor: "bg-[color:var(--color-badge-low)]",
          borderColor: "border-[color:var(--color-badge-low-text)]",
        };
      case "Medium Risk":
        return {
          icon: AlertTriangle,
          textColor: "text-[color:var(--color-badge-medium-text)]",
          bgColor: "bg-[color:var(--color-badge-medium)]",
          borderColor: "border-[color:var(--color-badge-medium-text)]",
        };
      case "Low Risk":
        return {
          icon: AlertTriangle,
          textColor: "text-[color:var(--color-badge-high-text)]",
          bgColor: "bg-[color:var(--color-badge-high)]",
          borderColor: "border-[color:var(--color-badge-high-text)]",
        };
      default:
        return {
          icon: CheckCircle,
          textColor: "text-[color:var(--color-badge-high-text)]",
          bgColor: "bg-[color:var(--color-badge-high)]",
          borderColor: "border-[color:var(--color-badge-high-text)]",
        };
    }
  };

  return (
    <Card className="flex flex-col border-app bg-app-card shadow-sm rounded-b-xl overflow-hidden">
      <CardHeader
        title="Real-Time Alerts"
        icon={Bell}
        className="border-b border-app bg-app-table-header"
      >
        <button className="p-2 rounded-md hover:bg-[color:var(--color-bg)] text-app-muted hover:text-app transition-colors">
          <Filter className="w-5 h-5" />
        </button>
      </CardHeader>
      <div className="p-4 flex-grow overflow-y-auto h-96 no-scrollbar">
        <div className="flex flex-col gap-3">
          {alertFeedData.map((alert) => {
            const {
              icon: Icon,
              textColor,
              bgColor,
              borderColor,
            } = getAlertStyle(alert.type);
            return (
              <div
                key={alert.id}
                className={`flex items-start gap-3 p-3 rounded-lg border ${borderColor} ${bgColor} transition-colors hover:bg-[color:var(--color-bg)]`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${textColor}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-app font-medium truncate">
                    {alert.message}
                  </p>
                  <span className="text-xs text-app-muted mt-1 block">
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
