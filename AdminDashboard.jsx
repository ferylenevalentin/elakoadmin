import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [sidebarState, setSidebarState] = useState({
    isOpen: true,
    isMobile: false,
    isCollapsed: false
  });

  const handleSidebarToggle = (state) => {
    setSidebarState(state);
  };

  const getContentClass = () => {
    if (sidebarState.isMobile) {
      return 'dashboard-content mobile';
    }
    return sidebarState.isOpen ? 'dashboard-content sidebar-open' : 'dashboard-content sidebar-collapsed';
  };

  return (
    <div className="dashboard-container">
      <AdminSidebar onSidebarToggle={handleSidebarToggle} />
      <div className={getContentClass()}>
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Monitor and manage platform metrics and performance.</p>
        </header>

        <section className="dashboard-stats">
          <div className="stat-card">
            <h2>Total Users</h2>
            <p>1,470</p>
            <span className="trend-up">+15% since last month</span>
          </div>
          <div className="stat-card">
            <h2>Active MSMEs</h2>
            <p>178</p>
            <span className="trend-up">+10% Registered businesses</span>
          </div>
          <div className="stat-card">
            <h2>Total Orders</h2>
            <p>5,340</p>
            <span className="trend-up">+25% This month</span>
          </div>
          <div className="stat-card">
            <h2>Platform Revenue</h2>
            <p>₱546,000</p>
            <span className="trend-up">+35% Total 2023</span>
          </div>
        </section>

        <div className="dashboard-grid">
          <section className="platform-growth">
            <h2>Platform Growth</h2>
            <p>User acquisition and engagement trends</p>
            <div className="growth-chart">
              {/* Monthly growth bars */}
              <div className="month-data">
                <span>Jan</span>
                <div className="data-bars">
                  <div className="bar users">125 users</div>
                  <div className="bar msmes">50 MSMEs</div>
                  <div className="bar transactions">180 transactions</div>
                </div>
              </div>
              {/* Repeat for Feb-Jun */}
            </div>
          </section>

          <section className="system-alerts">
            <h2>System Alerts</h2>
            <p>Important notifications and system status</p>
            <div className="alerts-list">
              <div className="alert warning">
                <span className="alert-icon">⚠️</span>
                <p>2 MSMEs require profile verification</p>
              </div>
              <div className="alert info">
                <span className="alert-icon">ℹ️</span>
                <p>New feature release pending review</p>
              </div>
              <div className="alert success">
                <span className="alert-icon">✓</span>
                <p>Server uptime: 99.9%</p>
              </div>
              <div className="alert error">
                <span className="alert-icon">⚠️</span>
                <p>Payment issues reported</p>
              </div>
            </div>
          </section>

          <section className="msme-distribution">
            <h2>MSME Distribution</h2>
            <p>Business categories and performance</p>
            <div className="category-list">
              <div className="category">
                <span>Food</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '85%'}}></div>
                </div>
                <span>42 businesses</span>
              </div>
              <div className="category">
                <span>Clothing</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '65%'}}></div>
                </div>
                <span>35 businesses</span>
              </div>
              {/* Add other categories */}
            </div>
          </section>

          <section className="platform-performance">
            <h2>Platform Performance</h2>
            <p>Key performance indicators</p>
            <div className="performance-metrics">
              <div className="metric">
                <label>System Uptime</label>
                <div className="progress-bar">
                  <div className="progress" style={{width: '99%'}}></div>
                </div>
                <span>99%</span>
              </div>
              <div className="metric">
                <label>Response Time</label>
                <div className="progress-bar">
                  <div className="progress" style={{width: '95%'}}></div>
                </div>
                <span>95%</span>
              </div>
              <div className="metric">
                <label>Payment Success</label>
                <div className="progress-bar">
                  <div className="progress" style={{width: '98%'}}></div>
                </div>
                <span>98%</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;