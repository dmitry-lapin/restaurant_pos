import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { ref, get } from 'firebase/database';
import { database } from "../../firebase_config" 

import getMonthName from './helpers/getMonthName';

const LinearChart = () => {
  const [chartData, setChartData] = useState({
    xAxisData: [],
    seriesData: [],
  });

  useEffect(() => {

    const databaseRef = ref(database, 'statistics'); 
    get(databaseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const statisticsData = snapshot.val();

          const xAxisData = [];
          const seriesData = [];

          for (const month in statisticsData) {
            xAxisData.push(getMonthName(month.split("-")[1]));
            seriesData.push(statisticsData[month].revenue); 
          }

          setChartData({ xAxisData, seriesData });
        }
      })
      .catch((error) => {
        console.error('Error getting data from Firebase:', error);
      });
  }, []);

  const { xAxisData, seriesData } = chartData;

  const option = {
    title: {
      text: 'Revenue',
    },
    xAxis: {
      type: 'category',
      data: xAxisData, 
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      bottom: '10%',
    },
    series: [
      {
        data: seriesData, 
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(29, 78, 216, 0.2)',
        },
      },
    ],
  };

  return (
    <ReactEcharts
      style={{
        width: '100%',
        height: '100%',
      }}
      option={option}
    />
  );
};

export default LinearChart;
