import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { Users } from "lucide-react";

// Color variables for node types
const SELLER_COLOR = "var(--color-accent)";
const PRODUCT_COLOR = "#2563eb";
const ADDRESS_COLOR = "#10b981";
const EDGE_COLOR = "var(--color-border)";
const EDGE_ACCENT = "#f59e42";

const FraudNetworkVisualization = () => (
  <Card className="flex flex-col rounded-xl shadow-lg border border-app bg-app-card">
    <CardHeader
      title="Fraud Network"
      icon={Users}
      className="bg-app-table-header border-b border-app text-app px-6 py-4 rounded-t-xl"
    />
    <div className="p-6 flex-grow flex items-center justify-center text-app-muted bg-app">
      <style>{`
        .node {
          transition: box-shadow 0.2s, filter 0.2s;
          box-shadow: 0 2px 8px 0 rgba(35,47,62,0.08);
        }
        .node:hover {
          box-shadow: 0 0 0 4px var(--color-accent);
          filter: brightness(1.08);
          cursor: pointer;
        }
        .node-label {
          font-size: 10px;
          font-weight: 700;
          fill: var(--color-header);
          opacity: 0.98;
        }
        .node-id {
          font-size: 10px;
          font-weight: 700;
          fill: var(--color-card);
          opacity: 1;
        }
        .dark .node-label,
        .dark .node-id {
          fill: #fff !important;
        }
      `}</style>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 150"
        className="opacity-95"
        style={{ fontFamily: "Amazon Ember, Arial, sans-serif" }}
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            {/* Arrow color matches the edge */}
            <path d="M 0 0 L 10 5 L 0 10 z" fill={EDGE_COLOR} />
          </marker>
          <marker
            id="arrow-accent"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={EDGE_ACCENT} />
          </marker>
        </defs>
        {/* Edges */}
        <line
          x1="46"
          y1="75"
          x2="88"
          y2="75"
          stroke={EDGE_COLOR}
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <line
          x1="112"
          y1="75"
          x2="154"
          y2="75"
          stroke={EDGE_COLOR}
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <path
          d="M 44 65 Q 100 50, 95 40"
          stroke={EDGE_COLOR}
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#arrow)"
        />
        <path
          d="M 156 85 Q 100 100, 105 110"
          stroke={EDGE_COLOR}
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#arrow)"
        />
        <path
          d="M 160 85 C 130 100, 130 50, 160 65"
          stroke={EDGE_ACCENT}
          strokeWidth="2"
          strokeDasharray="3 3"
          fill="none"
          markerEnd="url(#arrow-accent)"
        />
        {/* Nodes */}
        <g>
          <circle
            cx="40"
            cy="75"
            r="16"
            fill={SELLER_COLOR}
            stroke="#b45309"
            strokeWidth="2"
            className="node"
          />
          <text x="40" y="54" textAnchor="middle" className="node-label">
            FastShip
          </text>
          <text x="40" y="80" textAnchor="middle" className="node-id">
            S1
          </text>
        </g>
        <g>
          <circle
            cx="100"
            cy="30"
            r="14"
            fill={PRODUCT_COLOR}
            stroke={SELLER_COLOR}
            strokeWidth="2"
            className="node"
          />
          <text x="100" y="14" textAnchor="middle" className="node-label">
            B09R2D98B7
          </text>
          <text x="100" y="36" textAnchor="middle" className="node-id">
            P1
          </text>
        </g>
        <g>
          <circle
            cx="100"
            cy="120"
            r="14"
            fill={PRODUCT_COLOR}
            stroke={SELLER_COLOR}
            strokeWidth="2"
            className="node"
          />
          <text x="100" y="144" textAnchor="middle" className="node-label">
            B07XJ8C8F5
          </text>
          <text x="100" y="126" textAnchor="middle" className="node-id">
            P2
          </text>
        </g>
        <g>
          <circle
            cx="160"
            cy="75"
            r="16"
            fill={SELLER_COLOR}
            stroke="#b45309"
            strokeWidth="2"
            className="node"
          />
          <text x="160" y="54" textAnchor="middle" className="node-label">
            ElectroSource
          </text>
          <text x="160" y="80" textAnchor="middle" className="node-id">
            S2
          </text>
        </g>
        <g>
          <circle
            cx="100"
            cy="75"
            r="12"
            fill={ADDRESS_COLOR}
            stroke={SELLER_COLOR}
            strokeWidth="2"
            className="node"
          />
          <text x="100" y="97" textAnchor="middle" className="node-label">
            Return Addr. 1
          </text>
          <text x="100" y="81" textAnchor="middle" className="node-id">
            RA1
          </text>
        </g>
      </svg>
    </div>
  </Card>
);

export default FraudNetworkVisualization;
