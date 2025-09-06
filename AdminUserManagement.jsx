import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminUserManagement.css";

const users = [
  {
    name: "Juan Dela Cruz",
    email: "juan@email.com",
    type: "Customer",
    status: "active",
    joinDate: "1/15/2024",
    activity: "6/1/2024",
  },
  {
    name: "Maria Santos",
    email: "maria@email.com",
    type: "Customer",
    status: "active",
    joinDate: "2/20/2024",
    activity: "5/30/2024",
  },
  {
    name: "Maria's Bakery",
    email: "maria.bakery@email.com",
    type: "Msme",
    status: "active",
    joinDate: "1/10/2024",
    activity: "6/1/2024",
  },
  {
    name: "Pedro Garcia",
    email: "pedro@email.com",
    type: "Customer",
    status: "inactive",
    joinDate: "3/5/2024",
    activity: "4/15/2024",
  },
  {
    name: "Island Crafts",
    email: "island.crafts@email.com",
    type: "Msme",
    status: "suspended",
    joinDate: "2/1/2024",
    activity: "5/20/2024",
  }
];

const AdminUserManagement = () => {
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
        <div className="page-header">
          <h1>User Management</h1>
          <p>Manage customers and MSME businesses on the platform.</p>
        </div>

        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-value">5</span>
            <span className="stat-label">Total Users</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">3</span>
            <span className="stat-label">Customers</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">2</span>
            <span className="stat-label">MSMEs</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">3</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">1</span>
            <span className="stat-label">Suspended</span>
          </div>
        </div>

        <div className="filters-section">
          <h2>Filters</h2>
          <div className="filters-row">
            <input type="text" placeholder="Search users..." className="search-input" />
            <select className="filter-dropdown">
              <option>All Users</option>
            </select>
            <select className="filter-dropdown">
              <option>All Status</option>
            </select>
          </div>
        </div>

        <div className="tabs-section">
          <button className="tab-button active">All Users (5)</button>
          <button className="tab-button">Customers (3)</button>
          <button className="tab-button">MSMEs (2)</button>
        </div>

        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Activity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="user-cell">
                      <div className="avatar">
                        {user.name[0].toUpperCase()}
                      </div>
                      <div className="user-info">
                        <div className="user-name">{user.name}</div>
                        <div className="user-email">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.type}</td>
                  <td>
                    <span className={`status-badge ${user.status}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>{user.activity}</td>
                  <td>
                    <div className="actions">
                      <button className="view-btn">View</button>
                      <button className="more-btn">...</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;