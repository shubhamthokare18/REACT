import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout, toggleTheme, isDarkTheme }) => {
  // Data from images
  const osData = [
    { name: 'Windows', value: 29, color: '#0078D4' },
    { name: 'Linux', value: 18, color: '#FCC624' },
    { name: 'Digital Workers', value: 70, color: '#6B46C1' },
    { name: 'Kubernetes', value: 22, color: '#326CE5' },
    { name: 'FTP Servers', value: 35, color: '#E53E3E' }
  ];

  const infrastructureData = [
    { platform: 'VMware', distribution: 84, prod: 58, dr: 142, total: 182 },
    { platform: 'Azure Cloud (VM)', distribution: 59, prod: 47, dr: 106, total: 162 },
    { platform: 'Power Series 10', distribution: 19, prod: 19, dr: 38, total: 38 }
  ];

  const healthData = [
    { name: 'Healthy', value: 50, color: '#38A169' },
    { name: 'Stable', value: 25, color: '#ECC94B' },
    { name: 'Normal', value: 25, color: '#3182CE' }
  ];

  const totalServers = 130;
  const production = 78;
  const apps = 52;
  const disasterRecovery = 12;
  const businessCritical = 6;

  const maxOSValue = Math.max(...osData.map(o => o.value));

  return (
    <div className={`dashboard ${isDarkTheme ? 'dark-dashboard' : 'light-dashboard'}`}>
      <div className="dashboard-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon-dash">🖥️</span>
            <h1>MDA <span>Dashboard</span></h1>
          </div>
          <p className="welcome-text">Welcome Back, <span className="user-name">Gredl</span></p>
          <span className="role-badge">Manager</span>
        </div>
        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
          <button onClick={onLogout} className="logout-btn">
            <span>🚪</span>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon server-icon">
              <span>🖥️</span>
            </div>
            <div className="stat-info">
              <h3>{totalServers}</h3>
              <p>Total Servers</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon prod-icon">
              <span>💾</span>
            </div>
            <div className="stat-info">
              <h3>{production}</h3>
              <p>Production</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon apps-icon">
              <span>📱</span>
            </div>
            <div className="stat-info">
              <h3>{apps}</h3>
              <p>Apps</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon dr-icon">
              <span>🛡️</span>
            </div>
            <div className="stat-info">
              <h3>{disasterRecovery}</h3>
              <p>Disaster Recovery</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon bc-icon">
              <span>⚠️</span>
            </div>
            <div className="stat-info">
              <h3>{businessCritical}</h3>
              <p>Business Critical</p>
            </div>
          </div>
        </div>

        <div className="dashboard-two-column">
          {/* OS Distributions */}
          <div className="card">
            <div className="card-header">
              <h2>OS Distributions</h2>
              <p className="card-subtitle">Server Operating Systems</p>
            </div>
            <div className="os-stats">
              <div className="total-os">
                <span className="total-label">Total:</span>
                <span className="total-value">126</span>
              </div>
              <div className="os-list-full">
                {osData.map((os, idx) => (
                  <div key={idx} className="os-item-full">
                    <div className="os-info">
                      <div className="os-color" style={{ backgroundColor: os.color }}></div>
                      <span className="os-name">{os.name}</span>
                      <span className="os-count">{os.value}</span>
                    </div>
                    <div className="os-progress-bar">
                      <div 
                        className="os-progress-fill" 
                        style={{ 
                          width: `${(os.value / maxOSValue) * 100}%`,
                          backgroundColor: os.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Environment Overview */}
          <div className="card">
            <div className="card-header">
              <h2>Environment Overview</h2>
              <p className="card-subtitle">Distribution by deployment type</p>
            </div>
            <div className="env-simple">
              <div className="env-circle">
                <div className="env-circle-inner">
                  <div className="env-stats-simple">
                    <div className="env-stat-item">
                      <span className="env-value">45%</span>
                      <span className="env-label">On Prem</span>
                    </div>
                    <div className="env-stat-item">
                      <span className="env-value">55%</span>
                      <span className="env-label">Cloud</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="env-progress-bars">
                <div className="env-progress-item">
                  <span className="env-progress-label">On Prem</span>
                  <div className="env-progress-bar">
                    <div className="env-progress-fill onprem-fill" style={{ width: '45%' }}></div>
                  </div>
                  <span className="env-progress-percent">45%</span>
                </div>
                <div className="env-progress-item">
                  <span className="env-progress-label">Cloud</span>
                  <div className="env-progress-bar">
                    <div className="env-progress-fill cloud-fill" style={{ width: '55%' }}></div>
                  </div>
                  <span className="env-progress-percent">55%</span>
                </div>
                <div className="env-progress-item">
                  <span className="env-progress-label">Total</span>
                  <div className="env-progress-bar">
                    <div className="env-progress-fill total-fill" style={{ width: '100%' }}></div>
                  </div>
                  <span className="env-progress-percent">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Platform Table */}
        <div className="card full-width">
          <div className="card-header">
            <h2>Infrastructure Platform</h2>
            <p className="card-subtitle">Server count by platform</p>
          </div>
          <div className="table-container">
            <table className="infra-table">
              <thead>
                <tr>
                  <th>Infrastructure</th>
                  <th>Distribution</th>
                  <th>Prod</th>
                  <th>DR</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {infrastructureData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="platform-name">{item.platform}</td>
                    <td>{item.distribution}</td>
                    <td>{item.prod}</td>
                    <td>{item.dr}</td>
                    <td className="total-cell">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health and OS Summary */}
        <div className="dashboard-two-column">
          <div className="card">
            <div className="card-header">
              <h2>System Health</h2>
            </div>
            <div className="health-simple">
              {healthData.map((health, idx) => (
                <div key={idx} className="health-progress-item">
                  <div className="health-header">
                    <span className="health-name" style={{ color: health.color }}>{health.name}</span>
                    <span className="health-percent">{health.value}%</span>
                  </div>
                  <div className="health-progress-bar">
                    <div 
                      className="health-progress-fill" 
                      style={{ width: `${health.value}%`, backgroundColor: health.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>OS Distribution Summary</h2>
            </div>
            <div className="os-summary">
              {osData.map((os, idx) => (
                <div key={idx} className="os-summary-item">
                  <span className="os-summary-name">{os.name}</span>
                  <span className="os-summary-value">{os.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;