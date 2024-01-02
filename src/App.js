import React from 'react';
import { Routes, Route } from "react-router-dom";

import FoodPage from './pages/FoodPage';
import DateTimePicker from './pages/Bills';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import LoginPage from './pages/LoginPage';
import ListOfOrders from './pages/ListOfOrders';
import TeamPage from './pages/TeamPage';

import { AuthProvider } from './app/helpers/AuthContext';
import { ProtectedRoute } from './app/helpers/ProtectedRoute';

function App() {
  
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="bills" element={<ProtectedRoute><DateTimePicker /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
        <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="food_catalog" element={<ProtectedRoute><FoodPage /></ProtectedRoute>} />
        <Route path='dashboard/orders' element={<ProtectedRoute><ListOfOrders /></ProtectedRoute>} /> 
        <Route path='team' element={<ProtectedRoute><TeamPage /></ProtectedRoute>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;