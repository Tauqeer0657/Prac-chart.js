// Define the URL for the API
const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const years = data.data.map(item => item.Year);
        const populations = data.data.map(item => item.Population);

        // Create the column chart
        const ctxColumn = document.getElementById('populationChartColumn').getContext('2d');
        const populationChartColumn = new Chart(ctxColumn, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'Population',
                    data: populations,
                    backgroundColor: ['aqua','dimgrey','blue','red','brown'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });

        const ctxline = document.getElementById('populationChartLine').getContext('2d');
        const populationChartline = new Chart(ctxline, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Population',
                    data: populations,
                    backgroundColor: ['aqua','dimgrey','blue','red','brown'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });


  

    })
    .catch(error => console.error('Error fetching data:', error));