import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Chart5() {
  const data = {
    labels: ['Labrador', 'Pit', 'Hound', 'Shepard', 'Terrier', 'American', 'Catahoula', 'Hounds', 'Australian', 'Mountain'],
    datasets: [
      {
        label: 'Top 10 Primary Breeds (Including Mixes)',
        data: [1422, 838, 400, 376, 306, 157,155, 150, 126,108],
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
