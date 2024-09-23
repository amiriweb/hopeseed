import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const RainfallChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Time labels
    datasets: [
      {
        label: "Rainfall (mm)",
        data: data.datasets[0].data, // Rainfall data
        backgroundColor: "#ffce56", // Yellow bars
        borderColor: "#ffce56",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 50, // Max rainfall (0-50mm)
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

  return <Bar data={chartData} options={chartOptions} />;
};

export default RainfallChart;
