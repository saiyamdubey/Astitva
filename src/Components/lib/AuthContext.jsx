import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state based on localStorage
  const checkLoginState = () => {
    const user = localStorage.getItem('userhai');
    setIsLoggedIn(!!user); // Set true if user exists
  };

  useEffect(() => {
    checkLoginState();

    // Listen for `localStorage` changes
    const handleStorageChange = (event) => {
      if (event.key === 'userhai') {
        checkLoginState();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
