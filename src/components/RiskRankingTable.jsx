import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { BarChart2, MoreVertical } from "lucide-react";
import { riskRankingData } from "../data/mockData";

const RiskRankingTable = () => {
  const getScoreColor = (s) => {
    if (s > 80) return "bg-green-500/20 text-green-700 dark:text-green-400";
    if (s > 50) return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
    return "bg-red-500/20 text-red-700 dark:text-red-400";
  };

  return (
    <Card className="lg:col-span-3 flex flex-col">
      <CardHeader title="Seller/Listing Risk Ranking" icon={BarChart2}>
        <button className="px-3 py-1.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 shadow-sm hover:shadow-md transition-all">
          Bulk Action
        </button>
      </CardHeader>
      <div className="flex-grow overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300 sticky top-0">
            <tr>
              <th scope="col" className="p-4">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th scope="col" className="px-6 py-3">
                ASIN
              </th>
              <th scope="col" className="px-6 py-3">
                Seller Name
              </th>
              <th scope="col" className="px-6 py-3">
                Trust Score
              </th>
              <th scope="col" className="px-6 py-3">
                Detected Flags
              </th>
              <th scope="col" className="px-6 py-3">
                Last Updated
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {riskRankingData.map((item) => (
              <tr
                key={item.id}
                className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 border-b dark:border-slate-700"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 font-mono text-xs text-slate-700 dark:text-slate-300">
                  {item.asin}
                </td>
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                  {item.sellerName}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full font-semibold text-xs ${getScoreColor(
                      item.trustScore
                    )}`}
                  >
                    {item.trustScore}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {item.flags.map((flag) => (
                      <span
                        key={flag}
                        className="px-2 py-0.5 text-xs rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200"
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">{item.lastUpdated}</td>
                <td className="px-6 py-4 text-center">
                  <button className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400">
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
};

export default RiskRankingTable;
