# Interactive Environmental and Business Metrics Dashboard

This project is an interactive dashboard built with **React** and **Chart.js** to visualize real-time environmental and business metrics such as temperature, humidity, crop yield, and more. The dashboard updates every few seconds with simulated data and allows for detailed analysis through KPI cards and charts.

## Features

- Real-time data updates for environmental metrics (temperature, humidity, rainfall) and business metrics (crop yield, growth time).
- Interactive charts powered by **Chart.js** for visualizing trends over time.
- A modular, component-based architecture using **React**.
- Notification system that alerts users when environmental thresholds are crossed.
- Expandable architecture to allow for future integrations and additional metrics.
- Customizable data generation logic to simulate realistic conditions.

## Technologies Used

- **React**: Front-end framework for building UI components and managing state.
- **Chart.js**: Library for creating responsive and interactive charts.
- **JavaScript**: Core language for building the logic behind the dashboard.
- **HTML/CSS**: For layout and styling of the dashboard components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Data Generation](#data-generation)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the repository**:

```bash
  git clone https://github.com/your-username/environmental-business-dashboard.git
```

2. **Navigate into the project directory:**:

```bash
  cd project-directory

```

Make sure you have Node.js installed on your machine.

3. **Install the dependencies:**:

```bash
  npm install
```

This command will install all the necessary libraries, including React, Chart.js, and other dependencies.

## Usage/Examples

1. **Start the development server:**:

```bash
  npm start
```

2. **Access the application:**:

```bash
 The application will be running at http://localhost:3000.
```

You can now explore the real-time dashboard and see the data updates.

## Project Structure

```bash
├── public
│   ├── index.html          # Main HTML file
├── src
│   ├── components          # React components (BusinessMetricCard, EnvironmentalDataCard, etc.)
│   ├── pages               # Pages like Dashboard.js
│   ├── utils               # Utility files (data generation, notifications, etc.)
│   ├── App.js              # Main React application file
│   ├── index.js            # Entry point of the React application
└── package.json            # Project metadata and dependencies
```

## Key Components

```bash
    Dashboard.js: The main page of the application, containing KPI cards, charts, and real-time data updates.
    BusinessMetricCard.js: A reusable component to display business metrics like crop yield and ROI.
    EnvironmentalDataCard.js: A component to display environmental data such as temperature and humidity.
    TemperatureChart.js: An interactive chart for visualizing temperature trends using Chart.js.
```

## Data Generator

```javascript
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
```

## License

This project is licensed under the MIT License.
[MIT](https://choosealicense.com/licenses/mit/)
