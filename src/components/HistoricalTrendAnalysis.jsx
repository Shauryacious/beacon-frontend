import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { Activity } from "lucide-react";
import { historicalTrendData } from "../data/mockData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HistoricalTrendAnalysis = () => (
  <Card className="lg:col-span-3 flex flex-col">
    <CardHeader title="Historical Trend Analysis" icon={Activity}>
      <input
        type="date"
        defaultValue="2023-10-26"
        className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 rounded-md p-1.5 text-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </CardHeader>
    <div className="p-4 flex-grow h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={historicalTrendData}
          margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(128, 128, 128, 0.2)"
          />
          <XAxis
            dataKey="name"
            stroke="rgb(156 163 175)"
            tick={{ fontSize: 12 }}
          />
          <YAxis yAxisId="left" stroke="#3b82f6" tick={{ fontSize: 12 }} />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#ef4444"
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              borderColor: "rgba(51, 65, 85, 0.5)",
              borderRadius: "0.75rem",
              color: "#fff",
            }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="trustScore"
            stroke="#3b82f6"
            strokeWidth={2}
            name="Trust Score"
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="alerts"
            stroke="#ef4444"
            strokeWidth={2}
            name="Alerts"
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export default HistoricalTrendAnalysis;
