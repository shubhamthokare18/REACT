import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, isDarkTheme }) => {
  const [username, setUsername] = useState('shaikim');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username, password);
    }
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className={`login-container ${isDarkTheme ? 'dark-login' : 'light-login'}`}>
      <div className="login-card">
        <div className="login-header">
          <div className="logo-wrapper">
            <span className="logo-icon">✨</span>
          </div>
          <h1 className="login-title">Welcome Back to <span className="highlight">MDA</span></h1>
          <p className="login-subtitle">Your productivity workspace</p>
        </div>

        <div className="sso-section">
          <button className="sso-button">
            <span className="sso-icon">🔑</span>
            <span>SINGLE SIGN IN</span>
          </button>
          <div className="divider">
            <span>OR</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className="input-icon">
              <span>👤</span>
            </div>
            <input
              type="text"
              placeholder="Username*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <span>🔒</span>
            </div>
            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="login-button">
              LOGIN
            </button>
            <button type="button" onClick={handleClear} className="clear-button">
              CLEAR
            </button>
          </div>
        </form>

        <div className="activate-windows">
          <span className="windows-icon">⚙️</span>
          <span>Activate Windows</span>
          <span className="goto-link">Go to Settings to activate Windows</span>
        </div>
      </div>
    </div>
  );
};

export default Login;