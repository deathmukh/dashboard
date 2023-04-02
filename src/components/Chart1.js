import React from 'react'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'

export default function Chart1() {
 
  return  <div>
    <Chart type="line" data={{ labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], datasets: [{
      label: 'Lives Saved',
      data: [12, 19, 5, 8, 27, 3],
      borderColor: '#98e2e7',
      backgroundColor: '#e2f2f2',
      fill: true,
    }],  options: {
      scales: {
        x: {
          grid: {
            display: false,
          }, 
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    }
  }} />
  </div>

}
