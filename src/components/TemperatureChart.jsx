import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

const TemperatureChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const temperatureChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Temperature (°C)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          data: []
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            title: {
              display: true,
              text: 'Timestamp'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Temperature (°C)'
            }
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Temperature Data Over Time',
          },
        },
      },
    });

    return () => {
      temperatureChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width="800" height="300"></canvas>;
};

export default TemperatureChart;
