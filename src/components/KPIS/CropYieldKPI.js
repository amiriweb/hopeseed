// src/components/KPIs/CropYieldKPI.js
import React from "react";

const CropYieldKPI = ({ cropYield }) => {
  return (
    <div className="kpi-card">
      <h3>Current Crop Yield</h3>
      <p>{cropYield} tons</p>
    </div>
  );
};

export default CropYieldKPI;
