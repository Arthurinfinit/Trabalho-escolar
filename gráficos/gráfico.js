const ctx = document.getElementById('graficoSalarios').getContext('2d');

const data = {
    labels: ['Desenvolvedor de Software', 'Cientista de Dados', 'Engenheiro de Segurança da Informação', 'Especialista em Nuvem'],
    datasets: [
        {
            label: 'Junior',
            data: [3000, 3500, 4000, 4500],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Pleno',
            data: [6000, 8000, 9000, 10000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Senior',
            data: [12000, 15000, 18000, 20000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#FFFFFF' // Define a cor da fonte da legenda
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFFFFF' // Define a cor da fonte dos ticks do eixo Y
                }
            }
        }
    }
};


const graficoSalarios = new Chart(ctx, config);
