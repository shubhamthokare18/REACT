import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleLogin = (username, password) => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      ) : (
        <Login onLogin={handleLogin} isDarkTheme={isDarkTheme} />
      )}
    </div>
  );
}

export default App;