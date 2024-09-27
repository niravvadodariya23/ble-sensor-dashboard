import React, { useState } from 'react';
import SensorTabs from './SensorTabs';
import './SensorPage.css';
import BluetoothButton from '../components/BluetoothButton';

const SensorPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState('');

  const handleBluetoothConnect = async () => {
    try {
      console.log("Attempting to connect to Bluetooth...");
      // Request a Bluetooth device
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // You can specify services you want to interact with
      });

      console.log(`Connected to device: ${device.name}`);
      setIsConnected(true);
      setDeviceName(device.name);

      // Add additional logic to interact with the device here
      // For example, you could read data from a service or characteristic

    } catch (error) {
      console.error("Bluetooth connection failed", error);

      // TEMPORARY: Simulate sensor data if connection fails
      var i = 0;
      setInterval(() => {
        i = i === 0 ? 1 : 0;
        const { buffer } = i === 0 
          ? new Uint8Array([2, 2, 3, 1, 1, 2, 1, 1]) 
          : new Uint8Array([1, 2, 3, 4, 1, 1, 1, 1]);

        const dataview = new DataView(buffer);
        handleTemperatureChange({ target: { value: dataview } });
      }, 1000); // Simulate data every second
    }
  };

  // Simulated data handler
  const handleTemperatureChange = (event) => {
    const dataView = event.target.value;
    const temperature = dataView.getUint8(0); // Example of getting temperature data from the first byte
    console.log(`Simulated Temperature Data: ${temperature}°C`);
    // You can update state or pass this data to your charts
  };

  return (
    <div className="sensor-page">
      <h1>Sensor Data Dashboard</h1>
      <p>Visualize real-time data from the sensors below.</p>
      <p>Connect Bluetooth To View Real-Time Data</p>
      <div style={styles.container}>
        <BluetoothButton onConnect={handleBluetoothConnect} />
        {isConnected && <p>Connected to {deviceName}</p>}
        <SensorTabs /> {/* Your tab view of charts */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#333', // Dark background
    color: 'white',
    minHeight: '100vh',
  }
};

export default SensorPage;
