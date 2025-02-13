import { Navigate } from 'react-router';
import React from 'react';

export default ({ condition, result, redirect, children }) => {
  if (condition !== result) return <Navigate to={redirect} replace />;

  return children;
};
