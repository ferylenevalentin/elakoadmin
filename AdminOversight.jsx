import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminOversight.css";

const msmeData = [
  {
    id: 1,
    name: "Maria's Bakery",
    email: "maria.bakery@email.com",
    category: "Food",
    status: "verified",
    products: 15,
    sales: "₱45K",
    rating: 4.8,
    followers: 234,
    visibility: "high",
    growthRate: "+26%"
  },
  {
    id: 2,
    name: "Mountain Brew Coffee",
    email: "mountain.brew@email.com",
    category: "Food",
    status: "verified",
    products: 8,
    sales: "₱32K",
    rating: 4.9,
    followers: 189,
    visibility: "high",
    growthRate: "+15%"
  },
  {
    id: 3,
    name: "Island Crafts",
    email: "island.crafts@email.com",
    category: "Crafts",
    status: "pending",
    products: 22,
    sales: "₱13K",
    rating: 4.4,
    followers: 98,
    visibility: "medium",
    growthRate: "+5%"
  },
  {
    id: 4,
    name: "Traditional Weavers",
    email: "traditional.weavers@email.com",
    category: "Clothing",
    status: "suspended",
    products: 12,
    sales: "₱9K",
    rating: 3.9,
    followers: 45,
    visibility: "low",
    growthRate: "-12%"
  }
];

const AdminOversight = () => {
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
          <h1>MSME Oversight</h1>
          <p>Monitor and manage MSME businesses, control visibility, and track performance.</p>
        </header>

        <section className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>Total MSMEs</h3>
              <p>178</p>
              <span className="trend">+6% from last month</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div className="stat-content">
              <h3>Verified MSMEs</h3>
              <p>134</p>
              <span className="trend">+12% from last month</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🛍️</div>
            <div className="stat-content">
              <h3>Total Products</h3>
              <p>1,245</p>
              <span className="trend">+18% from last month</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>Avg Rating</h3>
              <p>4.6</p>
              <span className="trend">+0.2 from last month</span>
            </div>
          </div>
        </section>

        <section className="filters-section">
          <h2>Filters & Controls</h2>
          <div className="filters-row">
            <input type="text" placeholder="Search MSMEs..." className="search-input" />
            <select className="filter-select">
              <option>All Categories</option>
            </select>
            <select className="filter-select">
              <option>All Status</option>
            </select>
            <select className="filter-select">
              <option>All Visibility</option>
            </select>
          </div>
        </section>

        <div className="msme-tabs">
          <button className="tab-button active">All MSMEs (4)</button>
          <button className="tab-button">Pending Review (1)</button>
          <button className="tab-button">Top Performers (2)</button>
          <button className="tab-button">Visibility Controls</button>
        </div>

        <div className="msme-list">
          {msmeData.map((msme) => (
            <div className="msme-card" key={msme.id}>
              <div className="msme-header">
                <div className="msme-info">
                  <div className="avatar">{msme.name[0]}</div>
                  <div>
                    <h3>{msme.name}</h3>
                    <p>{msme.email}</p>
                  </div>
                </div>
                <div className="msme-category">
                  <span className="category-tag">{msme.category}</span>
                  <span className={`status-tag ${msme.status}`}>{msme.status}</span>
                </div>
                <div className="visibility-controls">
                  <label className="switch">
                    <input type="checkbox" defaultChecked={msme.visibility === 'high'} />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              <div className="msme-metrics">
                <div className="metric">
                  <span>{msme.products}</span>
                  <label>Products</label>
                </div>
                <div className="metric">
                  <span>{msme.sales}</span>
                  <label>Sales</label>
                </div>
                <div className="metric">
                  <span>{msme.rating} ⭐</span>
                  <label>Rating</label>
                </div>
                <div className="metric">
                  <span>{msme.followers}</span>
                  <label>Followers</label>
                </div>
              </div>

              <div className="msme-footer">
                <div className="visibility-info">
                  <label>Visibility</label>
                  <span className={`visibility-tag ${msme.visibility}`}>{msme.visibility}</span>
                </div>
                <div className="growth-info">
                  <label>Growth Rate</label>
                  <span className={`growth-tag ${msme.growthRate.startsWith('+') ? 'positive' : 'negative'}`}>
                    {msme.growthRate}
                  </span>
                </div>
                <button className="details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOversight;