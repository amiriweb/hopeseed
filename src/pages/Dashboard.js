import React, { useState, useEffect } from "react";
import BusinessMetricCard from "../components/BussinessCards/BusinessMetricCard";
import EnvironmentalDataCard from "../components/EnvironmentalDataCards/EnvironmentalDataCard";
import TemperatureChart from "../components/Charts/TemperatureChart";
import HumidityChart from "../components/Charts/HumidityChart";
import RainfallChart from "../components/Charts/RainfallChart";
import CropYieldChart from "../components/Charts/CropYieldChart";
import Messages from "../components/Messages/Messages";
import { generateEnvironmentalAndBusinessData } from "../utils/dataGenerator";
import { generateMessages } from "../utils/messageSystem";
import "./Dashboard.css"; // Import the necessary styles

const Dashboard = () => {
  const [businessMetrics, setBusinessMetrics] = useState({
    revenue: 50000,
    totalCost: 50000,
    roi: 776,
    waterProf: 0.18,
  });

  const [environmentalMetrics, setEnvironmentalMetrics] = useState({
    temp: 1.06,
    humidity: 2.07,
    rainfall: 1.85,
    cropYield: 500,
    growthTime: 15,
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: {
      growthData: [],
      rainfallData: [],
      humidityData: [],
    },
  });

  const [messages, setMessages] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const updateData = () => {
    const newData = generateEnvironmentalAndBusinessData();

    setBusinessMetrics(newData.businessMetrics);
    setEnvironmentalMetrics(newData.environmentalMetrics);

    setChartData((prevData) => ({
      labels: [...prevData.labels, ...newData.chartData.labels],
      datasets: {
        growthData: [
          ...prevData.datasets.growthData,
          ...newData.chartData.datasets.growthData,
        ],
        rainfallData: [
          ...prevData.datasets.rainfallData,
          ...newData.chartData.datasets.rainfallData,
        ],
        humidityData: [
          ...prevData.datasets.humidityData,
          ...newData.chartData.datasets.humidityData,
        ],
      },
    }));

    const generatedMessages = generateMessages(
      newData.environmentalMetrics,
      newData.businessMetrics
    );
    setMessages(generatedMessages);
  };

  useEffect(() => {
    const interval = setInterval(updateData, 4000);
    return () => clearInterval(interval);
  }, []);

  const environmentalMetricsArray = [
    { label: "Temp", value: environmentalMetrics.temp, unit: "°C" },
    { label: "Humidity", value: environmentalMetrics.humidity, unit: "%" },
    { label: "Rainfall", value: environmentalMetrics.rainfall, unit: "mm" },
    { label: "Crop Yield", value: environmentalMetrics.cropYield, unit: "kg" },
    {
      label: "Growth Time",
      value: environmentalMetrics.growthTime,
      unit: "days",
    },
  ];

  const visibleMetrics = showMore
    ? environmentalMetricsArray
    : environmentalMetricsArray.slice(0, 3);

  const temperatureData = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: chartData.datasets.growthData,
        borderColor: "#ff6384",
        fill: false,
      },
    ],
  };

  const humidityData = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Humidity (%)",
        data: chartData.datasets.humidityData,
        borderColor: "#36a2eb",
        fill: true,
      },
    ],
  };

  const rainfallData = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Rainfall (mm)",
        data: chartData.datasets.rainfallData,
        borderColor: "#ffce56",
        fill: false,
      },
    ],
  };

  const cropYieldData = {
    labels: chartData.labels, // X-axis labels (timestamps)
    datasets: [
      {
        label: "Crop Yield (kg)", // Label for crop yield dataset
        data: chartData.datasets.growthData, // Crop yield data from chartData
        borderColor: "#4caf50", // Green color for crop yield line
        fill: false,
      },
    ],
  };

  const growthTimeData = {
    labels: chartData.labels, // X-axis labels (timestamps)
    datasets: [
      {
        label: "Growth Time (days)",
        data: chartData.datasets.growthTimeData, // Growth time data from chartData
        backgroundColor: "#f57c00", // Orange color for growth time bars
        borderColor: "#f57c00",
        fill: false,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="dashboard__grid">
        <div className="dashboard__business-metrics">
          <BusinessMetricCard
            title="Water Prof"
            value={businessMetrics.waterProf}
            change={70}
            unit="L"
          />
          <BusinessMetricCard
            title="Revenue"
            value={businessMetrics.revenue}
            change={-10}
            unit="$"
          />
          <BusinessMetricCard
            title="Total Cost"
            value={businessMetrics.totalCost}
            change={70}
            unit="$"
          />
          <BusinessMetricCard
            title="ROI"
            value={businessMetrics.roi}
            change={-10}
            unit="%"
          />
        </div>

        <div className="chart-section">
          <div className="chart-container">
            <TemperatureChart data={temperatureData} />
          </div>
          <div className="chart-container">
            <HumidityChart data={humidityData} />
          </div>
          <div className="chart-container">
            <RainfallChart data={rainfallData} />
          </div>
          <div className="chart-container">
            <CropYieldChart data={cropYieldData} />
          </div>
        </div>

        <div className="dashboard__environmental-data">
          {visibleMetrics.map((metric, index) => (
            <div className="environmental-card-wrapper" key={index}>
              <EnvironmentalDataCard
                label={metric.label}
                value={metric.value}
                unit={metric.unit}
              />
            </div>
          ))}
          <button
            className="show-more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="dashboard__messages">
          <Messages messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
