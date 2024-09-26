import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,   
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const fetchData = async () => {
    try {
        const response = await fetch('https://viaje.ai/mainvia_api/');
        const data = await response.json();
        return data?.data || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; 
    }
};

const Graph = () => {
    const [chartData, setChartData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await fetchData();

                if (apiData.length === 0) {
                    throw new Error('No data received ');
                }

                const labels = apiData.map(item => item[0] || 'Unknown');
                const mainRouteData = apiData.map(item => item[1] || 0);
                const viaRouteData = apiData.map(item => item[2] || 0);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Main',
                            data: mainRouteData,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                        {
                            label: 'Via',
                            data: viaRouteData,
                            backgroundColor: 'rgba(153, 102, 255, 0.6)',
                        },
                    ],
                });
            } catch (error) {
                setError(error.message);
            }
        };

        getData();
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            {chartData?.labels ? (
               <Bar
               data={chartData}
               options={{
                   responsive: true,
                   maintainAspectRatio: false,  
                   scales: {
                       x: {
                           beginAtZero: true,
                           grid: {
                               display: false,
                           },
                       },
                       y: {
                           beginAtZero: true,
                           grid: {
                               display: true,
                           },
                       },
                   },
               }}
               height={null}
               width={null}
           />
           
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Graph;
