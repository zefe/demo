import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

//defaults.global.tooltips.enabled = true;

defaults.global.datasets.bar.categoryPercentage = 0.5;

export const  PaymentsChart = () => {
    return(
        <>
            <Bar
                data={{
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    datasets: [{
                        label: 'Payments',
                        data: [300, 160, 300, 500, 250, 600, 650],
                        backgroundColor: '#00A877',
                        borderWidth: 1,
                    }
                ],
                }}
                height={ 40 }
                width={ 70 }
                options={{
                    maintainAspectRatio: true,
                    scales: {                        
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    suggestedMin: 0,
                                    suggestedMax: 1000,
                                }
                            }
                        ],
                        xAxes: [
                          {
                            //barPercentage: .5,
                            gridLines: {
                              drawBorder: true,
                              color: "rgba(29,140,248,0.0)",
                              zeroLineColor: "transparent",
                            },
                          },
                        ],
                    },
                    legend: {
                        display: false,
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'black',
                            fontFamily: " 'Poppins', sans-serif"
                        },
                        position: 'top',
                    },
                    animation: {
                        easing: 'linear'
                    },
                    responsive: true,

                }}
            />
        </>
    )
}