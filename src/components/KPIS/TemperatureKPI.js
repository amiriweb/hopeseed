// src/components/KPIs/TemperatureKPI.js
import React from "react";

const TemperatureKPI = ({ temperature }) => {
  return (
    <div className="kpi-card">
      <h3>Current Temperature</h3>
      <p>{temperature} °C</p>
    </div>
  );
};

export default TemperatureKPI;
