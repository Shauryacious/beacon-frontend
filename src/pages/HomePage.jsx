import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TrustScoreOverview from "../components/TrustScoreOverview";
import RealTimeAlertFeed from "../components/RealTimeAlertFeed";
import RiskRankingTable from "../components/RiskRankingTable";
import HistoricalTrendAnalysis from "../components/HistoricalTrendAnalysis";
import KeyMetricCard from "../components/KeyMetricCard";
import FraudNetworkVisualization from "../components/FraudNetworkVisualization";
import { AlertTriangle, Archive, DollarSign } from "lucide-react";

export default function HomePage() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light"; // Default to light mode
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        className={`transition-all duration-300 pt-16 ${
          isSidebarOpen ? "pl-64" : "pl-20"
        }`}
      >
        <Header theme={theme} setTheme={setTheme} />
        <main className="px-4 sm:px-6 pb-8">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Last data refresh:{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Just now
            </span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-6 lg:col-span-1">
              <TrustScoreOverview />
              <RealTimeAlertFeed />
            </div>
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <KeyMetricCard
                  icon={AlertTriangle}
                  title="High-Risk Sellers"
                  value="12"
                  change="+2"
                  changeType="negative"
                />
                <KeyMetricCard
                  icon={Archive}
                  title="Open Cases"
                  value="34"
                  change="-5"
                  changeType="positive"
                />
                <KeyMetricCard
                  icon={DollarSign}
                  title="Value at Risk"
                  value="$1.2M"
                  change="+$50k"
                  changeType="negative"
                />
              </div>
              <RiskRankingTable />
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                <HistoricalTrendAnalysis />
                <div className="xl:col-span-2">
                  <FraudNetworkVisualization />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
