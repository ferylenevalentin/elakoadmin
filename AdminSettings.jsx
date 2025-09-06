import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminSettings.css";

const AdminSettings = () => {
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
        <div className="header-content">
          <h1>Profile Settings</h1>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        <div className="settings-layout">
          <section className="settings-section">
            <h2>Personal Information</h2>
            <div className="profile-info">
              <div className="profile-avatar">
                <div className="avatar">A</div>
                <div className="profile-title">
                  <h3>Admin User</h3>
                  <p>baquiranjenzon@gmail.com</p>
                  <span className="role-badge">Admin</span>
                </div>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <label>Full Name</label>
                  <p>Admin User</p>
                </div>
                <div className="info-item">
                  <label>Email</label>
                  <p>baquiranjenzon@gmail.com</p>
                </div>
                <div className="info-item">
                  <label>Phone Number</label>
                  <p>+63 912 345 6789</p>
                </div>
                <div className="info-item">
                  <label>Address</label>
                  <p>123 Main Street, Makati City</p>
                </div>
              </div>

              <div className="bio-section">
                <label>Bio</label>
                <p>Dedicated to helping MSMEs grow and succeed on our platform.</p>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h2>Statistics</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <label>Total Users</label>
                <p>1,247</p>
              </div>
              <div className="stat-item">
                <label>Active MSMEs</label>
                <p>156</p>
              </div>
              <div className="stat-item">
                <label>Platform Rating</label>
                <p>4.6/5</p>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h2>Account Settings</h2>
            <div className="account-options">
              <button className="settings-btn">Change Password</button>
              <button className="settings-btn">Privacy Settings</button>
              <button className="settings-btn">Notification Preferences</button>
              <button className="settings-btn delete">Delete Account</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;