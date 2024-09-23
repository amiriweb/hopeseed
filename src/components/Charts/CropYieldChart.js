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

const CropYieldChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Time labels
    datasets: [
      {
        label: "Crop Yield (kg)",
        data: data.datasets[0].data, // Crop yield data
        borderColor: "#4caf50", // Green line for crop yield
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
            suggestedMax: 100, // Adjust max crop yield
          },
          scaleLabel: {
            display: true,
            labelString: "Crop Yield (kg)",
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

export default CropYieldChart;
