import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { database} from "../../firebase_config";
import { ref } from "firebase/database";

const data = [
  { name: 'Dish 1', value: 132 },
  { name: 'Dish 2', value: 74 },
  { name: 'Dish 3', value: 55 },
  { name: 'Dish 4', value: 174 },
  { name: 'Dish 5', value: 111 },
  { name: 'Dish 6', value: 64 },
];

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const formattedDate = `${year}-${month}`;

const ChartPie = () => {
  const dishesRef = ref(database, formattedDate);
  return (
    <div style={{ width: '75%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#1D4ED8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPie;
