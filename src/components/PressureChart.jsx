import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

const PressureChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const pressureChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Pressure (hPa)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
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
              text: 'Pressure (hPa)'
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
            text: 'Pressure Data Over Time',
          },
        },
      },
    });

    return () => {
      pressureChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width="800" height="300"></canvas>;
};

export default PressureChart;
