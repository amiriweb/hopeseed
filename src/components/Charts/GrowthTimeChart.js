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

const GrowthTimeChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Time labels
    datasets: [
      {
        label: "Growth Time (days)",
        data: data.datasets[0].data, // Growth time data in days
        backgroundColor: "#f57c00", // Orange bars for growth time
        borderColor: "#f57c00",
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
            suggestedMax: 30, // Adjust max growth time in days
          },
          scaleLabel: {
            display: true,
            labelString: "Growth Time (days)",
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

export default GrowthTimeChart;
