import React from 'react';
import {Bar} from "react-chartjs-2";

const DashboardChart = () => {
    let data = {
        labels: ['Mar 1 - 7', 'Mar 8 - 14', 'Mar 15 - 21', 'Mar 22 - 28', 'Final wk'],
        datasets: [{
            label: 'Amount spent so far: $180,000',
            data: [25000, 50000, 100000, 150000, 200000],
            backgroundColor: [
                'rgba(220, 238, 245, 1)'
            ],
        }]
    };


    return (
        <div>
            <h3>Spending analytics</h3>
            <p>Amount spent so far: $180,000</p>

            <div className="chart">
                <Bar
                    data={data}
                    options={{
                        aspectRatio:4,
                        title: {
                            fontSize: 25,
                        },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }]
                        },
                    }}
                />
            </div>
        </div>
    );
}




        export default DashboardChart;