import React from "react";

const CardHeader = ({ title, icon: Icon, children, className = "" }) => (
  <div
    className={`p-4 border-b border-app flex items-center justify-between ${className}`}
  >
    <div className="flex items-center gap-3">
      {Icon && <Icon className="w-6 h-6 text-app-muted" />}
      <h3 className="text-lg font-semibold text-app">{title}</h3>
    </div>
    <div>{children}</div>
  </div>
);

export default CardHeader;
