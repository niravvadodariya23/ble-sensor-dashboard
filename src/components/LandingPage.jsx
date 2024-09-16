import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SideNav />
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">Log in</Link>
        <Link to="/signup" className="auth-button">Sign up</Link>
      </div>
      <div className="landing-content">
        <h1>Welcome to the Sensor Data Dashboard</h1>
        <p>
          Monitor and analyze real-time sensor data from your BLE devices with our comprehensive dashboard.
        </p>
        <Link to="/sensors">
          <button className="cta-button">View Sensor Data</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
