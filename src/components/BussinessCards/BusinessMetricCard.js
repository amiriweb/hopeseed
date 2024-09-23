// src/components/BusinessMetricCard.js
import React from "react";
import "./BusinessMetricCard.css"; // Import the CSS styles

const BusinessMetricCard = ({ title, value, change, unit }) => {
  const isPositive = change >= 0;

  return (
    <div
      className={`metric-card metric-card--${
        isPositive ? "positive" : "negative"
      }`}
    >
      <div className="metric-card__content">
        <div className="metric-card__info">
          <h4 className="metric-card__title">{title}</h4>
          <p className="metric-card__value">
            {value} {unit}
          </p>
        </div>
        <div className="metric-card__change">KPI</div>
      </div>
    </div>
  );
};

export default BusinessMetricCard;
