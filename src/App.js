import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FoodPage from './pages/FoodPage';
import Bills from './pages/Bills';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import FoodCatalog from './pages/FoodCatalog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FoodPage />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/food_catalog" element={<FoodCatalog />} /> 
    </Routes>
  );
}

export default App;