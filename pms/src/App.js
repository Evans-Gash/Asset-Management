// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import LandlordDashboard from './components/Landlords/LandlordDashboard';
import TenantDashboard from './components/Tenants/TenantDashboard';
import PropertyManagerDashboard from './components/PropertyManagers/PropertyManagerDashboard';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Common/ProtectedRoute';

function App() {
  const [role, setRole] = useState('');

  // Load role from localStorage when the app mounts
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  // Update localStorage whenever role changes
  useEffect(() => {
    if (role) {
      localStorage.setItem('role', role);
    } else {
      localStorage.removeItem('role');
    }
  }, [role]);

  return (
    <Router>
      {role && <Navbar role={role} setRole={setRole} />}
      <Routes>
        <Route path="/" element={<Login setRole={setRole} />} />
        
        <Route 
          path="/landlord" 
          element={
            <ProtectedRoute role={role} requiredRole="Landlord">
              <LandlordDashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/tenant" 
          element={
            <ProtectedRoute role={role} requiredRole="Tenant">
              <TenantDashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/propertymanager" 
          element={
            <ProtectedRoute role={role} requiredRole="PropertyManager">
              <PropertyManagerDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
