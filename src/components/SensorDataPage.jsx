import React from 'react';
import SensorTabs from './SensorTabs'; 
import './SensorPage.css';

const SensorDataPage = () => {
  return (
    <div className="sensor-page">
      <h1>Sensor Data</h1>
      <SensorTabs /> 
    </div>
  );
};

export default SensorDataPage;
