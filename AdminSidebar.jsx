import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation for navigation
import './AdminSidebar.css'; // Import the CSS file for styling
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AdminSidebar = ({ onSidebarToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Start with sidebar open
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation(); // Get the current route

  // Detect screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); // Start collapsed on mobile
      } else {
        setIsSidebarOpen(true); // Start expanded on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Notify parent component when sidebar state changes
  useEffect(() => {
    if (onSidebarToggle) {
      onSidebarToggle({
        isOpen: isSidebarOpen,
        isMobile: isMobileView,
        isCollapsed: !isSidebarOpen && !isMobileView
      });
    }
  }, [isSidebarOpen, isMobileView, onSidebarToggle]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Burger Menu for Mobile */}
      {isMobileView && !isSidebarOpen && (
        <button className="burger-menu" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileView ? 'mobile' : 'desktop'} ${isSidebarOpen ? 'open' : 'closed'} ${!isSidebarOpen && !isMobileView ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          {isMobileView && isSidebarOpen && (
            <button className="back-arrow" onClick={toggleSidebar}>
              <ChevronLeftIcon />
            </button>
          )}
          {!isMobileView && (
            <button className="desktop-toggle" onClick={toggleSidebar}>
              {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </button>
          )}
          {(!isMobileView || isSidebarOpen) && (
            <div className="sidebar-title">
              <h2>Admin Panel</h2>
              <p>System Administration</p>
            </div>
          )}
        </div>
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/admin-dashboard" className={`nav-link ${location.pathname === '/admin-dashboard' ? 'active' : ''}`} title="Overview">
                <DashboardIcon className="icon" />
                <span className="text">Overview</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user-management" className={`nav-link ${location.pathname === '/user-management' ? 'active' : ''}`} title="User Management">
                <InventoryIcon className="icon" />
                <span className="text">User Management</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/msme-oversight" className={`nav-link ${location.pathname === '/msme-oversight' ? 'active' : ''}`} title="MSME Oversight">
                <ApartmentIcon className="icon" />
                <span className="text">MSME Oversight</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/platform-analytics" className={`nav-link ${location.pathname === '/platform-analytics' ? 'active' : ''}`} title="Platform Analytics">
                <AnalyticsIcon className="icon" />
                <span className="text">Platform Analytics</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`} title="Settings">
                <SettingsIcon className="icon" />
                <span className="text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        {(!isMobileView || isSidebarOpen) && (
          <div className="sidebar-footer">
            <button className="logout-button">
              <LogoutIcon className="icon" /> 
              <span className="text">Logout</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminSidebar;

