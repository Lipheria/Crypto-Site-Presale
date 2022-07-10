const ctx = document.getElementById("line-chart").getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '30th', '1st', '2nd', '3rd', '4th'],
        datasets: [{
            label: 'Price in USD',
            data: [1, 1.5, 1.2, 0.4, 0.6, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                responsive: true,
                maintainAspectRatio: false,
                beginAtZero: true
            }
        }
    }
});