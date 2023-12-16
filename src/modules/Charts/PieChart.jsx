import React, { useEffect, useState } from 'react';
import ReactEChart from 'echarts-for-react';
import { ref, get } from 'firebase/database';
import { database } from "../../firebase_config" 

import { useSelector } from 'react-redux';

const PieChart = () => {
  const [chartData, setChartData] = useState([]);
  const darkMode = useSelector((state) => state.DarkModeToggler.isDark);
  
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentMonth = `${year}-${month}`;

    const databaseRef = ref(database, `statistics/${currentMonth}`); 

    get(databaseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const statisticsData = snapshot.val();
          const dishesData = statisticsData.dishes || {};

          const pieChartData = Object.entries(dishesData)
            .map(([name, quantity]) => ({
              name,
              value: quantity,
            }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 6);

          setChartData(pieChartData);
        }
      })
      .catch((error) => {
        console.error('Error getting data from Firebase:', error);
      });
  }, [darkMode]);

  const option = {
    dark: darkMode,
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
        top: "-5%",
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
