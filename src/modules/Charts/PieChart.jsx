import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Dish 1', value: 132 },
  { name: 'Dish 2', value: 74 },
  { name: 'Dish 3', value: 55 },
  { name: 'Dish 4', value: 174 },
  { name: 'Dish 5', value: 111 },
  { name: 'Dish 6', value: 64 },
];

const ChartPie = () => {
  return (
    <div style={{ width: '75%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPie;
