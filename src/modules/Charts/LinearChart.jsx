// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react"; 
function LinearChart() {  
const option = {
  title: {
    text: 'Revenue',
    subtext: 'Graph displays income for previous months.'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(29, 78, 216, 0.2)'
      }
    }
  ]
};

return <ReactEcharts option={option} />;
} 
export default LinearChart;