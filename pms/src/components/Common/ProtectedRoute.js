// src/components/Common/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role, requiredRole }) => {
  if (!role) {
    // If no role is set, redirect to login
    return <Navigate to="/" />;
  }

  if (role !== requiredRole) {
    // If the role doesn't match, redirect to login or an unauthorized page
    return <Navigate to="/" />;
  }

  // If role matches, render the children components
  return children;
};

export default ProtectedRoute;
