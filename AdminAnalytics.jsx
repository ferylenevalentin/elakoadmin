import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminAnalytics.css";

const AdminAnalytics = () => {
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
          <h1>Platform Analytics</h1>
          <p>Comprehensive analytics and insights for platform performance.</p>
        </header>

        <section className="stats-overview">
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <div className="stat-value">₱1.02M</div>
            <span className="trend positive">+15% this month</span>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <div className="stat-value">1,470</div>
            <span className="trend positive">+12% monthly active</span>
          </div>
          <div className="stat-card">
            <h3>Transactions</h3>
            <div className="stat-value">2,780</div>
            <span className="trend positive">+20% this month</span>
          </div>
          <div className="stat-card">
            <h3>Platform Rating</h3>
            <div className="stat-value">4.6</div>
            <span className="trend positive">+0.3 user satisfaction</span>
          </div>
        </section>

        <nav className="analytics-nav">
          <button className="nav-button active">Revenue</button>
          <button className="nav-button">Users & Engagement</button>
          <button className="nav-button">Categories</button>
          <button className="nav-button">Geographic</button>
          <button className="nav-button">Platform Health</button>
        </nav>

        <section className="revenue-section">
          <h2>Revenue & Growth Trends</h2>
          <p>Platform revenue and user growth over time</p>
          
          <div className="monthly-stats">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(month => (
              <div className="month-row" key={month}>
                <div className="month-label">{month}</div>
                <div className="stats-bars">
                  <div className="stat-group">
                    <div className="revenue-bar">₱425K</div>
                    <span>Revenue</span>
                  </div>
                  <div className="stat-group">
                    <div className="transactions-bar">1240</div>
                    <span>Transactions</span>
                  </div>
                  <div className="stat-group">
                    <div className="users-bar">850</div>
                    <span>Users</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="analytics-grid">
          <section className="category-performance">
            <h2>Category Performance</h2>
            <p>Revenue distribution and growth by category</p>
            
            <div className="category-stats">
              <div className="category-row">
                <div className="category-label">
                  <span className="dot food"></span>
                  Food
                </div>
                <div className="category-bar">
                  <div className="bar-fill" style={{width: '80%'}}></div>
                  <span className="value">₱45K</span>
                </div>
                <span className="growth">+28%</span>
              </div>
              {/* Repeat for other categories */}
            </div>
          </section>

          <section className="key-insights">
            <h2>Key Insights & Recommendations</h2>
            
            <div className="insights-list">
              <div className="insight-item">
                <div className="insight-marker revenue"></div>
                <div className="insight-content">
                  <h4>Revenue Growth</h4>
                  <p>Platform revenue increased by 15% this month, with Food category leading growth at 28%.</p>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-marker engagement"></div>
                <div className="insight-content">
                  <h4>User Engagement</h4>
                  <p>Weekend engagement peaks suggest opportunity for targeted weekend promotions.</p>
                </div>
              </div>
              {/* Add other insights */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;