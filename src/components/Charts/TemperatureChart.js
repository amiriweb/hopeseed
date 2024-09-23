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

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Time labels
    datasets: [
      {
        label: "Temperature (°C)",
        data: data.datasets[0].data, // Temperature values
        borderColor: "#ff6384",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 40, // Max temperature
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          time: {
            unit: "minute",
          },
        },
      ],
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default TemperatureChart;
