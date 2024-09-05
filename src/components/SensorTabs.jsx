import React, { useState } from 'react';
import TemperatureChart from './TemperatureChart';
import PressureChart from './PressureChart';
import HumidityChart from './HumidityChart';
import './SensorTabs.css';

const SensorTabs = () => {
  const [activeTab, setActiveTab] = useState('Temperature');

  const renderChart = () => {
    switch (activeTab) {
      case 'Temperature':
        return <TemperatureChart />;
      case 'Pressure':
        return <PressureChart />;
      case 'Humidity':
        return <HumidityChart />;
      default:
        return null;
    }
  };

  return (
    <div className="sensor-tabs-container">
      <div className="sensor-tabs">
        <div
          className={`sensor-tab ${activeTab === 'Temperature' ? 'active' : ''}`}
          onClick={() => setActiveTab('Temperature')}
        >
          Temperature
        </div>
        <div
          className={`sensor-tab ${activeTab === 'Pressure' ? 'active' : ''}`}
          onClick={() => setActiveTab('Pressure')}
        >
          Pressure
        </div>
        <div
          className={`sensor-tab ${activeTab === 'Humidity' ? 'active' : ''}`}
          onClick={() => setActiveTab('Humidity')}
        >
          Humidity
        </div>
      </div>
      <div className="chart-container">
        {renderChart()}
      </div>
    </div>
  );
};

export default SensorTabs;
