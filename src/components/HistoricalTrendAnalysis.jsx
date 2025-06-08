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
  <Card className="lg:col-span-3 flex flex-col rounded-2xl shadow-md border border-app bg-app-card">
    <CardHeader
      title="Historical Trend Analysis"
      icon={Activity}
      className="bg-app-table-header border-b border-app rounded-t-2xl"
    >
      <input
        type="date"
        defaultValue="2023-10-26"
        className="bg-app-card border-app rounded-md p-1.5 text-sm text-app focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)]"
      />
    </CardHeader>
    <div className="p-4 flex-grow h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={historicalTrendData}
          margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="name"
            stroke="var(--color-muted)"
            tick={{ fontSize: 13, fill: "var(--color-muted)" }}
          />
          <YAxis
            yAxisId="left"
            stroke="var(--color-primary)"
            tick={{ fontSize: 13, fill: "var(--color-primary)" }}
            axisLine={{ stroke: "var(--color-primary)" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="var(--color-badge-low-text)"
            tick={{ fontSize: 13, fill: "var(--color-badge-low-text)" }}
            axisLine={{ stroke: "var(--color-badge-low-text)" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-card)",
              borderColor: "var(--color-accent)",
              borderRadius: "0.75rem",
              color: "var(--color-text)",
              boxShadow: "0 2px 8px 0 rgba(35,47,62,0.08)",
            }}
            labelStyle={{
              color: "var(--color-accent)",
              fontWeight: 600,
            }}
            itemStyle={{
              color: "var(--color-text)",
            }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: 8,
              color: "var(--color-muted)",
              fontWeight: 500,
              fontSize: 13,
            }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="trustScore"
            stroke="var(--color-primary)"
            strokeWidth={3}
            name="Trust Score"
            dot={{
              r: 5,
              fill: "var(--color-accent)",
              stroke: "var(--color-primary)",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              fill: "var(--color-accent)",
              stroke: "var(--color-primary)",
              strokeWidth: 2,
            }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="alerts"
            stroke="var(--color-badge-low-text)"
            strokeWidth={3}
            name="Alerts"
            dot={{
              r: 5,
              fill: "var(--color-accent)",
              stroke: "var(--color-badge-low-text)",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              fill: "var(--color-accent)",
              stroke: "var(--color-badge-low-text)",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export default HistoricalTrendAnalysis;
