import React from 'react'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'

export default function Chart3() {
 
  return  <Chart type="line" data={{ labels: [0, 2017, 2018, 2019, 2020, 2021,2022], datasets: [{
      label: 'Avg Time to Adopt over Time',
      data: [0, 35, 50, 55, 40, 43, 59],
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

}
