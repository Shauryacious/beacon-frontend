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
import { fetchTrustScore, fetchAlerts, fetchTrends, fetchRiskRanking } from "../api/dashboardApi";

const rel = (t) => {
  if (!t) return "";
  const s = Math.max(0, (Date.now() - new Date(t)) / 1000);
  if (s < 60) return "Just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
};

export default function HomePage() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light"; // Default to light mode
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [trust, setTrust] = useState(null);
  const [alerts, setAlerts] = useState(null);
  const [trends, setTrends] = useState(null);
  const [risk, setRisk] = useState([]);

  useEffect(() => {
    fetchTrustScore().then((r) => setTrust(r.data)).catch(() => {});
    fetchAlerts().then((r) => setAlerts(r.data.map((a, i) => ({ id: i, ...a, time: rel(a.time) })))).catch(() => {});
    fetchTrends().then((r) => setTrends(r.data)).catch(() => {});
    fetchRiskRanking().then((r) => setRisk(r.data)).catch(() => {});
  }, []);

  const highRisk = risk.filter((p) => p.trustScore < 50).length;
  const openCases = risk.filter((p) => (p.flags || []).length > 0).length;

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
              <TrustScoreOverview data={trust || undefined} />
              <RealTimeAlertFeed alerts={alerts || undefined} />
            </div>
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <KeyMetricCard
                  icon={AlertTriangle}
                  title="High-Risk Sellers"
                  value={String(highRisk || 0)}
                  change={highRisk ? `+${highRisk}` : "0"}
                  changeType="negative"
                />
                <KeyMetricCard
                  icon={Archive}
                  title="Open Cases"
                  value={String(openCases || 0)}
                  change={`${risk.length} listings`}
                  changeType="positive"
                />
                <KeyMetricCard
                  icon={DollarSign}
                  title="Avg Trust Score"
                  value={trust ? `${trust.score}/100` : "—"}
                  change={trust && trust.score < 60 ? "at risk" : "healthy"}
                  changeType={trust && trust.score < 60 ? "negative" : "positive"}
                />
              </div>
              <RiskRankingTable />
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                <HistoricalTrendAnalysis data={trends || undefined} />
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
