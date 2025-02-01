import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize isAuthenticated based on localStorage
    const token = localStorage.getItem('accessToken');
    return !!token; // Convert token to boolean
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};