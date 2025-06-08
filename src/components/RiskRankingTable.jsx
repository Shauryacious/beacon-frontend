import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { BarChart2, MoreVertical } from "lucide-react";
import { riskRankingData } from "../data/mockData";

// Helper for badge color classes
const getScoreBadge = (score) => {
  if (score > 80)
    return "bg-[color:var(--color-badge-high)] text-[color:var(--color-badge-high-text)] border border-transparent";
  if (score > 50)
    return "bg-[color:var(--color-badge-medium)] text-[color:var(--color-badge-medium-text)] border border-transparent";
  return "bg-[color:var(--color-badge-low)] text-[color:var(--color-badge-low-text)] border border-transparent";
};

export default function RiskRankingTable() {
  return (
    <Card className="lg:col-span-3 flex flex-col border-app bg-app-card shadow-sm rounded-b-xl overflow-hidden">
      <CardHeader
        title="Seller/Listing Risk Ranking"
        icon={BarChart2}
        className="border-b border-app bg-app-table-header"
      >
        <button className="px-3 py-1.5 text-sm font-medium text-white bg-[color:var(--color-accent)] rounded-lg hover:bg-yellow-400 focus:ring-2 focus:ring-[color:var(--color-accent)]/50 transition-colors">
          Bulk Action
        </button>
      </CardHeader>
      <div className="flex-grow overflow-x-auto">
        <table className="w-full text-sm text-app border-separate border-spacing-0">
          <thead className="text-xs uppercase bg-app-table-header sticky top-0 z-10">
            <tr>
              <th className="p-4 w-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[color:var(--color-accent)] bg-app-card border-app rounded focus:ring-[color:var(--color-accent)]"
                />
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">ASIN</th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Seller Name
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Trust Score
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Detected Flags
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Last Updated
              </th>
              <th className="px-4 py-3 font-medium text-center whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y border-app">
            {riskRankingData.map((item, idx) => (
              <tr
                key={item.id}
                className={`bg-app-card hover:bg-[color:var(--color-bg)] transition-colors ${
                  idx === riskRankingData.length - 1 ? "last:rounded-b-xl" : ""
                }`}
              >
                <td className="p-4 w-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[color:var(--color-accent)] bg-app-card border-app rounded focus:ring-[color:var(--color-accent)]"
                  />
                </td>
                <td className="px-4 py-3 font-mono text-xs text-app-muted">
                  {item.asin}
                </td>
                <td className="px-4 py-3 font-medium text-app">
                  {item.sellerName}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getScoreBadge(
                      item.trustScore
                    )}`}
                  >
                    {item.trustScore}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.flags.map((flag) => (
                      <span
                        key={flag}
                        className="px-2.5 py-1 text-xs font-medium bg-[color:var(--color-flag-bg)] text-app border border-[color:var(--color-flag-border)] rounded-full"
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-app-muted">{item.lastUpdated}</td>
                <td className="px-4 py-3 text-center">
                  <button className="p-1.5 rounded-md hover:bg-app-table-header text-app-muted hover:text-app transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
