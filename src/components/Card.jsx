import React from "react";

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-app-card border border-app rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
