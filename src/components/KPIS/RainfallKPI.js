// src/components/KPIs/RainfallKPI.js
import React from "react";

const RainfallKPI = ({ rainfall }) => {
  return (
    <div className="kpi-card">
      <h3>Current Rainfall</h3>
      <p>{rainfall} mm</p>
    </div>
  );
};

export default RainfallKPI;
