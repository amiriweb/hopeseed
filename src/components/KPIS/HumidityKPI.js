// src/components/KPIs/HumidityKPI.js
import React from "react";

const HumidityKPI = ({ humidity }) => {
  return (
    <div className="kpi-card">
      <h3>Current Humidity</h3>
      <p>{humidity} %</p>
    </div>
  );
};

export default HumidityKPI;
