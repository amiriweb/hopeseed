// src/components/KPIs/GrowthTimeKPI.js
import React from "react";

const GrowthTimeKPI = ({ growthTime }) => {
  return (
    <div className="kpi-card">
      <h3>Current Growth Time</h3>
      <p>{growthTime} days</p>
    </div>
  );
};

export default GrowthTimeKPI;
