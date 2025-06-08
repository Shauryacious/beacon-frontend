import React from "react";

const CardHeader = ({ title, icon: Icon, children }) => (
  <div className="p-4 border-b border-slate-200/80 dark:border-slate-700/50 flex items-center justify-between">
    <div className="flex items-center gap-3">
      {Icon && <Icon className="w-6 h-6 text-slate-500 dark:text-slate-400" />}
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
        {title}
      </h3>
    </div>
    <div>{children}</div>
  </div>
);

export default CardHeader;
