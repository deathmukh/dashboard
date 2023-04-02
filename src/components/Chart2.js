import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Chart2() {
  const data = {
    labels: ['0-1 Puppy', '2-6 Adult', '7+ Senior'],
    datasets: [
      {
        label: 'Average Time to Adopt by Age Bucket (Days)',
        data: [30, 85, 103],
        backgroundColor: '#98e2e7',
        
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
}
