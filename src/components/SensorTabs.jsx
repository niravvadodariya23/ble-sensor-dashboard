import React, { useState } from 'react';
import TemperatureChart from './TemperatureChart';
import PressureChart from './PressureChart';
import HumidityChart from './HumidityChart';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './SensorTabs.css';

const SensorTabs = () => {
  const [activeTab, setActiveTab] = useState('Temperature');

  const [selectedDate, setSelectedDate] = useState(new Date());

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

  const handleSelectChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <div className="sensor-tabs-container">
      <div className="sensor-tabs-header">
      <select className="sensor-dropdown" value={activeTab} onChange={handleSelectChange}>
      <option value="Temperature">Temperature</option>
        <option value="Pressure">Pressure</option>
        <option value="Humidity">Humidity</option>
      </select>

      <div className="date-picker-container">
        <DatePicker 
          selected={selectedDate} 
          onChange={(date) => setSelectedDate(date)} 
          maxDate={new Date()} // Allow only previous dates
          dateFormat="dd/MM/yyyy"
          className="date-picker"
        />
        </div>
      </div>

      <div className="chart-container">
        {renderChart()}
      </div>
    </div>
  );
};

export default SensorTabs;
