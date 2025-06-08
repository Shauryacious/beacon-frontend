import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { Users } from "lucide-react";

const FraudNetworkVisualization = () => (
  <Card className="flex flex-col">
    <CardHeader title="Fraud Network" icon={Users} />
    <div className="p-4 flex-grow flex items-center justify-center text-slate-500 dark:text-slate-400">
      <style>{`
        .node { transition: all 0.2s ease-in-out; }
        .node:hover { transform: scale(1.2); cursor: pointer; }
        .node:hover + .node-text { opacity: 1; transform: translateY(-2px); font-weight: bold; }
        .node-text { transition: all 0.2s ease-in-out; opacity: 0; fill: #e2e8f0; pointer-events: none; }
      `}</style>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 150"
        className="opacity-80"
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
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(100, 116, 139, 0.7)" />
          </marker>
        </defs>
        {/* Edges */}
        <line
          x1="42"
          y1="75"
          x2="88"
          y2="75"
          stroke="rgba(100, 116, 139, 0.5)"
          strokeWidth="1"
          markerEnd="url(#arrow)"
        />
        <line
          x1="112"
          y1="75"
          x2="158"
          y2="75"
          stroke="rgba(100, 116, 139, 0.5)"
          strokeWidth="1"
          markerEnd="url(#arrow)"
        />
        <path
          d="M 40 65 Q 100 50, 95 40"
          stroke="rgba(100, 116, 139, 0.5)"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrow)"
        />
        <path
          d="M 160 85 Q 100 100, 105 110"
          stroke="rgba(100, 116, 139, 0.5)"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrow)"
        />
        <path
          d="M 165 85 C 130 100, 130 50, 165 65"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          fill="none"
        />

        {/* Nodes with hover interaction */}
        <g>
          <circle cx="30" cy="75" r="12" fill="#ef4444" className="node" />
          <text
            x="30"
            y="55"
            textAnchor="middle"
            fontSize="6"
            className="node-text"
          >
            FastShip
          </text>
          <text
            x="30"
            y="78"
            textAnchor="middle"
            fontSize="6"
            fill="white"
            className="pointer-events-none"
          >
            S1
          </text>
        </g>
        <g>
          <circle cx="100" cy="30" r="10" fill="#3b82f6" className="node" />
          <text
            x="100"
            y="12"
            textAnchor="middle"
            fontSize="6"
            className="node-text"
          >
            B09R2D98B7
          </text>
          <text
            x="100"
            y="33"
            textAnchor="middle"
            fontSize="5"
            fill="white"
            className="pointer-events-none"
          >
            P1
          </text>
        </g>
        <g>
          <circle cx="100" cy="120" r="10" fill="#3b82f6" className="node" />
          <text
            x="100"
            y="142"
            textAnchor="middle"
            fontSize="6"
            className="node-text"
          >
            B07XJ8C8F5
          </text>
          <text
            x="100"
            y="123"
            textAnchor="middle"
            fontSize="5"
            fill="white"
            className="pointer-events-none"
          >
            P2
          </text>
        </g>
        <g>
          <circle cx="170" cy="75" r="12" fill="#ef4444" className="node" />
          <text
            x="170"
            y="55"
            textAnchor="middle"
            fontSize="6"
            className="node-text"
          >
            ElectroSource
          </text>
          <text
            x="170"
            y="78"
            textAnchor="middle"
            fontSize="6"
            fill="white"
            className="pointer-events-none"
          >
            S2
          </text>
        </g>
        <g>
          <circle cx="100" cy="75" r="8" fill="#f59e0b" className="node" />
          <text
            x="100"
            y="93"
            textAnchor="middle"
            fontSize="6"
            className="node-text"
          >
            Return Addr. 1
          </text>
          <text
            x="100"
            y="78"
            textAnchor="middle"
            fontSize="5"
            fill="white"
            className="pointer-events-none"
          >
            RA1
          </text>
        </g>
      </svg>
    </div>
  </Card>
);

export default FraudNetworkVisualization;
