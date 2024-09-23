// src/utils/dataGenerator.js

export const generateEnvironmentalAndBusinessData = () => {
  // Generate environmental data (affecting production)
  const temp = (Math.random() * 30).toFixed(2); // Temperature between 0 and 30 °C
  const humidity = (Math.random() * 100).toFixed(2); // Humidity between 0% and 100%
  const rainfall = (Math.random() * 50).toFixed(2); // Rainfall between 0 and 50 mm

  // Simulate crop yield (in kg), affected by environmental factors
  const cropYield = Math.floor((100 - humidity) * (0.5 + Math.random()) * 10); // Crop yield affected by humidity

  // Generate production-related costs (simplified)
  const waterUsage = 2000; // Example: fixed water usage in liters
  const waterCost = waterUsage * 0.1; // $0.10 per liter of water

  const laborCost = cropYield * 0.5; // $0.50 per kg of crops for labor
  const fertilizerCost = cropYield * 0.2; // $0.20 per kg of crops for fertilizer
  const fixedCost = 500; // Fixed cost (e.g., equipment, salaries, etc.)

  // Total cost calculation
  const totalCost = (
    waterCost +
    laborCost +
    fertilizerCost +
    fixedCost
  ).toFixed(2);

  // Price per unit of crop (fixed)
  const pricePerUnit = 2; // Example: $2 per kg

  // Revenue calculation
  const revenue = (cropYield * pricePerUnit).toFixed(2);

  // ROI calculation
  const roi =
    totalCost > 0 ? (((revenue - totalCost) / totalCost) * 100).toFixed(2) : 0;

  const timeLabel = new Date().toLocaleTimeString(); // X-axis time label (e.g., "12:30 PM")

  return {
    businessMetrics: {
      revenue,
      totalCost,
      roi,
      waterProf: (Math.random() * 0.5).toFixed(2), // Water profit/loss (example)
    },
    environmentalMetrics: {
      temp,
      humidity,
      rainfall,
      cropYield, // Crop yield based on environmental data
      growthTime: Math.floor(temp / 10 + Math.random() * 10), // Growth time affected by temperature
    },
    chartData: {
      labels: [timeLabel], // We'll keep adding time labels dynamically
      datasets: {
        growthData: Array.from(
          { length: 5 },
          () => Math.floor(Math.random() * 30) + 1
        ),
        rainfallData: Array.from(
          { length: 5 },
          () => Math.floor(Math.random() * 50) + 1
        ),
        humidityData: Array.from(
          { length: 5 },
          () => Math.floor(Math.random() * 100) + 1
        ),
      },
    },
  };
};
