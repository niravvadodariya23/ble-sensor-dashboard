import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

const HumidityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const humidityChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Humidity (%)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
              text: 'Humidity (%)'
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
            text: 'Humidity Data Over Time',
          },
        },
      },
    });

    return () => {
      humidityChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width="800" height="300"></canvas>;
};

export default HumidityChart;
