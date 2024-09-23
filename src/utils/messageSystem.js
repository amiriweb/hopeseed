// src/utils/messageSystem.js

// Function to generate messages based on environmental and business metrics
export const generateMessages = (environmentalMetrics, businessMetrics) => {
  const messages = [];

  // Environmental conditions
  if (environmentalMetrics.temp < 5) {
    messages.push(
      "Warning: Low temperatures detected, crops may be at risk of frost damage."
    );
  } else if (environmentalMetrics.temp > 35) {
    messages.push(
      "Warning: High temperatures detected, potential heat stress on crops."
    );
  }

  if (environmentalMetrics.humidity > 90) {
    messages.push(
      "High humidity levels detected, monitor for potential crop diseases."
    );
  }

  if (environmentalMetrics.rainfall < 5) {
    messages.push("Low rainfall detected, consider increasing irrigation.");
  }

  // Production metrics
  if (environmentalMetrics.cropYield < 50) {
    messages.push(
      "Crop yield is below expectations, check environmental conditions."
    );
  }

  // Business metrics
  if (businessMetrics.roi < 0) {
    messages.push(
      "ROI is negative, consider reducing costs or increasing revenue."
    );
  }

  if (businessMetrics.revenue < 5000) {
    messages.push(
      "Low revenue detected, consider optimizing production or increasing sales."
    );
  }

  return messages;
};
