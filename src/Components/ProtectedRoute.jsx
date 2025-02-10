import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if required items exist in localStorage
  const user = localStorage.getItem('userhai');
  // const owner = localStorage.getItem('ownerhai');

  // If not logged in, redirect to login page
  if (user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, allow access
  return children;
};

export default ProtectedRoute;
