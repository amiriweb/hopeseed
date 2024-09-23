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
  TimeScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const HumidityChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Time labels
    datasets: [
      {
        label: "Humidity (%)",
        data: data.datasets[0].data, // Humidity data
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Light blue fill
        borderColor: "#36a2eb", // Blue line
        fill: true,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 100, // Max humidity (0-100%)
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          time: {
            unit: "minute", // Adjust based on your data
          },
        },
      ],
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default HumidityChart;
