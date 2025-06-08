import React from "react";

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
