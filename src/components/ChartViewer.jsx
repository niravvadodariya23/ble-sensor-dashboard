import React from 'react';
import { Chart } from 'react-chartjs-2'; // Example chart library

const ChartViewer = ({ chartType, data }) => {
  const chartOptions = {
    // Define chart options here based on chartType
  };

  return (
    <div>
      <h2>{chartType} Chart</h2>
      <Chart type={chartType} data={data} options={chartOptions} />
    </div>
  );
};

export default ChartViewer;
