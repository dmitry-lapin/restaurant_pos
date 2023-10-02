import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import FoodPage from './pages/FoodPage';
import DateTimePicker from './pages/Bills';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import LoginPage from './pages/LoginPage';
import ListOfOrders from './pages/ListOfOrders';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="bills" element={<DateTimePicker />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="messages" element={<Messages />} />
      <Route path="settings" element={<Settings />} />
      <Route path="food_catalog" element={<FoodPage />} />
      <Route path='dashboard/orders' element={<ListOfOrders />} /> 
    </Routes>
  );
}

export default App;