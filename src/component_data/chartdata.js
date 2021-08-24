export const ChartData = {
  type: 'polarArea',
  data: {
    labels: ['PHP', 'JavaScript', 'HTML', '(S)CSS', 'Python', 'SQL'],
    datasets: [{
      label: 'App Components Bar',
      data: [71, 84, 86, 79, 65, 55],
      backgroundColor: [
        'rgba(54, 162, 235, 0.85)',
        'rgba(255, 99, 132, 0.85)',
        'rgba(255, 206, 86, 0.85)',
        'rgba(112, 51, 172, 0.85)',
        'rgba(75, 192, 192, 0.85)',
        'rgba(0, 0, 128, 0.85)'
      ],
      borderColor: [
        'rgba(255,255,255,1)',
      ],
      borderWidth: 1,
    },
    ]
  },
  options: {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
        min: 0,
        stepSize: 10,
        fontFamily: "'Lato', sans-serif",
        fontSize: 18,
        fontColor: "#000",
        display: false
      },
      gridLines: {
        lineWidth: 0.3,
        color: "#99999999"
      },
    },
    bezierCurve: true,
    maintainAspectRatio: false,
  }
};

export default ChartData;