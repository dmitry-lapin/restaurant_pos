import React, { useEffect, useState } from 'react';
import ReactEChart from 'echarts-for-react';
import { ref, get } from 'firebase/database';
import { database } from "../../firebase_config" 

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {

    const databaseRef = ref(database, 'statistics'); 
    get(databaseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const statisticsData = snapshot.val();
          const lastMonth = Object.keys(statisticsData).pop();

          if (lastMonth) {
            const dishesData = statisticsData[lastMonth].dishes || {};
          
            const pieChartData = Object.entries(dishesData)
              .map(([name, quantity]) => ({
                name,
                value: quantity,
              }))
              .sort((a, b) => b.value - a.value) 
              .slice(0, 6); 
          
            setChartData(pieChartData);
          }
        }
      })
      .catch((error) => {
        console.error('Error getting data from Firebase:', error);
      });
  }, []);

  const option = {
    title: {
      text: 'Most popular dishes',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: 0,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '65%',
        data: chartData, 
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <ReactEChart
      style={{
        width: '100%',
        height: '100%',
      }}
      option={option}
    />
  );
};

export default PieChart;
