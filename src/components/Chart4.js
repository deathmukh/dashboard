import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {

  labels: ['Get along with dogs', 'Get along with cats', 'Get along with kids', 'Are housebroken'],
  datasets: [
    {
      label: 'Yes',
      backgroundColor: '#96e2e6',
      data: [87, 29, 58, 38],
    },
    {
      label: 'No',
      backgroundColor:'#5d6069' ,
      data: [1, 7, 3, 6],
    },
    {
      label: 'Not Sure',
      backgroundColor: '#9a9a9a',
      data: [12, 64, 39, 56],
    },
  ],
};

const options = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked:true,
      },
    },
  };


const Chart4 = () => (
    <Bar data={data} options={options} />
)

export default Chart4;
