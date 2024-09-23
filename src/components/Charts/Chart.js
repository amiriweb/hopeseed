// src/components/Chart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ chartData }) => {
  const data = {
    labels: chartData.labels, // X-axis labels (time labels)
    datasets: [
      {
        label: "Growth",
        data: chartData.datasets.growthData, // Y-axis data for Growth
        borderColor: "#000",
        backgroundColor: "#000",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Rainfall",
        data: chartData.datasets.rainfallData, // Y-axis data for Rainfall
        borderColor: "#38b6ff",
        backgroundColor: "#38b6ff",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Humidity",
        data: chartData.datasets.humidityData, // Y-axis data for Humidity
        borderColor: "#ffb74d",
        backgroundColor: "#ffb74d",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      title: {
        display: true,
        text: "Environmental Data",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
