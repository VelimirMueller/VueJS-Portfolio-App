export const ChartData = {
  type: 'doughnut',
  data: {
    labels: ['vue components', 'images', 'data files', 'totalAppElements'],
    datasets: [{
      label: 'App Components Bar',
      data: [8, 16, 2, 26],
      backgroundColor: [
        'rgba(255, 99, 132, 0.75)',
        'rgba(54, 162, 235, 0.75)',
        'rgba(255, 206, 86, 0.75)',
        'rgba(75, 192, 192, 0.75)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    },
    ]
  },

  options: {
    bezierCurve: true,
    maintainAspectRatio: false,
  }
};

export default ChartData;