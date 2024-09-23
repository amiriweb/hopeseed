// src/components/EnvironmentalDataCard.js
import React from "react";
import "./EnvironmentalDataCard.css";

const EnvironmentalDataCard = ({ label, value, unit }) => {
  return (
    <div className="environmental-card">
      <div className="environmental-card__content">
        <div className="environmental-card__label">
          <h3>{label}</h3>
          <p>Current</p>
        </div>
        <div className="environmental-card__value">
          <span>{value}</span>
          <span>{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalDataCard;
