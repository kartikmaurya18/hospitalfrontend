// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
// import AdminDashboard from './pages/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

import InventoryList from './pages/InventoryList';
import AddInventoryItem from './components/AddInventoryItem';
import StaffList from './pages/StaffList';
import AddStaff from './components/AddStaff';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/inventory" element={<InventoryList />} />
<Route path="/inventory/add" element={<AddInventoryItem />} />
<Route path="/staff" element={<StaffList />} />
<Route path="/staff/add" element={<AddStaff />} />
      </Routes>
    </Router>
  );
}

export default App;